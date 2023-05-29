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
          👋 Hi there, this is Mia. I'm currently working as a Research Engineer
          Intern at Adobe. I'm thrilled to share that I'll be starting my
          master's in Computer Science at Stanford in the fall of 2023.
          <br />
          <br />
          🧑‍🎓 I recently graduated from Carnegie Mellon University, where I
          pursued Computer Science and Design with a keen interest in graphics,
          vision, and generative systems. During my undergraduate studies, I had
          the privilege of being advised by Professor{" "}
          <StyledExternalLink href='https://www.cs.cmu.edu/~junyanz/'>
            Jun-Yan Zhu
          </StyledExternalLink>
          . Additionally, I had invaluable experiences as a research assistant
          at{" "}
          <StyledExternalLink href='https://penrose.cs.cmu.edu/ '>
            Penrose
          </StyledExternalLink>
          ,{" "}
          <StyledExternalLink href='https://irislunarrover.space/'>
            Iris Rover
          </StyledExternalLink>
          , and the{" "}
          <StyledExternalLink href='http://computational-creativity.org/'>
            Computational Creativity Lab
          </StyledExternalLink>{" "}
          led by Professor{" "}
          <StyledExternalLink href='https://kyuhashim.com/'>
            Kyuha Shim
          </StyledExternalLink>
          .
          <br />
          <br />
          🛠️ Throughout my journey, I've had the opportunity to collaborate with
          amazing professionals in various roles, such as a software developer
          intern at{" "}
          <StyledExternalLink href='https://cesium.com/'>
            Cesium
          </StyledExternalLink>
          , developer intern at{" "}
          <StyledExternalLink href='https://www.jam3.com/'>
            Jam3
          </StyledExternalLink>
          , and developer & brand designer at{" "}
          <StyledExternalLink href='https://design.cmu.edu/content/school-design-debuts-new-logo-designed-students'>
            CMU School of Design
          </StyledExternalLink>
          .
          <br />
          <br />
          🧑‍🏫 Teaching is another passion of mine, and you can find my
          educational work on the blog page.
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
