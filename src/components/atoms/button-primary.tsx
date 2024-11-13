type Props = {
  classname?: string;
};

import * as React from "react";
export default function ButtonPrimary(styles: Props): JSX.Element {
  return (
    <svg
      width={574}
      height={167}
      viewBox="0 0 574 167"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.classname}
    >
      <rect x={3.5} y={3.5} width={567} height={160} rx={6.5} fill="#0268AB" />
      <rect
        x={13}
        y={13}
        width={365}
        height={45}
        rx={3}
        fill="#02308D"
        stroke="#002060"
        strokeWidth={2}
      />
      <rect
        x={3.5}
        y={3.5}
        width={567}
        height={160}
        rx={6.5}
        stroke="#002060"
        strokeWidth={7}
      />
    </svg>
  );
}
