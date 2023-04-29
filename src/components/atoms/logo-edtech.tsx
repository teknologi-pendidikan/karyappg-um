import * as React from "react";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};

const LogoEdtech = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 650 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M19.7682 7.5251V14.8945H31.6527V21.7449H19.7682V29.7371H33.2096V36.847H10.8939V0.415178H33.2096V7.5251H19.7682ZM52.62 0.415178C56.4604 0.415178 59.8164 1.17634 62.688 2.69865C65.5597 4.22097 67.774 6.36606 69.3309 9.13391C70.9224 11.8672 71.7182 15.0329 71.7182 18.6311C71.7182 22.1947 70.9224 25.3604 69.3309 28.1283C67.774 30.8961 65.5424 33.0412 62.6362 34.5635C59.7645 36.0859 56.4258 36.847 52.62 36.847H38.971V0.415178H52.62ZM52.0491 29.1662C55.4051 29.1662 58.0173 28.2494 59.8856 26.4157C61.7539 24.582 62.688 21.9871 62.688 18.6311C62.688 15.2751 61.7539 12.6629 59.8856 10.7946C58.0173 8.92632 55.4051 7.99217 52.0491 7.99217H47.8455V29.1662H52.0491ZM102.886 0.415178V7.5251H93.233V36.847H84.3586V7.5251H74.7057V0.415178H102.886ZM116.214 7.5251V14.8945H128.098V21.7449H116.214V29.7371H129.655V36.847H107.34V0.415178H129.655V7.5251H116.214ZM133.912 18.5792C133.912 14.981 134.69 11.7807 136.247 8.97822C137.804 6.14117 139.966 3.94419 142.734 2.38727C145.537 0.795757 148.702 0 152.231 0C156.556 0 160.258 1.14174 163.337 3.42521C166.417 5.70869 168.475 8.82253 169.513 12.7667H159.757C159.03 11.2444 157.992 10.0854 156.643 9.2896C155.328 8.49384 153.823 8.09597 152.128 8.09597C149.394 8.09597 147.18 9.04741 145.485 10.9503C143.79 12.8532 142.942 15.3962 142.942 18.5792C142.942 21.7622 143.79 24.3052 145.485 26.2081C147.18 28.111 149.394 29.0624 152.128 29.0624C153.823 29.0624 155.328 28.6646 156.643 27.8688C157.992 27.073 159.03 25.914 159.757 24.3917H169.513C168.475 28.3359 166.417 31.4497 163.337 33.7332C160.258 35.9821 156.556 37.1065 152.231 37.1065C148.702 37.1065 145.537 36.328 142.734 34.7711C139.966 33.1796 137.804 30.9826 136.247 28.1802C134.69 25.3777 133.912 22.1774 133.912 18.5792ZM206.501 0.415178V36.847H197.627V21.8487H183.822V36.847H174.948V0.415178H183.822V14.6869H197.627V0.415178H206.501ZM235.224 14.9464V22.3158H212.389V14.9464H235.224ZM251.887 0.415178V36.847H243.012V0.415178H251.887ZM271.967 0.415178C275.807 0.415178 279.163 1.17634 282.035 2.69865C284.907 4.22097 287.121 6.36606 288.678 9.13391C290.269 11.8672 291.065 15.0329 291.065 18.6311C291.065 22.1947 290.269 25.3604 288.678 28.1283C287.121 30.8961 284.889 33.0412 281.983 34.5635C279.111 36.0859 275.773 36.847 271.967 36.847H258.318V0.415178H271.967ZM271.396 29.1662C274.752 29.1662 277.364 28.2494 279.233 26.4157C281.101 24.582 282.035 21.9871 282.035 18.6311C282.035 15.2751 281.101 12.6629 279.233 10.7946C277.364 8.92632 274.752 7.99217 271.396 7.99217H267.192V29.1662H271.396ZM329.701 30.4118H316.104L313.925 36.847H304.635L317.817 0.415178H328.092L341.274 36.847H331.881L329.701 30.4118ZM327.418 23.5613L322.903 10.2237L318.44 23.5613H327.418ZM363.865 36.847L356.288 23.0943H354.16V36.847H345.286V0.415178H360.181C363.052 0.415178 365.491 0.91685 367.498 1.9202C369.539 2.92354 371.062 4.30747 372.065 6.07197C373.068 7.80188 373.57 9.73937 373.57 11.8845C373.57 14.3063 372.878 16.4687 371.494 18.3716C370.145 20.2745 368.138 21.6238 365.474 22.4196L373.881 36.847H363.865ZM354.16 16.8147H359.662C361.288 16.8147 362.499 16.4168 363.294 15.6211C364.125 14.8253 364.54 13.7009 364.54 12.2477C364.54 10.8638 364.125 9.77397 363.294 8.97822C362.499 8.18246 361.288 7.78458 359.662 7.78458H354.16V16.8147ZM405.351 0.415178V7.5251H395.696V36.847H386.822V7.5251H377.169V0.415178H405.351ZM418.676 0.415178V36.847H409.801V0.415178H418.676ZM423.602 18.5792C423.602 14.981 424.38 11.7807 425.937 8.97822C427.494 6.14117 429.656 3.94419 432.424 2.38727C435.227 0.795757 438.392 0 441.921 0C446.246 0 449.948 1.14174 453.027 3.42521C456.106 5.70869 458.165 8.82253 459.203 12.7667H449.446C448.72 11.2444 447.682 10.0854 446.333 9.2896C445.018 8.49384 443.513 8.09597 441.817 8.09597C439.084 8.09597 436.87 9.04741 435.175 10.9503C433.479 12.8532 432.632 15.3962 432.632 18.5792C432.632 21.7622 433.479 24.3052 435.175 26.2081C436.87 28.111 439.084 29.0624 441.817 29.0624C443.513 29.0624 445.018 28.6646 446.333 27.8688C447.682 27.073 448.72 25.914 449.446 24.3917H459.203C458.165 28.3359 456.106 31.4497 453.027 33.7332C449.948 35.9821 446.246 37.1065 441.921 37.1065C438.392 37.1065 435.227 36.328 432.424 34.7711C429.656 33.1796 427.494 30.9826 425.937 28.1802C424.38 25.3777 423.602 22.1774 423.602 18.5792ZM509.837 0.415178L496.915 36.847H485.809L472.887 0.415178H482.332L491.362 27.9207L500.444 0.415178H509.837ZM536.227 30.4118H522.63L520.45 36.847H511.161L524.343 0.415178H534.618L547.8 36.847H538.407L536.227 30.4118ZM533.944 23.5613L529.429 10.2237L524.965 23.5613H533.944ZM560.528 0.415178V22.212C560.528 24.3917 561.064 26.0697 562.137 27.246C563.209 28.4224 564.784 29.0105 566.859 29.0105C568.935 29.0105 570.527 28.4224 571.634 27.246C572.741 26.0697 573.295 24.3917 573.295 22.212V0.415178H582.169V22.1601C582.169 25.4123 581.477 28.1629 580.093 30.4118C578.709 32.6606 576.841 34.3559 574.488 35.4977C572.17 36.6394 569.575 37.2103 566.704 37.2103C563.832 37.2103 561.255 36.6567 558.971 35.5496C556.722 34.4078 554.94 32.7125 553.626 30.4637C552.311 28.1802 551.654 25.4123 551.654 22.1601V0.415178H560.528ZM597.276 29.9966H608.901V36.847H588.401V0.415178H597.276V29.9966ZM639.343 0.415178V7.5251H629.69V36.847H620.815V7.5251H611.162V0.415178H639.343ZM14.6298 63.9374C15.9663 64.2224 17.0401 64.8905 17.851 65.9423C18.6615 66.972 19.0671 68.1553 19.0671 69.4921C19.0671 71.4205 18.3877 72.9541 17.0293 74.0936C15.6925 75.2112 13.819 75.7699 11.4087 75.7699H0.660767V52.6964H11.0471C13.3918 52.6964 15.2216 53.2331 16.5363 54.307C17.8726 55.3808 18.5413 56.8378 18.5413 58.6784C18.5413 60.0369 18.1797 61.1656 17.4566 62.0639C16.7551 62.9621 15.8132 63.5866 14.6298 63.9374ZM6.28123 62.031H9.96248C10.8828 62.031 11.584 61.8338 12.066 61.4394C12.5701 61.0229 12.822 60.4205 12.822 59.6316C12.822 58.8428 12.5701 58.2403 12.066 57.8239C11.584 57.4074 10.8828 57.1994 9.96248 57.1994H6.28123V62.031ZM10.4226 71.2341C11.3649 71.2341 12.088 71.0261 12.5919 70.6096C13.1178 70.1715 13.3808 69.547 13.3808 68.7361C13.3808 67.9252 13.1069 67.2899 12.5591 66.8298C12.0332 66.3696 11.2991 66.1395 10.3569 66.1395H6.28123V71.2341H10.4226ZM36.6901 71.6943H28.0787L26.6982 75.7699H20.8148L29.1633 52.6964H35.6712L44.0198 75.7699H38.0706L36.6901 71.6943ZM35.2439 67.3557L32.3844 58.9085L29.5577 67.3557H35.2439ZM54.9091 76C53.222 76 51.7101 75.7262 50.3733 75.1783C49.0369 74.6303 47.9631 73.8199 47.1522 72.746C46.3633 71.6722 45.9473 70.3795 45.9032 68.8676H51.8852C51.973 69.7222 52.2688 70.3795 52.7727 70.8397C53.2769 71.2778 53.9343 71.497 54.7447 71.497C55.5777 71.497 56.2351 71.3107 56.7168 70.9383C57.1991 70.5439 57.4399 70.0072 57.4399 69.3278C57.4399 68.7582 57.2427 68.2868 56.8483 67.9144C56.476 67.5421 56.005 67.235 55.435 66.9941C54.8875 66.7532 54.0986 66.479 53.0685 66.1724C51.5786 65.7122 50.3625 65.2521 49.4201 64.7919C48.4782 64.3318 47.6673 63.6524 46.9878 62.7541C46.3089 61.8559 45.9689 60.6834 45.9689 59.2372C45.9689 57.09 46.747 55.4137 48.3026 54.2084C49.8586 52.9814 51.8852 52.3677 54.3832 52.3677C56.9253 52.3677 58.9739 52.9814 60.5296 54.2084C62.0856 55.4137 62.9181 57.1008 63.0275 59.2701H56.9469C56.9032 58.5249 56.6295 57.9445 56.1252 57.5281C55.6214 57.09 54.9748 56.8707 54.186 56.8707C53.507 56.8707 52.9591 57.0571 52.5426 57.4294C52.1265 57.7802 51.9181 58.2948 51.9181 58.9743C51.9181 59.7194 52.2688 60.2998 52.9699 60.7163C53.6713 61.1327 54.7668 61.5817 56.2567 62.0639C57.747 62.5677 58.9519 63.0499 59.8722 63.5101C60.8146 63.9702 61.6255 64.6384 62.3044 65.515C62.9839 66.3917 63.3234 67.52 63.3234 68.9005C63.3234 70.2152 62.9839 71.4093 62.3044 72.4831C61.6471 73.5569 60.6831 74.4115 59.412 75.0468C58.1414 75.6821 56.6403 76 54.9091 76ZM72.4028 52.6964V75.7699H66.7823V52.6964H72.4028ZM84.8244 76C83.1373 76 81.6253 75.7262 80.2886 75.1783C78.9522 74.6303 77.8784 73.8199 77.0675 72.746C76.2786 71.6722 75.8626 70.3795 75.8185 68.8676H81.8005C81.8883 69.7222 82.1841 70.3795 82.6879 70.8397C83.1922 71.2778 83.8496 71.497 84.66 71.497C85.493 71.497 86.1503 71.3107 86.6321 70.9383C87.1143 70.5439 87.3552 70.0072 87.3552 69.3278C87.3552 68.7582 87.158 68.2868 86.7636 67.9144C86.3912 67.5421 85.9203 67.235 85.3503 66.9941C84.8027 66.7532 84.0139 66.479 82.9837 66.1724C81.4939 65.7122 80.2777 65.2521 79.3354 64.7919C78.3934 64.3318 77.5825 63.6524 76.9031 62.7541C76.2241 61.8559 75.8842 60.6834 75.8842 59.2372C75.8842 57.09 76.6622 55.4137 78.2179 54.2084C79.7739 52.9814 81.8005 52.3677 84.2985 52.3677C86.8406 52.3677 88.8892 52.9814 90.4448 54.2084C92.0009 55.4137 92.8334 57.1008 92.9428 59.2701H86.8622C86.8185 58.5249 86.5448 57.9445 86.0405 57.5281C85.5367 57.09 84.8901 56.8707 84.1013 56.8707C83.4223 56.8707 82.8743 57.0571 82.4579 57.4294C82.0418 57.7802 81.8334 58.2948 81.8334 58.9743C81.8334 59.7194 82.1841 60.2998 82.8851 60.7163C83.5866 61.1327 84.6821 61.5817 86.172 62.0639C87.6623 62.5677 88.8672 63.0499 89.7875 63.5101C90.7298 63.9702 91.5407 64.6384 92.2197 65.515C92.8991 66.3917 93.2386 67.52 93.2386 68.9005C93.2386 70.2152 92.8991 71.4093 92.2197 72.4831C91.5624 73.5569 90.5984 74.4115 89.3273 75.0468C88.0567 75.6821 86.5556 76 84.8244 76ZM112.307 52.6964C114.74 52.6964 116.865 53.1786 118.684 54.1426C120.502 55.1066 121.905 56.4655 122.891 58.2183C123.899 59.9495 124.403 61.9544 124.403 64.2332C124.403 66.4903 123.899 68.4952 122.891 70.2481C121.905 72.0009 120.492 73.3597 118.651 74.3237C116.832 75.2877 114.718 75.7699 112.307 75.7699H103.663V52.6964H112.307ZM111.946 70.9054C114.071 70.9054 115.726 70.3246 116.909 69.1634C118.092 68.0022 118.684 66.3588 118.684 64.2332C118.684 62.1075 118.092 60.4533 116.909 59.2701C115.726 58.0868 114.071 57.4952 111.946 57.4952H109.284V70.9054H111.946ZM141.907 71.6943H133.295L131.915 75.7699H126.032L134.38 52.6964H140.888L149.237 75.7699H143.287L141.907 71.6943ZM140.461 67.3557L137.601 58.9085L134.775 67.3557H140.461ZM168.376 52.6964V57.1994H162.263V75.7699H156.642V57.1994H150.529V52.6964H168.376ZM185.56 71.6943H176.949L175.568 75.7699H169.685L178.033 52.6964H184.541L192.89 75.7699H186.941L185.56 71.6943ZM184.114 67.3557L181.255 58.9085L178.428 67.3557H184.114ZM216.759 71.6943H208.148L206.767 75.7699H200.884L209.232 52.6964H215.74L224.089 75.7699H218.14L216.759 71.6943ZM215.313 67.3557L212.453 58.9085L209.627 67.3557H215.313ZM238.397 75.7699L233.598 67.0598H232.25V75.7699H226.63V52.6964H236.063C237.882 52.6964 239.427 53.0143 240.698 53.6496C241.99 54.2849 242.954 55.1615 243.59 56.2791C244.225 57.3745 244.543 58.6019 244.543 59.9603C244.543 61.4943 244.105 62.8635 243.228 64.0688C242.374 65.2741 241.103 66.1287 239.416 66.6326L244.74 75.7699H238.397ZM232.25 63.0828H235.735C236.764 63.0828 237.531 62.8307 238.035 62.3268C238.561 61.823 238.824 61.1107 238.824 60.1904C238.824 59.3138 238.561 58.6235 238.035 58.1197C237.531 57.6158 236.764 57.3637 235.735 57.3637H232.25V63.0828ZM256.42 76C254.732 76 253.22 75.7262 251.884 75.1783C250.547 74.6303 249.473 73.8199 248.663 72.746C247.874 71.6722 247.458 70.3795 247.414 68.8676H253.396C253.483 69.7222 253.779 70.3795 254.283 70.8397C254.787 71.2778 255.445 71.497 256.256 71.497C257.088 71.497 257.745 71.3107 258.228 70.9383C258.709 70.5439 258.951 70.0072 258.951 69.3278C258.951 68.7582 258.754 68.2868 258.359 67.9144C257.986 67.5421 257.515 67.235 256.946 66.9941C256.398 66.7532 255.609 66.479 254.579 66.1724C253.089 65.7122 251.873 65.2521 250.931 64.7919C249.989 64.3318 249.178 63.6524 248.499 62.7541C247.819 61.8559 247.48 60.6834 247.48 59.2372C247.48 57.09 248.257 55.4137 249.813 54.2084C251.369 52.9814 253.396 52.3677 255.894 52.3677C258.436 52.3677 260.484 52.9814 262.04 54.2084C263.596 55.4137 264.428 57.1008 264.538 59.2701H258.458C258.414 58.5249 258.14 57.9445 257.636 57.5281C257.132 57.09 256.486 56.8707 255.697 56.8707C255.017 56.8707 254.469 57.0571 254.053 57.4294C253.637 57.7802 253.429 58.2948 253.429 58.9743C253.429 59.7194 253.779 60.2998 254.481 60.7163C255.182 61.1327 256.277 61.5817 257.767 62.0639C259.257 62.5677 260.463 63.0499 261.383 63.5101C262.325 63.9702 263.136 64.6384 263.815 65.515C264.494 66.3917 264.834 67.52 264.834 68.9005C264.834 70.2152 264.494 71.4093 263.815 72.4831C263.158 73.5569 262.193 74.4115 260.923 75.0468C259.652 75.6821 258.151 76 256.42 76ZM273.914 52.6964V75.7699H268.293V52.6964H273.914ZM295.571 60.1246C295.571 61.4614 295.264 62.6884 294.651 63.8059C294.037 64.9014 293.095 65.7888 291.824 66.4682C290.553 67.1476 288.975 67.4871 287.091 67.4871H283.607V75.7699H277.987V52.6964H287.091C288.932 52.6964 290.487 53.0143 291.758 53.6496C293.029 54.2849 293.982 55.1615 294.618 56.2791C295.253 57.3966 295.571 58.6784 295.571 60.1246ZM286.664 63.0171C287.737 63.0171 288.537 62.7649 289.063 62.2611C289.589 61.7572 289.852 61.045 289.852 60.1246C289.852 59.2043 289.589 58.492 289.063 57.9882C288.537 57.4844 287.737 57.2322 286.664 57.2322H283.607V63.0171H286.664ZM314.107 52.6964C316.539 52.6964 318.665 53.1786 320.483 54.1426C322.302 55.1066 323.704 56.4655 324.69 58.2183C325.698 59.9495 326.202 61.9544 326.202 64.2332C326.202 66.4903 325.698 68.4952 324.69 70.2481C323.704 72.0009 322.291 73.3597 320.45 74.3237C318.632 75.2877 316.517 75.7699 314.107 75.7699H305.462V52.6964H314.107ZM313.745 70.9054C315.871 70.9054 317.525 70.3246 318.708 69.1634C319.891 68.0022 320.483 66.3588 320.483 64.2332C320.483 62.1075 319.891 60.4533 318.708 59.2701C317.525 58.0868 315.871 57.4952 313.745 57.4952H311.083V70.9054H313.745ZM334.964 52.6964V75.7699H329.343V52.6964H334.964ZM354.353 59.9932C353.937 59.2264 353.334 58.6456 352.546 58.2512C351.778 57.8347 350.869 57.6267 349.818 57.6267C347.999 57.6267 346.542 58.2291 345.446 59.4344C344.35 60.6177 343.803 62.2062 343.803 64.2003C343.803 66.3259 344.372 67.991 345.512 69.1963C346.673 70.3795 348.261 70.9712 350.278 70.9712C351.658 70.9712 352.819 70.6204 353.762 69.9194C354.726 69.2183 355.427 68.2102 355.865 66.8955H348.733V62.7541H360.96V67.9801C360.543 69.3827 359.831 70.6862 358.823 71.8915C357.837 73.0968 356.577 74.0716 355.044 74.8167C353.51 75.5619 351.778 75.9343 349.85 75.9343C347.571 75.9343 345.533 75.4412 343.737 74.4552C341.962 73.4471 340.57 72.0558 339.563 70.2809C338.577 68.506 338.084 66.479 338.084 64.2003C338.084 61.9216 338.577 59.8946 339.563 58.1197C340.57 56.3227 341.962 54.9315 343.737 53.9454C345.512 52.9373 347.538 52.4335 349.818 52.4335C352.578 52.4335 354.901 53.1017 356.786 54.4384C358.692 55.7752 359.952 57.6267 360.565 59.9932H354.353ZM369.693 52.6964V75.7699H364.073V52.6964H369.693ZM390.365 52.6964V57.1994H384.251V75.7699H378.631V57.1994H372.517V52.6964H390.365ZM407.548 71.6943H398.938L397.557 75.7699H391.674L400.022 52.6964H406.532L414.878 75.7699H408.928L407.548 71.6943ZM406.104 67.3557L403.244 58.9085L400.417 67.3557H406.104ZM423.039 71.4313H430.404V75.7699H417.421V52.6964H423.039V71.4313ZM466.179 52.6964V75.7699H460.557V61.9324L455.397 75.7699H450.861L445.671 61.8995V75.7699H440.049V52.6964H446.687L453.161 68.6704L459.571 52.6964H466.179ZM484.585 71.6943H475.974L474.591 75.7699H468.709L477.056 52.6964H483.564L491.916 75.7699H485.965L484.585 71.6943ZM483.136 67.3557L480.278 58.9085L477.454 67.3557H483.136ZM514.439 52.6964V75.7699H508.817V66.271H500.076V75.7699H494.454V52.6964H500.076V61.7352H508.817V52.6964H514.439ZM532.858 71.6943H524.247L522.868 75.7699H516.982L525.333 52.6964H531.842L540.189 75.7699H534.238L532.858 71.6943ZM531.414 67.3557L528.555 58.9085L525.727 67.3557H531.414ZM551.078 76C549.392 76 547.878 75.7262 546.542 75.1783C545.205 74.6303 544.133 73.8199 543.32 72.746C542.533 71.6722 542.117 70.3795 542.074 68.8676H548.055C548.142 69.7222 548.436 70.3795 548.942 70.8397C549.448 71.2778 550.105 71.497 550.914 71.497C551.749 71.497 552.406 71.3107 552.886 70.9383C553.366 70.5439 553.608 70.0072 553.608 69.3278C553.608 68.7582 553.414 68.2868 553.016 67.9144C552.644 67.5421 552.173 67.235 551.606 66.9941C551.057 66.7532 550.27 66.479 549.236 66.1724C547.748 65.7122 546.533 65.2521 545.59 64.7919C544.647 64.3318 543.834 63.6524 543.155 62.7541C542.476 61.8559 542.139 60.6834 542.139 59.2372C542.139 57.09 542.918 55.4137 544.47 54.2084C546.027 52.9814 548.055 52.3677 550.551 52.3677C553.094 52.3677 555.144 52.9814 556.701 54.2084C558.253 55.4137 559.088 57.1008 559.196 59.2701H553.115C553.072 58.5249 552.8 57.9445 552.294 57.5281C551.792 57.09 551.143 56.8707 550.356 56.8707C549.677 56.8707 549.128 57.0571 548.713 57.4294C548.297 57.7802 548.086 58.2948 548.086 58.9743C548.086 59.7194 548.436 60.2998 549.141 60.7163C549.841 61.1327 550.936 61.5817 552.428 62.0639C553.915 62.5677 555.122 63.0499 556.043 63.5101C556.982 63.9702 557.795 64.6384 558.474 65.515C559.153 66.3917 559.494 67.52 559.494 68.9005C559.494 70.2152 559.153 71.4093 558.474 72.4831C557.816 73.5569 556.852 74.4115 555.58 75.0468C554.309 75.6821 552.808 76 551.078 76ZM568.572 52.6964V75.7699H562.95V52.6964H568.572ZM580.993 76C579.306 76 577.792 75.7262 576.456 75.1783C575.12 74.6303 574.047 73.8199 573.238 72.746C572.447 71.6722 572.032 70.3795 571.989 68.8676H577.97C578.056 69.7222 578.355 70.3795 578.856 70.8397C579.362 71.2778 580.02 71.497 580.828 71.497C581.663 71.497 582.32 71.3107 582.801 70.9383C583.285 70.5439 583.523 70.0072 583.523 69.3278C583.523 68.7582 583.328 68.2868 582.935 67.9144C582.558 67.5421 582.091 67.235 581.52 66.9941C580.971 66.7532 580.184 66.479 579.155 66.1724C577.663 65.7122 576.447 65.2521 575.505 64.7919C574.562 64.3318 573.753 63.6524 573.074 62.7541C572.395 61.8559 572.053 60.6834 572.053 59.2372C572.053 57.09 572.832 55.4137 574.389 54.2084C575.941 52.9814 577.97 52.3677 580.469 52.3677C583.008 52.3677 585.058 52.9814 586.615 54.2084C588.172 55.4137 589.002 57.1008 589.11 59.2701H583.03C582.987 58.5249 582.714 57.9445 582.208 57.5281C581.706 57.09 581.058 56.8707 580.271 56.8707C579.592 56.8707 579.042 57.0571 578.627 57.4294C578.212 57.7802 578.004 58.2948 578.004 58.9743C578.004 59.7194 578.355 60.2998 579.055 60.7163C579.756 61.1327 580.85 61.5817 582.342 62.0639C583.83 62.5677 585.036 63.0499 585.958 63.5101C586.9 63.9702 587.709 64.6384 588.388 65.515C589.067 66.3917 589.409 67.52 589.409 68.9005C589.409 70.2152 589.067 71.4093 588.388 72.4831C587.731 73.5569 586.766 74.4115 585.495 75.0468C584.228 75.6821 582.723 76 580.993 76ZM624.617 52.6964L618.601 75.7699H611.798L608.118 60.5848L604.303 75.7699H597.5L591.649 52.6964H597.665L600.986 69.4921L605.095 52.6964H611.275L615.219 69.4921L618.571 52.6964H624.617ZM641.799 71.6943H633.188L631.809 75.7699H625.923L634.274 52.6964H640.783L649.13 75.7699H643.179L641.799 71.6943ZM640.354 67.3557L637.496 58.9085L634.667 67.3557H640.354Z"
      fill={props.fill || "#22272C"}
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 11h174v174H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default LogoEdtech;
