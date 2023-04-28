import { Anton } from "next/font/google";

import clsxm from "@/utils/clsxm";

const anton = Anton({ weight: "400", subsets: ["latin"] });

interface SectionProps {
  id: string;
  title: string;
  titleStyles: string;
  snap?: boolean;
  children: React.ReactNode;
}

const Section = ({
  id,
  children,
  title,
  titleStyles,
  snap = true,
}: SectionProps) => {
  return (
    <section
      className={clsxm(["h-auto md:h-screen py-28", snap && "md:snap-start"])}
      id={id}
    >
      <h1
        className={clsxm([
          `lg:-ml-2 select-none ${anton.className} uppercase`,
          titleStyles,
        ])}
      >
        {title}
      </h1>
      {children}
    </section>
  );
};

export default Section;
