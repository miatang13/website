import projects from "../settings/projects.json";
import Image from "next/image";
import { thumbnail_base_path, thumbnail_filename } from "../settings/path";
import globalStyles from "../settings/global-styles";
import StyledExternalLink from "../components/global/StyledExternalLink";
import LinkWrapper from "../components/global/LinkWrapper";
import projectByOrder from "../settings/project-order";

const thumbnail_w = 1920;

export default function Work() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id='page-container'
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <h4 className={globalStyles.font_styles.h2 + " work-text pb-4"}>
          👋 Hi there! I'm Mia, a student at Carnegie Mellon studying Computer
          Science and Design with interests in computer graphics, vision, and
          generative visual systems. <br />
          <br />
          👩‍💻 Currently, I'm advised by Professor{" "}
          <StyledExternalLink href='https://www.cs.cmu.edu/~junyanz/'>
            Jun-Yan Zhu
          </StyledExternalLink>{" "}
          as I work with wonderful people at the Generative Intelligence Lab.{" "}
          <br />
          <br />
          🧑‍🏫 Teaching is also a passion of mine. You can find my educational
          work in the blog page.
          <br />
          <br />
          🛠️ In the past, I have met and collaborated with amazing people as a
          software developer intern at{" "}
          <StyledExternalLink href='https://cesium.com/'>
            Cesium
          </StyledExternalLink>
          , research developer at{" "}
          <StyledExternalLink href='http://computational-creativity.org/'>
            Computational Creativity Lab
          </StyledExternalLink>{" "}
          led by Professor{" "}
          <StyledExternalLink href='https://kyuhashim.com/'>
            Kyuha Shim
          </StyledExternalLink>
          , developer intern at{" "}
          <StyledExternalLink href='https://www.jam3.com/'>
            Jam3
          </StyledExternalLink>
          , research assistant at{" "}
          <StyledExternalLink href='https://penrose.cs.cmu.edu/ '>
            Penrose
          </StyledExternalLink>
          , developer & brand designer at{" "}
          <StyledExternalLink href='https://design.cmu.edu/content/school-design-debuts-new-logo-designed-students'>
            CMU School of Design
          </StyledExternalLink>
          , and frontend engineer at{" "}
          <StyledExternalLink href='https://irislunarrover.space/'>
            Iris Rover
          </StyledExternalLink>
          .
        </h4>
        <div
          className='grid gap-4 md:grid-cols-2 pt-12 border-t-2'
          id='work-gallery-wrapper'
        >
          {projectByOrder.map((projectName) => {
            let p = projects.find((p) => {
              return p.path === projectName;
            });

            return (
              p.show && (
                <LinkWrapper
                  href={p["no-click"] ? "/" : "work" + p.page_name}
                  key={p.path}
                >
                  <div className='h-full p-3 bg-gradient-to-r from-yellow-50 hover:from-yellow-100 hover:to-orange-100 outline outline-offset-2 outline-orange-50'>
                    <p
                      className={
                        globalStyles.font_styles.p +
                        " text-slate-400  text-sm pb-3"
                      }
                    >
                      {p.timeline}
                    </p>
                    <Image
                      src={
                        "/" + thumbnail_base_path + p.path + thumbnail_filename
                      }
                      alt='Thumbnail'
                      width={thumbnail_w}
                      height={(thumbnail_w / 16) * 9}
                    />
                    <h3
                      className={
                        globalStyles.font_styles.h2 +
                        (p.complete ? " bg-gradient-to-r from-yellow-100" : " ")
                      }
                    >
                      {p.landing.title}
                    </h3>
                    <p
                      className={
                        globalStyles.font_styles.p + " text-slate-400 text-sm"
                      }
                    >
                      {p.skills}
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
