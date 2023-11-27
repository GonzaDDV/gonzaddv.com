import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";

import ContactForm from "@/components/contact/ContactForm";
import SocialMedia from "@/components/contact/SocialMedia";
import MacButtons from "@/components/global/MacButtons";
import Section from "@/components/global/Section";
import Sidebar from "@/components/global/Sidebar";
import SplashScreen from "@/components/global/SplashScreen";
import MouseAnimation from "@/components/home/MouseAnimation";
import Projects from "@/components/projects/Projects";

const AnimatedCursor = dynamic(
  () => import("@/components/global/CustomCursor"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo
        title={t("seo.title") as string}
        description={t("seo.description") as string}
      />
      <SplashScreen />
      <div className="w-full h-screen overflow-y-scroll snap snap-y snap-mandatory grid grid-cols-4 p-10 px-6 bg-white gap-20">
        <div className="fixed top-0 right-0 left-0 h-10 w-full bg-white"></div>
        <div className="md:snap-start col-span-4 lg:col-span-3">
          <div className="fixed w-full-p lg:w-70p bg-black h-16 flex items-center p-4 rounded-t-md">
            <MacButtons />
          </div>

          <Section
            id="home"
            title={t("home.title")}
            titleStyles="xl:-my-20 lg:-my-12 md:-my-8 sm:-my-6 text-headline-mobile md:text-headline"
            snap={false}
          >
            <div className="ml-2">
              <h3 className="text-headline-sm-mobile md:text-headline-sm">
                {t("home.subtitle")}
              </h3>
              <div className="w-40 h-1 bg-black my-5"></div>
              <ReactMarkdown
                allowedElements={["a", "p", "strong", "em", "br"]}
                className="text-2xl w-full text-justify leading-relaxed"
              >
                {t("home.about-me")}
              </ReactMarkdown>
              {/* <p className="text-2xl w-full text-justify leading-relaxed">
                {t("home.about-me")}
              </p> */}
            </div>
            <div className="flex justify-center mt-20">
              <MouseAnimation />
            </div>
          </Section>

          <Section
            id="projects"
            title={t("projects.title")}
            titleStyles="xl:-my-14 lg:-my-8 md:-my-6 sm:-my-6 text-projects-mobile md:text-projects"
          >
            <p className="text-3xl lg:w-2/3 mt-6">
              {t("projects.subtitle")}
              <a
                className="text-violet-600 underline underline-offset-4"
                href="https://github.com/GonzaDDV"
              >
                GitHub
              </a>
              .
            </p>

            <Projects />
          </Section>

          <Section
            id="contact"
            title={t("contact.title")}
            titleStyles="xl:-my-20 lg:-my-12 md:-my-8 sm:-my-6 text-contact-mobile md:text-contact"
          >
            <p className="text-3xl lg:w-2/3 mt-6">{t("contact.subtitle")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-10">
              <ContactForm />
              <SocialMedia />
            </div>
          </Section>
        </div>

        <Sidebar />
        <AnimatedCursor />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
