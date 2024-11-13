// @ts-nocheck
import Head from "next/head";
import LeftPanel from "@/components/organisms/leftPanel";
import RightPanel from "@/components/organisms/RightPanel";
import About from "@/components/organisms/section/About";
import Image from "next/image";
import ImageBG from "@/public/assets/bg-fullpage.webp";
import ImaageMainmenuBG from "@/public/assets/bg-mainmenu.webp";
import ImageProudly from "@/public/assets/proudlypresent.webp";
import ImageTEPFestiva from "@/public/assets/tepfestiva.webp";
import divider from "@/public/assets/divider.png";
import Link from "next/link";

import { GetStaticProps } from "next";
import JenisKarya from "@/components/organisms/section/JenisKarya";
import informasiFungsiMedia from "@/public/assets/informasi-fungsimedia.webp";
import GeneralInformation from "@/components/organisms/section/GeneralInformation";

const ImagesBGTimeCollection = {
  bgDay: require("@/public/assets/bg-pagi.webp"),
  bgNig: require("@/public/assets/bg-malam.webp"),
};

import fs from "fs";
import matter from "gray-matter";

type Frontcontent = {
  id: string;
  title: string;
  desc: string;
  link: string;
};

export default function Home({ content, posts }) {
  const time = new Date().getHours();
  console.log(time);

  const backgroundImage =
    time >= 6 && time < 18
      ? ImagesBGTimeCollection.bgDay
      : ImagesBGTimeCollection.bgNig;

  return (
    <>
      <Head>
        <title>
          Pameran Karya Teknologi Pendidikan 2023 - Universitas Negeri Malang
        </title>
      </Head>
      <main
        className="bg-theme-blue-accent xl:bg-transparent relative"
        aria-label="Pameran Karya Teknologi Pendidikan 2023"
      >
        <section id="welcome-header" className="relative">
          <img
            src="/assets/bg-mainmenu.webp"
            alt=""
            className="absolute -top-20 -z-10 object-cover"
          />
          <div
            id="hero-bottomline"
            className="absolute bottom-0 flex w-full items-center justify-center bg-blue-950"
          >
            <Link
              href="#thematic-content"
              className="p-2 text-center text-lg font-bold text-[#F9A134] underline hover:text-white focus:text-white"
            >
              Explorasi Karya Program Profesi Guru (PPG) UM
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-[#F9A134]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div
            aria-label="mainmenu"
            id="mainmenu"
            className="relative flex items-center justify-center h-screen overflow-hidden"
          >
            <div
              id="panel-mainmenu"
              className="flex flex-col xl:flex-row justify-start items-center xl:space-x-[50rem] xl:w-full px-16 scale-[0.6] xl:scale-[0.6] 2xl:scale-[0.85] space-y-4 xl:mt-40 2xl:mt-80"
            >
              {/* <LeftPanel content={content} /> */}
              <RightPanel content={content} />
            </div>
          </div>
        </section>

        <section
          id="main-content"
          className="container mx-auto flex flex-col space-y-12 items-start justify-start px-4 lg:max-w-screen-3xl pb-24 text-white"
        >
          <div className="flex flex-col justify-center items-center lg:h-screen">
            <h1 className="text-7xl font-extrabold text-center text-blue-950 pb-24 mt-12">
              Pameran Karya Pendidikan Profesi Guru (PPG) Universitas Negeri
              Malang 2024
            </h1>
            <JenisKarya />
          </div>

          <Image className="mt-10" src={ImageProudly} alt="Mempersembahkan" />
          {/* <Image src={divider} alt="" height={50} className="w-full" /> */}
          {/* <GeneralInformation listpost={posts} /> */}
          {/* <Image src={divider} alt="" height={50} className="w-full" /> */}
          {/* <Image src={divider} alt="" height={50} className="w-full" /> */}
          {/* <Image src={informasiFungsiMedia} alt="informasi fungsi media" /> */}
          <Image
            src={ImageTEPFestiva}
            alt="TEP Festiva"
            className="py-8 xl:hidden 2xl:block"
          />
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  content: Frontcontent[];
}> = async () => {
  const SHEETS = `master-descinfo`;
  const DATA_ENDPOINT = `${process.env.SPREADSHEET_ENDPOINT}/${SHEETS}?key=${process.env.GAPI_SPREADSHEETS}&majorDimension=COLUMNS`;

  const content = [];
  await fetch(DATA_ENDPOINT)
    .then((response) => response.json())
    .then((json) => {
      const data = json.values;
      const id = data[0];
      const title = data[1];
      const desc = data[2];
      const link = data[3];

      for (let i = 1; i < data[0].length; i += 1) {
        const item = {
          id: id[i],
          title: title[i],
          desc: desc[i],
          link: link[i],
        };
        content.push(item);
      }
    });

  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      content,
      posts,
    },
  };
};
