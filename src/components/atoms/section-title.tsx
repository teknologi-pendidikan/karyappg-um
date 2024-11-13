import React from "react";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <h2
      id={`section-title`}
      className="text-center font-bold text-blue-950 text-2xl lg:text-6xl lg:my-5 py-2"
    >
      {props.title}
    </h2>
  );
}
