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
      <div className={globalStyles.div_styles.page_inner_wrapper_narrow}>
        <p className={globalStyles.font_styles.p}>
          <br />I am Mia Tang, a student at Carnegie Mellon University's{" "}
          <ExternalLink href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">
            BXA program
          </ExternalLink>
          , majoring in Computer Science and Design. My Design concentration is
          Communications Design.
          <br />
          <br />
          Solving a problem that I couldn't solve yesterday gives me the
          greatest joy. I am an avid learner curious about a variety of topics
          from within my field of academics study to the natural world, history,
          and personal-development. The world is an intriguing system that I
          seek to understand. As long as I grow in any arbitrary axis of life on
          a daily basis, I find that to be extremely meaningful and rewarding.
          <br />
          <br />
          On the more professional side of things, I enjoy software development,
          in particular, I wish to work with graphics systems. My education in
          Computer Science equips me to take on exciting technical challenges.
          On top of making things work, I am passionate about beautiful
          typography, colors, and motion. Hence, I treasure professional
          environments where I get to collaborate with designers as a developer,
          or work on projects developing tools for the creative community.
          <br />
          <br />
          In my free time, I like to experiment with my interest in
          storytelling. I strive to find ways to explain difficult technical
          concepts. It all started in my sophomore year in college when I was a
          teaching assistant for the class Functional Programming 15-150 at CMU.
          It is an introductory class with students coming from different
          majors, and naturally, there are students who come with a weaker
          background in logical thinking and programming. To help my students, I
          spent time thinking about how to explain complicated topics in an
          accessible and engaging manner. I strongly believe in that the process
          of acquiring new knowledge is one of the most exhilarating and
          gratifying experience that everyone deserves to have. More
          importantly, the repeated victories of conquering new intellectual
          challenges help us become more confident and resilient.
          <br />
          <br /> Some fun facts: (1) My favorite artistic medium is oil on
          canvas.
        </p>
        <div class="grid sm:grid-cols-2 gap-4 py-6">
          <Image src={teaPainting} />
          <Image src={animalPainting} />
        </div>
        <p className={globalStyles.font_styles.p}>
          I have two adorable corgis, Mango and Leeze.
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
