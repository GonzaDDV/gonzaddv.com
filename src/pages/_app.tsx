import type { AppProps } from "next/app";
import { Castoro } from "next/font/google";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import "@/styles/globals.css";

const castoro = Castoro({ weight: "400", subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={castoro.className}>
      <DefaultSeo
        defaultTitle="gonzaddv"
        additionalLinkTags={[{ rel: "icon", href: "/logo.png" }]}
        openGraph={{
          type: "website",
          locale: "en_EN",
          url: "https://gonzaddv.com/",
          siteName: "gonzaddv",
        }}
        twitter={{
          handle: "@gonzaddv",
          cardType: "summary_large_image",
        }}
        themeColor="#000"
      />
      <Component {...pageProps}></Component>
    </main>
  );
};

export default appWithTranslation(App);
