// @ts-nocheck

import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";

export default function Gallery({ photos }) {
  return (
    <div className="container mx-auto my-4 px-2">
      <h1 className="text-7xl font-bold text-center py-8 text-blue-950">
        Katalog PPG Prajabatan UM
      </h1>
      <div className="grid grid-cols-2 space-x-4">
        <iframe
          src="https://drive.google.com/file/d/1SatCPyQHHVHeAAO7WSMfb41pXiAlYKxs/preview"
          width="1280"
          height="720"
          allow="autoplay"
          className="items-center justify-center w-full"
        ></iframe>

        <iframe
          src="https://drive.google.com/file/d/1mQDnpdvXlPheCaglaR9fwiqqhDgNWnqB/preview"
          width="1280"
          height="720"
          allow="autoplay"
          className="items-center justify-center w-full"
        ></iframe>
      </div>
    </div>
  );
}
