import "../styles/globals.scss";
import Footer from "../components/global/Footer";
import Head from "next/head";
import ResponsiveNav from "../components/global/ResponsiveNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mia Tang</title>
        <meta name="description" content="Personal Website of Mia Tang." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative">
          <ResponsiveNav />
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
