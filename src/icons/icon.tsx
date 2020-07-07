import { IconProps } from "./mod.ts";
import { React, NullableChildType } from "https://deno.land/x/jsx_html/mod.ts";

export default (
  { size, color }: IconProps,
  children?: NullableChildType[],
) => {
  return <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>;
};
