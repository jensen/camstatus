export type IconProps = {
  size: number;
  color: string;
};

import ClearDay from "./clear_day.tsx";
import ClearNight from "./clear_night.tsx";
import Cloudy from "./cloudy.tsx";
import Drizzle from "./drizzle.tsx";
import Flurries from "./flurries.tsx";
import Fog from "./fog.tsx";
import FogLight from "./fog_light.tsx";
import FreezingDrizzle from "./freezing_drizzle.tsx";
import FreezingRain from "./freezing_rain.tsx";
import FreezingRainHeavy from "./freezing_rain_heavy.tsx";
import FreezingRainLight from "./freezing_rain_light.tsx";
import IcePellets from "./ice_pellets.tsx";
import IcePelletsHeavy from "./ice_pellets_heavy.tsx";
import IcePelletsLight from "./ice_pellets_light.tsx";
import MostlyClearDay from "./mostly_clear_day.tsx";
import MostlyClearNight from "./mostly_clear_night.tsx";
import MostlyCloudyDay from "./mostly_cloudy_day.tsx";
import MostlyCloudyNight from "./mostly_cloudy_night.tsx";
import PartlyCloudyDay from "./partly_cloudy_day.tsx";
import PartlyCloudyNight from "./partly_cloudy_night.tsx";
import Rain from "./rain.tsx";
import RainHeavy from "./rain_heavy.tsx";
import RainLight from "./rain_light.tsx";
import Snow from "./snow.tsx";
import SnowHeavy from "./snow_heavy.tsx";
import SnowLight from "./snow_light.tsx";
import ThunderStorm from "./tstorm.tsx";

export const iconTable: { [code: string]: Function } = {
  clear_day: ClearDay,
  clear_night: ClearNight,
  cloudy_day: Cloudy,
  cloudy_night: Cloudy,
  drizzle_day: Drizzle,
  drizzle_night: Drizzle,
  flurries_day: Flurries,
  flurries_night: Flurries,
  fog_day: Fog,
  fog_night: Fog,
  fog_light_day: FogLight,
  fog_light_night: FogLight,
  freezing_drizzle_day: FreezingDrizzle,
  freezing_drizzle_night: FreezingDrizzle,
  freezing_rain_day: FreezingRain,
  freezing_rain_night: FreezingRain,
  freezing_rain_heavy_day: FreezingRainHeavy,
  freezing_rain_heavy_night: FreezingRainHeavy,
  freezing_rain_light_day: FreezingRainLight,
  freezing_rain_light_night: FreezingRainLight,
  ice_pellets_day: IcePellets,
  ice_pellets_night: IcePellets,
  ice_pellets_heavy_day: IcePelletsHeavy,
  ice_pellets_heavy_night: IcePelletsHeavy,
  ice_pellets_light_day: IcePelletsLight,
  ice_pellets_light_night: IcePelletsLight,
  mostly_clear_day: MostlyClearDay,
  mostly_clear_night: MostlyClearNight,
  mostly_cloudy_day: MostlyCloudyDay,
  mostly_cloudy_night: MostlyCloudyNight,
  partly_cloudy_day: PartlyCloudyDay,
  partly_cloudy_night: PartlyCloudyNight,
  rain_day: Rain,
  rain_night: Rain,
  rain_heavy_day: RainHeavy,
  rain_heavy_night: RainHeavy,
  rain_light_day: RainLight,
  rain_light_night: RainLight,
  snow_day: Snow,
  snow_night: Snow,
  snow_heavy_day: SnowHeavy,
  snow_heavy_night: SnowHeavy,
  snow_light_day: SnowLight,
  snow_light_night: SnowLight,
  tstorm_day: ThunderStorm,
  tstorm_night: ThunderStorm,
};
