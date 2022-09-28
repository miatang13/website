import globalStyles from "../settings/global-styles";
import gif from "../public/random/penguin.gif";
import Image from "next/image";
import StyledExternalLink from "../components/global/StyledExternalLink";

export default function Home() {
  const fontStyles = globalStyles.font_styles;
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper + " h-screen"}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="grid grid-cols-6">
          <Image src={gif} />
        </div>
        <h1 className={fontStyles.h1}>hello there.</h1>

        <h2 className={fontStyles.h2 + " landing-text desktop-narrow-text"}>
          I am Mia Tang, a student at Carnegie Mellon studying Computer Science
          and Design with interests in computer graphics, vision, and generative
          visual systems. <br /> <br />
          Currently, I am part of the Generative Intelligence Lab at CMU led by
          Professor{" "}
          <StyledExternalLink href="https://www.cs.cmu.edu/~junyanz/">
            {" "}
            Jun-Yan Zhu
          </StyledExternalLink>
          , and a teaching assistant for the class Computer Graphics.
        </h2>
      </div>
      <style jsx>
        {`
          .landing-text {
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
}
