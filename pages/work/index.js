import projects from "../../settings/projects.json";
import Link from "next/link";
import Image from "next/image";
import { thumbnail_base_path, thumbnail_filename } from "../../settings/path";
import globalStyles from "../../settings/global-styles";
import dogComputerGif from "../../public/assets/personal/dog-computer.gif";
import StyledExternalLink from "../../components/global/StyledExternalLink";
import LinkWrapper from "../../components/global/LinkWrapper";
import projectByOrder from "../../settings/project-order";

const thumbnail_w = 1920;

export default function Work() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
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
            Iris Rover
          </StyledExternalLink>
          .
        </h2>
        <div
          className="grid gap-4 sm:grid-cols-2 pt-12"
          id="work-gallery-wrapper"
        >
          {projectByOrder.map((projectName) => {
            let p = projects.find((p) => {
              return p.path === projectName;
            });

            return (
              p.show && (
                <LinkWrapper href={"work" + p.page_name} key={p.path}>
                  <div className="p-3 bg-gradient-to-r from-yellow-50 hover:from-yellow-100 hover:to-orange-100 outline outline-offset-2 outline-orange-50">
                    <p
                      className={
                        globalStyles.font_styles.p + " text-slate-400  text-sm"
                      }
                    >
                      {p.timeline}
                    </p>
                    <Image
                      src={
                        "/" + thumbnail_base_path + p.path + thumbnail_filename
                      }
                      alt="Thumbnail"
                      width={thumbnail_w}
                      height={(thumbnail_w / 16) * 9}
                    />
                    <h2
                      className={
                        globalStyles.font_styles.h2 +
                        (p.complete ? " bg-gradient-to-r from-yellow-100" : " ")
                      }
                    >
                      {p.landing.title.toUpperCase()}
                    </h2>
                    <p
                      className={globalStyles.font_styles.p + " text-slate-400"}
                    >
                      {p.role} | {p.skills}
                    </p>
                  </div>
                </LinkWrapper>
              )
            );
          })}
        </div>
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

/**
 * <div className="pr-6 pb-12 border-b-2">
              <h2 className={globalStyles.font_styles.h2 + " sm:pb-6 pb-3"}>
                Topics Related To {key}
              </h2>
              <div className="grid sm:grid-cols-3 sm:gap-12 gap-8 select-none">
                {grpBlogs[key].map((b) => (
                  <LinkWrapper href={b.page_path} external={b.external}>
                    <div
                      className={
                        "p-3 bg-gradient-to-r from-yellow-50 hover:from-yellow-100 hover:to-orange-100 outline outline-offset-2 " +
                        (b.complete
                          ? "outline-orange-50"
                          : "outline-slate-50 from-slate-50 hover:from-slate-50 hover:to-slate-50 hover:cursor-not-allowed")
                      }
                    >
                      <p
                        className={
                          globalStyles.font_styles.p +
                          " text-slate-400  text-sm"
                        }
                      >
                        {b.date} | {b.format}
                      </p>
                      <div>
                        <Image src={b.img_path} width={400} height={400} />
                      </div>
                      <h3
                        className={
                          globalStyles.font_styles.h3 +
                          (b.complete
                            ? " bg-gradient-to-r from-yellow-100"
                            : " ")
                        }
                      >
                        {b.title}
                      </h3>

                      <p
                        className={
                          globalStyles.font_styles.p + " text-slate-600"
                        }
                      >
                        {b.covered.map((topic, index) => (
                          <span className="inline-flex text-sm">
                            {topic}
                            {index !== b.covered.length - 1 && ", "}{" "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </LinkWrapper>
                ))}
              </div>
            </div>
 */
