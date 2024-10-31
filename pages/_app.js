import "../styles/globals.scss";
import Footer from "../components/global/Footer";
import Head from "next/head";
import ResponsiveNav from "../components/global/ResponsiveNav";
import { Analytics } from "@vercel/analytics/react";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mia Tang</title>
        <meta name='description' content='Personal Website of Mia Tang.' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css" />
      </Head>

      <main>
        <div className="max-w-[90rem] mx-auto">
          <ResponsiveNav />
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default MyApp;
