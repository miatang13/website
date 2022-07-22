import globalStyles from "../settings/global-styles";

export default function Home() {
  const fontStyles = globalStyles.font_styles;
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper + " h-screen"}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <h1 className={fontStyles.h1}>Hello there, I am Mia Tang.</h1>
        <h2 className={fontStyles.h2 + " landing-text"}>
          I currently study Computer Science and Design at Carnegie Mellon's{" "}
          <a
            className={fontStyles.link + " font-black"}
            href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html"
          >
            BXA
          </a>{" "}
          program with a interest in Computer Graphics. You can find my
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
