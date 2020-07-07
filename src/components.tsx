import { React } from "https://deno.land/x/jsx_html/mod.ts";

import {
  iconTable,
} from "./icons/mod.ts";

type WeatherProps = {
  code: string;
  temp: number;
  location: string;
};

export const Weather = ({ code, temp, location }: WeatherProps) => {
  const Current = iconTable[code];

  if (!Current) return null;

  return (
    <main>
      <div id="weather">
        <Current size={96} color="white" />
      </div>
      <h3>
        <span id="temp">{temp}</span>&deg; &bull; <span id="time"></span>
      </h3>
      <h2>{location}</h2>
    </main>
  );
};
