import projects from "../settings/projects.json";
import Link from "next/link";
import Image from "next/image";
import { thumbnail_base_path, thumbnail_filename } from "../settings/path";
import globalStyles from "../settings/global-styles";
import ExternalLink from "../components/global/ExternalLink";
import dogComputerGif from "../public/assets/personal/dog-computer.gif";
import PageContainer from "../components/global/PageContainer";

export default function Work() {
  return (
    <div className="container h-screen w-screen grid" id="page-container">
      <div className="sm:w-8/12 place-self-center">
        <Image src={dogComputerGif} />
        <h1 className={globalStyles.font_styles.h1}>
          Projects are currently being updated ...{" "}
        </h1>
        <h4 className={globalStyles.font_styles.h4}>
          At the moment, I am a software developer intern at{" "}
          <ExternalLink href="https://cesium.com/">Cesium</ExternalLink>
          . During the semester, I am a teaching assistant for the class 15-462
          Computer Graphics at CMU. <br />
          <br /> In the past, I have met and collaborated with wonderful people
          as a research developer at{" "}
          <ExternalLink href="http://computational-creativity.org/">
            Computational Creativity Lab
          </ExternalLink>{" "}
          led by Professor Kyuha Shim , developer intern at{" "}
          <ExternalLink href="https://www.jam3.com/">Jam3</ExternalLink>,
          research assistant at{" "}
          <ExternalLink href="https://penrose.cs.cmu.edu/ ">
            Penrose
          </ExternalLink>
          , developer & brand designer at{" "}
          <ExternalLink href="https://design.cmu.edu/content/school-design-debuts-new-logo-designed-students">
            CMU School of Design
          </ExternalLink>
          , and frontend engineer at{" "}
          <ExternalLink href="https://irislunarrover.space/">
            {" "}
            Iris Rover
          </ExternalLink>
          .
        </h4>
      </div>
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