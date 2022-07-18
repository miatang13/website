import NavBar from "../components/global/NavBar";
import "../styles/globals.scss";
import FadeInOut from "../components/animation/FadeInOut";
import Footer from "../components/global/Footer";
import Head from "next/head";
import globalStyles from "../settings/global-styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mia Tang</title>
        <meta name="description" content="Personal Website of Mia Tang." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <NavBar />
        <FadeInOut>
          <Component {...pageProps} />
        </FadeInOut>
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
