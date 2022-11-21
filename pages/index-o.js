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
        <h1 className={fontStyles.h1}>hello there.</h1>
        {/* <div className="grid grid-cols-6">
          <Image src={gif} />
        </div> */}
        <h2 className={fontStyles.h2 + " landing-text desktop-narrow-text"}>
          I'm Mia, a student at Carnegie Mellon studying Computer Science and
          Design with interests in computer graphics, vision, and generative
          visual systems. <br />
          <br />
          👩‍💻 At the moment, I'm delighted to work with wonderful people at the
          Generative Intelligence Lab led by Professor{" "}
          <StyledExternalLink href="https://www.cs.cmu.edu/~junyanz/">
            Jun-Yan Zhu
          </StyledExternalLink>
          .<br />
          <br /> 🧑‍🏫 Teaching is also a passion of mine. You can find my
          educational work in the blog page.
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
