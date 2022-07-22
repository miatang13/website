import globalStyles from "../settings/global-styles";
import gif from "../public/random/elmo-wave.gif";
import Image from "next/image";

export default function Home() {
  const fontStyles = globalStyles.font_styles;
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper + " h-screen"}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <div className="grid grid-cols-5">
          <Image src={gif} />
        </div>
        <h1 className={fontStyles.h1}>hello there!</h1>

        <h2 className={fontStyles.h2 + " landing-text"}>
          I'm Mia Tang, and I currently study Computer Science and Design at
          Carnegie Mellon with a interest in Computer Graphics. You can find my
          professional work and personal blog here.
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
