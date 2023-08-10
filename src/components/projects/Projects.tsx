import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: string;
  url: string;
  logo: string;
}

function ProjectCard({ project, url, logo }: ProjectCardProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between bg-white border-black border-2 rounded-sm p-4 group hover:bg-gray-300 transition-all">
      <div>
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt={`Logo ${t(`projects.${project}.name`)} - gonzaddv.com`}
            width={40}
            height={40}
            quality={100}
          />
          <h3 className="text-3xl font-bold">
            {t(`projects.${project}.name`)}
          </h3>
        </div>
        <p className="text-lg mt-2">{t(`projects.${project}.description`)}</p>
      </div>
      <div className="flex justify-end mt-2">
        <a
          className="text-violet-600 underline underline-offset-4"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("projects.visit")}
        </a>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    key: "lecto",
    logo: "/logos/lecto-logo.png",
    url: "https://lecto.app",
  },
  {
    key: "artificiame",
    logo: "/logos/artificiame.png",
    url: "https://artificia.me",
  },
  {
    key: "screening",
    logo: "/logos/lecto-logo.png",
    url: "https://test.lecto.app",
  },
  {
    key: "ruidea",
    logo: "/logos/ruidea.svg",
    url: "https://pasaporte.dea.ong",
  },
  {
    key: "finanzas",
    logo: "/logos/finanzas.png",
    url: "https://finanzas.com.uy",
  },
  {
    key: "futuria",
    logo: "/logos/futuria.png",
    url: "https://futuria.media",
  },
];

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
      {isClient &&
        PROJECTS.map(({ key, logo, url }) => (
          <ProjectCard key={key} project={key} url={url} logo={logo} />
        ))}
    </div>
  );
}
