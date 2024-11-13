import frameArtikel from "@/public/assets/placeholder_artikel.jpg";
import frameMedia from "@/public/assets/placeholder_media.jpg";
import frameSertifikat from "@/public/assets/placeholder_PrestasiMahasiswa.jpg";
import frameKatalog from "@/public/assets/placeholder_Katalog.jpg";
import SectionLayout from "@/components/template/section-layout";
import JenisKaryaCard from "@components/molecules/JenisKaryaCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const jeniskarya = [
  {
    id: 1,
    title: "Artikel Ilmiah",
    image: frameArtikel,
    link: "/ppg/artikel",
  },
  {
    id: 2,
    title: "Media Pembelajaran",
    image: frameMedia,
    link: "/ppg/media",
  },
  {
    id: 3,
    title: "Prestasi Mahasiswa",
    image: frameSertifikat,
    link: "/ppg/sertifikat",
  },
  {
    id: 4,
    title: "Katalog Gelar Karya",
    image: frameKatalog,
    link: "/ppg/katalog",
  },
  // {
  //   id: 2,
  //   title: "Poster & Citra 2D",
  //   image: frame2D,
  //   link: "/karya/2d",
  // },
  // {
  //   id: 3,
  //   title: "Media 3D",
  //   image: frame3D,
  //   link: "/comingsoon",
  // },
  // {
  //   id: 4,
  //   title: "Video Pembelajaran",
  //   image: frameVideo,
  //   link: "/karya/videopembelajaran",
  // },
  // {
  //   id: 5,
  //   title: "Presentasi / PPT",
  //   image: framePresentasi,
  //   link: "/karya/presentasi",
  // },
  // {
  //   id: 6,
  //   title: "Multimedia Interaktif",
  //   image: frameMI,
  //   link: "/karya/multimedia",
  // },
  // {
  //   id: 7,
  //   title: "Web Pembelajaran",
  //   image: frameWebsite,
  //   link: "/karya/situsweb",
  // },
];

export default function JenisKarya() {
  const sliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <SectionLayout
      id="kategori-karya"
      ariaLabel="Kategori karya yang dipamerkan"
      title="Karya Mahasiswa PPG "
      clasName="h-screen"
    >
      <div
        id="karyacard-desktop"
        className="hidden lg:grid grid-cols-4 flex-row items-center justify-center space-x-4 mt-8"
      >
        {jeniskarya.map((item) => (
          <JenisKaryaCard
            key={item.id}
            title={item.title}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
      <div id="container-karyacard-mobile" className="xl:hidden">
        <Slider {...sliderSetting}>
          {jeniskarya.map((item) => (
            <JenisKaryaCard
              key={item.id}
              title={item.title}
              image={item.image}
              link={item.link}
            />
          ))}
        </Slider>
      </div>
    </SectionLayout>
  );
}
