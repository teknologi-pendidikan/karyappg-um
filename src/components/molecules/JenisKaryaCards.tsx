import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type JenisKaryaCardProps = {
  title: string;
  image: StaticImageData;
  link: string;
};

export default function JenisKaryaCard(props: JenisKaryaCardProps) {
  return (
    <Link
      href={props.link}
      className="transition ease-in-out duration-500 hover:scale-110 rounded flex flex-col items-center justify-center w-full"
    >
      <Image
        className="rounded-2xl"
        src={props.image}
        alt={props.title}
        quality={50}
      />
      <h3 className="text-center text-xl text-blue-950 py-2">{props.title}</h3>
    </Link>
  );
}
