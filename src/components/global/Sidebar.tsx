import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ExternalLink } from "react-feather";

import clsxm from "@/utils/clsxm";

const hoverClasses =
  "transition-all duration-300 group-hover:text-red-200 group-hover:translate-x-2 group-hover:-translate-y-2";

interface SidebarItemProps {
  name: string;
}

const SidebarItem = ({ name }: SidebarItemProps) => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      className="text-4xl p-6 cursor-pointer w-full text-center group"
      onClick={() => scrollTo(name)}
    >
      <span className={clsxm(["block", hoverClasses])}>
        {t(`sidebar.${name}`)}
      </span>
    </li>
  );
};

const Sidebar = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const changeLanguage = () => {
    const lang = router.locale === "en" ? "es" : "en";
    router.push(router.pathname, router.pathname, { locale: lang });
  };

  return (
    <div className="col-span-1 h-full relative hidden lg:flex ">
      <div className="bg-black text-white fixed top-10 bottom-10 left-3/4 right-10 p-4 flex flex-col">
        <ul className="flex flex-col flex-1">
          <SidebarItem name="home" />
          <SidebarItem name="projects" />
          <SidebarItem name="contact" />

          <li className="text-4xl p-6 cursor-pointer w-full group">
            <a
              href="https://blog.gonzaddv.com"
              target="_blank"
              rel="noopener noreferrer"
              className={clsxm([
                "flex items-center justify-center gap-4",
                hoverClasses,
              ])}
            >
              {t("sidebar.blog")}
              <ExternalLink size={26} strokeWidth={3} />
            </a>
          </li>
        </ul>

        <p
          onClick={changeLanguage}
          className="text-xl mx-auto cursor-pointer p-5"
        >
          {t("sidebar.other-lang")}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
