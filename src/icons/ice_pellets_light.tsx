import { IconProps } from "./mod.ts";
import Icon from "./icon.tsx";
import { React } from "https://deno.land/x/jsx_html/mod.ts";

export default (props: IconProps) =>
  <Icon {...props}>
    <path
      d="M117.607 122L134.754 123.216L141.424 107.372C162.053 58.3694 210.584 24 267.13 24C334.736 24 390.84 73.1374 401.558 137.513L404.665 156.172L423.533 157.511C459.59 160.07 488 190.099 488 226.667C488 264.919 456.925 296 418.504 296H331V320H418.504C470.141 320 512 278.213 512 226.667C512 177.378 473.728 137.014 425.232 133.571C412.613 57.7819 346.631 0 267.13 0C200.61 0 143.555 40.4533 119.304 98.0604C116.662 97.873 113.994 97.7778 111.304 97.7778C49.8327 97.7778 0 147.524 0 208.889C0 270.254 49.8327 320 111.304 320H181V296H111.304C63.0482 296 24 256.96 24 208.889C24 160.818 63.0482 121.778 111.304 121.778C113.428 121.778 115.529 121.853 117.607 122Z"
    />
    <path
      d="M256 252L265.009 262.991L276 272L265.009 281.009L256 292L246.991 281.009L236 272L246.991 262.991L256 252Z"
    />
    <path
      d="M221 302L230.009 312.991L241 322L230.009 331.009L221 342L211.991 331.009L201 322L211.991 312.991L221 302Z"
    />
    <path
      d="M291 302L300.009 312.991L311 322L300.009 331.009L291 342L281.991 331.009L271 322L281.991 312.991L291 302Z"
    />
  </Icon>;
