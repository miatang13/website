import NavBar from "../components/global/NavBar";
import "../styles/globals.scss";
import "../styles/bootstrap.min.css";
import FadeInOut from "../components/animation/FadeInOut";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <NavBar />
      <FadeInOut>
        <Component {...pageProps} />
        {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      </FadeInOut>
    </div>
  );
}

export default MyApp;
