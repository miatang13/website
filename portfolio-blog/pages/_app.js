import NavBar from "../components/global/NavBar";
import "../styles/globals.scss";
import "../styles/bootstrap.min.css";
import FadeInOut from "../components/Animation/FadeInOut";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <FadeInOut>
        <Component {...pageProps} />
      </FadeInOut>
    </div>
  );
}

export default MyApp;
