// @ts-nocheck

import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Image from "next/image";

import NextJsImageGallery from "@/components/atoms/wrapper-next-image-gallery";

type Photo = {
  uuid_karya: string;
  uuid_peserta: string;
  peserta: string;
  judul_karya: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  sizes: string;
  src: string;
  description: string;
};

const toProperCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
};

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

export default function Gallery({ photos }) {
  return (
    <div className="container mx-auto my-4 px-2">
      <h1 className="text-7xl font-bold text-center py-8 text-blue-950">
        Karya Media Mahasiswa PPG UM
      </h1>

      <iframe
        src="https://drive.google.com/file/d/1emA4j1HNGtvG3nkBHs0u-eWTTCfkaJCq/preview"
        width="1280"
        height="720"
        allow="autoplay"
        className="w-full py-12"
      ></iframe>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 pb-24 px-4">
        {photos.map((item) => (
          <Link
            className="flex flex-col p-4 rounded space-y-2 items-start justify-start transition ease-in-out duration-500 hover:scale-110 border-blue-700 border-2"
            key={item.uuid_karya}
            href="#"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                className="object-cover rounded"
                src={item.src}
                alt={item.judul_karya}
                width={500}
                height={500}
                id={`img-${item.uuid_karya}`}
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-base line-clamp-5">{item.description}</p>
              {/* <p className="text-sm pt-2">
                Dikembangkan oleh:{" "}
                <span className="font-semibold"> {item.peserta}</span>
              </p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  photos: Photo[];
}> = async () => {
  const SHEETS = "ppg-media";
  const DATA_ENDPOINT = `${process.env.SPREADSHEET_ENDPOINT}/${SHEETS}?key=${process.env.GAPI_SPREADSHEETS}&majorDimension=COLUMNS`;

  const photos = [];
  await fetch(DATA_ENDPOINT)
    .then((response) => response.json())
    .then((json) => {
      const data = json.values;
      const uuid_karya = data[0];
      const peserta = data[1];
      const uuid_peserta = data[2];
      const judul_karya = data[3];
      const desc_karya = data[4];
      const width = data[5];
      const height = data[6];
      const src = data[8];

      for (let i = 1; i < data[0].length; i += 1) {
        const item = {
          uuid_karya: uuid_karya[i],
          peserta: peserta[i],
          uuid_peserta: uuid_peserta[i],
          title: judul_karya[i],
          alt: judul_karya[i],
          sizes: "0",
          width: width[i],
          height: height[i],
          src: src[i],
          description: desc_karya[i],
        };
        photos.push(item);
      }
    });

  return {
    props: {
      photos,
    },
  };
};
