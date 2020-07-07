import { IconProps } from "./mod.ts";
import Icon from "./icon.tsx";
import { React } from "https://deno.land/x/jsx_html/mod.ts";

export default (props: IconProps) =>
  <Icon {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M104.928 286.701L87.7809 285.485C86.3636 285.385 84.929 285.333 83.4783 285.333C50.59 285.333 24 311.937 24 344.667C24 377.396 50.59 404 83.4783 404H313.877C339.389 404 360 383.366 360 358C360 333.755 341.158 313.817 317.225 312.118L298.357 310.779L295.25 292.12C287.686 246.692 248.078 212 200.348 212C160.432 212 126.164 236.256 111.598 270.857L104.928 286.701ZM89.4782 261.545C87.4965 261.405 85.4958 261.333 83.4783 261.333C37.3745 261.333 0 298.643 0 344.667C0 390.69 37.3745 428 83.4783 428H313.878C352.605 428 384 396.66 384 358C384 321.034 355.296 290.76 318.924 288.178C309.46 231.336 259.974 188 200.348 188C150.458 188 107.666 218.34 89.4782 261.545Z"
    />
    <path
      d="M383.29 348L465.252 348C491.07 348 512 327.107 512 301.333C512 276.689 492.864 256.507 468.616 254.786C462.307 216.891 429.316 188 389.565 188C356.305 188 327.778 208.227 315.652 237.03C314.331 236.937 312.997 236.889 311.652 236.889C307.066 236.889 302.609 237.443 298.346 238.487C303.306 245.443 307.541 252.949 310.942 260.897C311.178 260.891 311.415 260.889 311.652 260.889C312.431 260.889 313.198 260.916 313.955 260.97L331.103 262.186L337.772 246.342C346.275 226.143 366.279 212 389.565 212C417.42 212 440.533 232.246 444.942 258.727L448.049 277.386L466.917 278.725C478.726 279.564 488 289.41 488 301.333C488 313.812 477.855 324 465.252 324L375.188 324C379.257 331.297 382.057 339.396 383.29 348Z"
    />
    <path
      d="M404.894 399.637C424.095 399.637 442.876 397.784 461.065 394.245C416.283 451.348 346.672 488 268.531 488C207.133 488 151.02 465.372 108.077 428L83.4783 428C79.8646 428 76.3046 427.771 72.812 427.326C121.794 479.448 191.361 512 268.531 512C364.944 512 449.491 461.189 496.852 384.884C498.506 382.218 500.115 379.522 501.678 376.795C505.005 370.99 508.121 365.048 511.017 358.981C511.281 358.426 511.544 357.871 511.805 357.314C512.586 355.648 510.878 353.919 509.183 354.634C508.907 354.75 508.631 354.866 508.355 354.981C508.086 355.094 507.816 355.206 507.547 355.317C501.347 357.884 495.03 360.226 488.606 362.332C486.066 363.164 483.51 363.96 480.938 364.718C456.828 371.824 431.306 375.637 404.894 375.637C397.182 375.637 389.546 375.312 381.998 374.674C379.944 383.065 376.375 390.863 371.597 397.762C382.525 399.001 393.635 399.637 404.894 399.637Z"
    />
    <path
      d="M130.969 209.992C137.568 205.328 144.659 201.311 152.149 198.035C141.931 169.638 136.363 139.022 136.363 107.106C136.363 80.6938 140.176 55.1722 147.282 31.0618C148.04 28.4896 148.836 25.9335 149.668 23.3941C151.774 16.9702 154.116 10.6531 156.683 4.45305C156.909 3.90692 157.137 3.3617 157.366 2.8174C158.081 1.12241 156.352 -0.586122 154.686 0.194709C154.129 0.455786 153.574 0.718719 153.019 0.9835C146.952 3.87882 141.01 6.99512 135.205 10.322C132.478 11.8847 129.782 13.4938 127.116 15.1483C50.8111 62.5095 0 147.056 0 243.469C0 266.053 2.78791 287.986 8.03834 308.942C12.7114 299.125 19.2506 290.366 27.1982 283.119C25.094 270.214 24 256.969 24 243.469C24 165.328 60.652 95.7169 117.755 50.9352C114.216 69.1239 112.363 87.9055 112.363 107.106C112.363 143.314 118.942 177.986 130.969 209.992Z"
    />
  </Icon>;
