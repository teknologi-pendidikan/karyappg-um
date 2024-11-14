// @ts-nocheck
import SectionLayout from "@/components/template/section-layout";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type dataKarya = {
  uuid: string;
  author: string;
  title: string;
  obj: string;
  category: string;
  output_type: string;
};

const toProperCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
};

export default function DokumenPembelajaran({ content }: dataKarya) {
  return (
    <SectionLayout
      id="karya-dokumen-pembelajaran"
      ariaLabel="Luaran Artikel Ilmiah"
      title="Luaran Pengabdian PPG UM"
    >
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 pb-24 px-4">
        {content
          .filter((item) => item.category === "Pengabdian")
          .map((item) => (
            <Link
              className="flex flex-col p-4 rounded space-y-2 items-start justify-start transition ease-in-out duration-500 hover:scale-110 border-blue-700 border-2"
              key={item.uuid}
              href={item.obj}
            >
              <div className="flex flex-col justify-between w-full">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-base line-clamp-5">{item.output_type}</p>
                <p className="text-sm pt-2">
                  Dikembangkan oleh:{" "}
                  <span className="font-semibold"> {item.author}</span>
                </p>
              </div>
            </Link>
          ))}
      </div>
    </SectionLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const SHEETS = "ppm-aset";
  const DATA_ENDPOINT = `${process.env.SPREADSHEET_ENDPOINT}/${SHEETS}?key=${process.env.GAPI_SPREADSHEETS}&majorDimension=COLUMNS`;

  const content = [];
  await fetch(DATA_ENDPOINT)
    .then((res) => res.json())
    .then((json) => {
      const data = json.values;
      const uuid = data[0];
      const author = data[1];
      const title = data[2];
      const obj = data[3];
      const category = data[4];
      const output_type = data[5];

      for (let i = 1; i < data[0].length; i++) {
        const item = {
          uuid: uuid[i],
          author: author[i],
          title: title[i],
          obj: obj[i],
          category: category[i],
          output_type: output_type[i],
        };
        content.push(item);
      }
    });

  return {
    props: {
      content,
    },
  };
};
