import Image from "next/image";
import HappyElmo from "../public/assets/personal/penguin.gif";
import globalStyles from "../settings/global-styles";

export default function Home() {
  return (
    <div className="container h-screen w-screen grid">
      <div className="container h-screen w-screen grid" id="page-container">
        <div className="sm:w-8/12 place-self-center">
          <Image src={HappyElmo} width={200} height={130} />

          <h1
            className={
              "text-3xl font-black font-mono text-slate-900 align-middle py-12" +
              " py-10"
            }
          >
            Hello there, I'm Mia.
          </h1>
          <h4 className={globalStyles.font_styles.h4}>
            I currently study Computer Science and Design at Carnegie Mellon's{" "}
            <a
              className={globalStyles.font_styles.link}
              href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html"
            >
              BXA
            </a>{" "}
            program with a interest in Computer Graphics.
          </h4>
        </div>
      </div>
    </div>
  );
}
