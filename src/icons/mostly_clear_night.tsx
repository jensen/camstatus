import { IconProps } from "./mod.ts";
import Icon from "./icon.tsx";
import { React } from "https://deno.land/x/jsx_html/mod.ts";

export default (props: IconProps) =>
  <Icon {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M252.102 274.186L234.955 272.97C234.198 272.916 233.43 272.889 232.652 272.889C215.132 272.889 201 287.056 201 304.444C201 321.833 215.132 336 232.652 336H386.252C398.855 336 409 325.813 409 313.333C409 301.41 399.726 291.564 387.917 290.725L369.049 289.386L365.942 270.727C361.533 244.246 338.42 224 310.565 224C287.279 224 267.275 238.143 258.772 258.342L252.102 274.186ZM236.652 249.03C235.331 248.937 233.997 248.889 232.652 248.889C201.916 248.889 177 273.762 177 304.444C177 335.127 201.916 360 232.652 360H386.252C412.07 360 433 339.107 433 313.333C433 288.689 413.864 268.507 389.616 266.786C383.307 228.891 350.316 200 310.565 200C277.305 200 248.777 220.227 236.652 249.03Z"
    />
    <path
      d="M404.894 399.637C424.095 399.637 442.876 397.784 461.065 394.245C416.283 451.348 346.672 488 268.531 488C133.48 488 24 378.52 24 243.469C24 165.328 60.652 95.7169 117.755 50.9352C114.216 69.1239 112.363 87.9055 112.363 107.106C112.363 177.332 137.109 241.778 178.356 292.2C180.363 283.293 184.513 275.195 190.238 268.475C156.413 223.552 136.363 167.67 136.363 107.106C136.363 80.6938 140.176 55.1722 147.282 31.0618C148.04 28.4896 148.836 25.9335 149.668 23.3941C151.774 16.9702 154.116 10.6531 156.683 4.45305C156.909 3.90692 157.137 3.3617 157.366 2.8174C158.081 1.12241 156.352 -0.586122 154.686 0.194709C154.129 0.455786 153.574 0.718719 153.019 0.9835C146.952 3.87882 141.01 6.99512 135.205 10.322C132.478 11.8847 129.782 13.4938 127.116 15.1483C50.8111 62.5095 0 147.056 0 243.469C0 391.775 120.225 512 268.531 512C364.944 512 449.491 461.189 496.852 384.884C498.506 382.218 500.115 379.522 501.678 376.795C505.005 370.99 508.121 365.048 511.017 358.981C511.281 358.426 511.544 357.871 511.805 357.314C512.586 355.648 510.878 353.919 509.183 354.634C508.907 354.75 508.631 354.866 508.355 354.981C508.086 355.094 507.816 355.206 507.547 355.317C501.347 357.884 495.03 360.226 488.606 362.332C486.066 363.164 483.51 363.96 480.938 364.718C456.828 371.824 431.306 375.637 404.894 375.637C373.133 375.637 342.661 370.123 314.381 360H257.765C300.987 385.2 351.255 399.637 404.894 399.637Z"
    />
  </Icon>;