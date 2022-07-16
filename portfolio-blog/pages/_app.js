import NavBar from "../components/global/NavBar";
import "../styles/globals.scss";
import "../styles/bootstrap.min.css";
import FadeInOut from "../components/animation/FadeInOut";
import globalStyles from "../settings/global-styles.json";
import Twitter from "../components/svgs/Twitter";
import Linkedin from "../components/svgs/Linkedin";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <NavBar />
      <FadeInOut>
        <Component {...pageProps} />
        <footer className="container py-6 pb-6 w-screen place-content-center grid">
          <ul className="flex flex-none md:flex-1 space-x-4 place-content-center">
            <li>
              <a href="https://twitter.com/Miamiamia0103">
                <Twitter />
              </a>
            </li>
            <li>
              <a
                className="align-baseline"
                href="https://www.linkedin.com/in/mia-tang/"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
          <h4 className={globalStyles.font_styles.h4 + " align-top"}>
            &copy; mia tang 2018-2022
          </h4>
        </footer>
      </FadeInOut>
    </div>
  );
}

export default MyApp;
