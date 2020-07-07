import "https://deno.land/x/dotenv/load.ts";
import {
  Application,
  Router,
  Context,
  Status,
  send,
  isHttpError,
} from "https://deno.land/x/oak/mod.ts";
import { renderOverlay, OverlayProps } from "./overlay.tsx";

type Cache = {
  time: number;
  code: string;
  temp: number;
};

type Location = {
  label: string;
  lat: number;
  lon: number;
  cache: Cache | null;
};

const locations: { [city: string]: Location } = {
  vancouver: {
    label: "Vancouver, BC",
    lat: 49.2578263,
    lon: -123.1939435,
    cache: null,
  },
  calgary: {
    label: "Calgary, AB",
    lat: 50.5564227,
    lon: -114.2578254,
    cache: null,
  },
  ottawa: {
    label: "Ottawa, ON",
    lat: 44.8857004,
    lon: -76.1544617,
    cache: null,
  },
  toronto: {
    label: "Toronto, ON",
    lat: 43.7167009,
    lon: -78.9479708,
    cache: null,
  },
  montreal: {
    label: "Montreal, QC",
    lat: 45.6247738,
    lon: -73.8774817,
    cache: null,
  },
};

const UPDATE_FREQUENCY_MINUTES = 15;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;
const MILLISECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE *
  MILLISECONDS_IN_SECOND;

const app = new Application();
const router = new Router();

const API_KEY = Deno.env.get("WEATHER_API_KEY");

const notFound = (context: Context) => {
  context.response.status = Status.NotFound;
  context.response.body =
    `<html><body><h1>404 - Not Found</h1><p>Path <code>${context.request.url}</code> not found.`;
};

const update = async (city: string): Promise<OverlayProps> => {
  const key: string = city.toLowerCase();
  const cache: null | Cache = locations[key] && locations[key].cache;

  if (cache) {
    const now = new Date().getTime();

    if (
      now - cache.time <
        UPDATE_FREQUENCY_MINUTES * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND
    ) {
      return {
        code: cache.code,
        temp: cache.temp,
        location: locations[key].label,
      };
    }
  }

  const response = await fetch(
    `https://api.climacell.co/v3/weather/realtime?lat=${
      locations[key].lat
    }&lon=${
      locations[key].lon
    }&fields=feels_like,weather_code,sunrise,sunset&apikey=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const json = await response.json();

  const start: Date = new Date(json.sunrise.value);
  const end: Date = new Date(json.sunset.value);
  const observed: Date = new Date(json.observation_time.value);

  const code = `${json.weather_code.value}_${
    ((observed.getTime() >= start.getTime() &&
      observed.getTime() <= end.getTime()) ||
      (observed.getTime() >=
          start.getTime() - 24 * MILLISECONDS_IN_HOUR &&
        observed.getTime() <= end.getTime() - 24 * MILLISECONDS_IN_HOUR))
      ? "day"
      : "night"
  }`;

  const temperature: number = Math.floor(json.feels_like.value);

  locations[key].cache = {
    time: new Date().getTime(),
    code,
    temp: temperature,
  };

  if (!code || !temperature) {
    throw new Error("Code or Temp is null");
  }

  return {
    code,
    temp: temperature,
    location: locations[key].label,
  };
};

const render = async (path: string, html: string) => {
  const contents = await Deno.readFile(`${Deno.cwd()}/${path}`);

  return new TextDecoder("utf-8").decode(contents).replace(
    "<!-- BODY -->",
    html,
  );
};

const validateCity = async (context: any, next: any) => {
  if (!context.params.city) {
    throw new Error("No City Specified");
  }

  if (
    Object.keys(locations).includes(
      context.params.city?.toLowerCase(),
    )
  ) {
    await next();
  } else {
    notFound(context);
  }
};

router.get("/:city", validateCity, async (context) => {
  // @ts-ignore: `city` param is validated with `validateCity` middleware
  const props: OverlayProps = await update(context.params.city);
  const html: string = await renderOverlay(props);

  context.response.body = await render("/static/index.html", html);
});

router.get("/:city/update", validateCity, async (context) => {
  // @ts-ignore: `city` param is validated with `validateCity` middleware
  const props: OverlayProps = await update(context.params.city);

  context.response.body = await renderOverlay(props);
});

app.use(async (context: Context, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      const { message, status, stack } = err;
      context.response.body = `${status} ${message}\n\n${stack ?? ""}`;
      context.response.type = "text/plain";
    } else {
      console.log(err);
      throw err;
    }
  }
});

app.use(async (context, next) => {
  try {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/static`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

app.use(router.routes());

await app.listen({ port: 8000 });
