// @ts-nocheck

import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";

export default function Gallery({ photos }) {
  return (
    <div className="container mx-auto my-4 px-2">
      <h1 className="text-4xl lg:text-7xl font-bold text-center py-8 text-blue-950">
        Roadmap Penelitian 2024 - 2028
      </h1>
      <div className="grid grid-cols-1 space-x-4">
        <iframe
          src="https://drive.google.com/file/d/1IEYhrmeWhbtkQ6gPPT3mK-07edtz-G4z/preview"
          width="1280"
          height="1280"
          allow="autoplay"
          className="w-full py-12"
        ></iframe>
      </div>
    </div>
  );
}
