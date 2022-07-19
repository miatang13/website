import Image from "next/image";
import HappyElmo from "../public/assets/personal/penguin.gif";
import globalStyles from "../settings/global-styles";

export default function Home() {
  const fontStyles = globalStyles.font_styles;
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper + " h-screen"}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper_narrow}>
        <Image src={HappyElmo} width={200} height={130} />

        <h1 className={fontStyles.h1 + " font-semibold"}>
          Hello there, I'm Mia. <br />
          <br /> I currently study Computer Science and Design at Carnegie
          Mellon's{" "}
          <a
            className={fontStyles.link}
            href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html"
          >
            BXA
          </a>{" "}
          program with a interest in Computer Graphics. You can find my
          professional work and personal blog on this website.
        </h1>
      </div>
    </div>
  );
}
