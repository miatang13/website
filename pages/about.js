import Image from "next/image";
import globalStyles from "../settings/global-styles";
import teaPainting from "../public/assets/personal/painting-tea.png";
import animalPainting from "../public/assets/personal/painting-animals.png";
import mangoLeeze from "../public/assets/personal/doggo.png";
import doggoSniff from "../public/assets/personal/doggo-sniff.png";
import profilePic from "../public/assets/personal/bio-photo-side-sqr.png";
import ExternalLink from "../components/global/ExternalLink";

export default function About() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id="page-container"
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <p className={globalStyles.font_styles.p}>
          <br />I am Mia Tang, a student at Carnegie Mellon University's{" "}
          <ExternalLink href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">
            BXA program
          </ExternalLink>
          , majoring in Computer Science and Design. My Design concentration is
          in Communications Design.
          <br />
          <br />
          Solving a problem I couldn't solve yesterday gives me the greatest
          joy. I'm an avid learner and seek to understand the world through
          varied perspectives. The two schools of thought I follow closely are
          Stoicism and Kaizen.
          <br />
          <br />
          Professionally speaking, I enjoy software development and wish to work
          with graphics systems. I cherish the typography, colors, and motion of
          designed artifacts. Growing up, I only dreamt of becoming an artist or
          a designer, but that took a turn when I was introduced to programming
          at CMU. Even though now I wish to work as an engineer, I still very
          much adore and love to be part of the creative community. Therefore, I
          treasure professional environments where I get to collaborate with
          creatives as a developer or work on projects building tools for
          artists and designers.
          <br />
          <br />
          In my free time, I like to experiment with my interest in
          storytelling. In particular, I strive to find ways to explain complex
          technical concepts. It all started in my sophomore year when I was a
          teaching assistant for a Functional Programming class. It is an
          introductory class with students from different majors, and naturally,
          there are students with a weaker background in logical thinking and
          programming. To help my students, I spent time thinking about how to
          explain complicated topics in an accessible and engaging manner. I
          strongly believe in that the process of acquiring new knowledge is one
          of the most exhilarating and gratifying experiences that everyone
          deserves to have. More importantly, the repeated victories of
          conquering new intellectual challenges help us become more confident
          and resilient.
          <br />
          <br /> Some fun facts: (1) My favorite artistic medium is oil on
          canvas.
        </p>
        <div class="grid sm:grid-cols-2 gap-4 py-6">
          <Image src={teaPainting} />
          <Image src={animalPainting} />
        </div>
        <p className={globalStyles.font_styles.p}>
          (2) I have two adorable corgis, Mango and Leeze. They live in the
          beautiful British Columbia, Canada, with my lovely family.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 py-6">
          <Image src={mangoLeeze} />
          <Image src={doggoSniff} />
        </div>

        <p className={globalStyles.font_styles.p}>
          That's about it for now. I'm always looking for fun opportunities, so
          feel free to contact me. The best way to reach me is at my email:
          miatang13[at]gmail[dot]com
        </p>

        <div className="grid sm:grid-cols-3 py-6">
          <div className="sm:col-start-2">
            <Image src={profilePic} />
            <p className={globalStyles.font_styles.p}>
              Thanks for visiting. :-)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
