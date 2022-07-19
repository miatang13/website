import NavBar from "../components/global/NavBar";
import "../styles/globals.scss";
import FadeInOut from "../components/animation/FadeInOut";
import Footer from "../components/global/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mia Tang</title>
        <meta name="description" content="Personal Website of Mia Tang." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <FadeInOut>
          <Component {...pageProps} />
        </FadeInOut>
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
