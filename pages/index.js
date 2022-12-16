import projects from "../settings/projects.json";
import Image from "next/image";
import {
  thumbnail_base_path,
  thumbnail_filename,
  thumbnail_gif_filename,
} from "../settings/path";
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
          generative visual systems. In particular, I'm fascinated with
          developing tools to enhance design process. <br />
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
                  <div
                    className={
                      p["no-click"]
                        ? "cursor-not-allowed"
                        : "cursor-pointer" +
                          " h-full p-3 bg-gradient-to-r from-yellow-50 hover:from-yellow-100 hover:to-orange-100 outline outline-offset-2 outline-orange-50"
                    }
                  >
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
                        p["gif-thumbnail"]
                          ? "/" +
                            thumbnail_base_path +
                            p.path +
                            thumbnail_gif_filename
                          : "/" +
                            thumbnail_base_path +
                            p.path +
                            thumbnail_filename
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
