import projects from "../settings/projects.json";
import Link from "next/link";
import Image from "next/image";
import { thumbnail_base_path, thumbnail_filename } from "../settings/path";
import globalStyles from "../settings/global-styles";
import dogComputerGif from "../public/assets/personal/dog-computer.gif";
import StyledExternalLink from "../components/global/StyledExternalLink";

export default function Work() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper + " sm:h-screen"}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        {/* <Image src={dogComputerGif} /> */}
        <h1 className={globalStyles.font_styles.h1}>
          Projects are currently being updated.{" "}
        </h1>
        <h2
          className={
            globalStyles.font_styles.h2 + " work-text desktop-narrow-text"
          }
        >
          At the moment, I am a software developer intern at{" "}
          <StyledExternalLink href="https://cesium.com/">
            Cesium
          </StyledExternalLink>
          . During the semester, I am a teaching assistant for the class 15-462
          Computer Graphics. <br />
          <br /> In the past, I have met and collaborated with wonderful people
          as a research developer at{" "}
          <StyledExternalLink href="http://computational-creativity.org/">
            Computational Creativity Lab
          </StyledExternalLink>{" "}
          led by Professor Kyuha Shim, developer intern at{" "}
          <StyledExternalLink href="https://www.jam3.com/">
            Jam3
          </StyledExternalLink>
          , research assistant at{" "}
          <StyledExternalLink href="https://penrose.cs.cmu.edu/ ">
            Penrose
          </StyledExternalLink>
          , developer & brand designer at{" "}
          <StyledExternalLink href="https://design.cmu.edu/content/school-design-debuts-new-logo-designed-students">
            CMU School of Design
          </StyledExternalLink>
          , and frontend engineer at{" "}
          <StyledExternalLink href="https://irislunarrover.space/">
            {" "}
            Iris Rover
          </StyledExternalLink>
          .
        </h2>
      </div>
      <style jsx>
        {`
          .work-text,
          a.external-link {
            font-weight: 400;
          }
        `}
      </style>
    </div>
  );
}

/*
  <div
        className="container grid gap-4 grid-cols-2 grid-rows-2"
        id="work-gallery-wrapper"
      >
        {projects.map((p) => (
          <Link href={"projects" + p.page_name} key={p.name}>
            <div className="container">
              <Image
                src={"/" + thumbnail_base_path + p.path + thumbnail_filename}
                alt="Thumbnail"
                width="100%"
                height="100%"
              />
              <div className="container">
                <h2 className="text-slate-900 font-mono">{p.landing.title}</h2>
                <h4 className="text-slate-700 font-mono">
                  {p.landing.subtitle}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>*/
