/// <reference path="../types/jsx.d.ts" />

import { React } from "https://deno.land/x/jsx_html/mod.ts";
import { Weather } from "./components.tsx";

export type OverlayProps = {
  code: string;
  temp: number;
  location: string;
};

export const renderOverlay = async (
  { code, temp, location }: OverlayProps,
): Promise<string> =>
  await (<Weather code={code} temp={temp} location={location} />).render();
