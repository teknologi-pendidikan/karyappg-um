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

import fs from "fs";
import matter from "gray-matter";

type Frontcontent = {
  id: string;
  title: string;
  desc: string;
  link: string;
};

export default function Home({ content, posts }) {
  return (
    <>
      <Head>
        <title>
          Pameran Karya Teknologi Pendidikan 2023 - Universitas Negeri Malang
        </title>
      </Head>
      <main aria-label="Pameran Karya Teknologi Pendidikan 2023">
        <section id="welcome-header" className="relative hidden lg:block">
          <img
            src="/assets/bg-mainmenu.webp"
            alt="Welcome Hero Header"
            className="h-screen max-h-screen w-full object-cover origin-right"
            // width={1920}
            // height={1080}
          />
          <div id="hero-content" className="absolute bottom-10 w-full">
            <div className="flex max-w-2xl flex-col items-start justify-start space-y-4 pt-32 lg:p-12">
              <h1 className="bg-blue-400 p-3 text-4xl font-bold text-black">
                Pameran Karya Pendidikan Profesi Guru (PPG) Sekolah Pascasarjana
                UM
              </h1>
              <p className="line-clamp-4 hidden bg-green-700 p-3 text-base text-white lg:line-clamp-none lg:block">
                Selamat datang di Pameran Karya Pendidikan Profesi Guru (PPG).
              </p>
            </div>
          </div>
          <div
            id="hero-bottomline"
            className="absolute bottom-0 flex w-full items-center justify-center bg-theme-brandblue-dark"
          >
            <Link
              href="#thematic-content"
              className="p-2 text-center text-lg font-bold text-white underline hover:text-white focus:text-white"
            >
              Explorasi Karya Pendidikan Profesi Guru (PPG) Universitas Negeri
              Malang
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </section>

        <section
          id="main-content"
          className="container mx-auto flex flex-col space-y-4 lg:space-y-12 items-start justify-start px-4 lg:max-w-screen-3xl pb-24 text-white"
        >
          <div className="flex flex-col justify-center items-center lg:h-screen">
            <h1 className="lg:text-7xl text-2xl font-extrabold lg:text-center text-blue-950 lg:pb-24 pb-8 mt-12">
              Pameran Karya Pendidikan Profesi Guru (PPG) Universitas Negeri
              Malang 2024
            </h1>
            <JenisKarya />
          </div>

          <Image
            className="lg:mt-10"
            src={ImageProudly}
            alt="Mempersembahkan"
          />
          {/* <Image src={divider} alt="" height={50} className="w-full" /> */}
          {/* <GeneralInformation listpost={posts} /> */}
          {/* <Image src={divider} alt="" height={50} className="w-full" /> */}
          {/* <Image src={divider} alt="" height={50} className="w-full" /> */}
          {/* <Image src={informasiFungsiMedia} alt="informasi fungsi media" /> */}
          <Image
            src={ImageTEPFestiva}
            alt="TEP Festiva"
            className="lg:py-8 xl:hidden 2xl:block"
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
