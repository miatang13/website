import NavBar from "../components/global/NavBar";
import "../styles/globals.scss";
import FadeInOut from "../components/animation/FadeInOut";
import Footer from "../components/global/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <NavBar />
      <FadeInOut>
        <Component {...pageProps} />
      </FadeInOut>
      <Footer />
    </div>
  );
}

export default MyApp;
