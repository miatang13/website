import Head from "next/head";
import GlobalContainer from "../components/layouts/GlobalContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mia Tang</title>
        <meta name="description" content="Personal Website of Mia Tang." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalContainer>
        <main>
          <div className="container w-full h-full">
            <h1 className="text-3xl font-bold underline">
              {" "}
              hello there, I'm mia, currently studying computer science and
              design{" "}
              <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">
                at carnegie mellon with a interest in computer graphics.
              </a>
            </h1>
          </div>
        </main>

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
      </GlobalContainer>
    </div>
  );
}
