import Image from "next/image";
import globalStyles from "../settings/global-styles.json";
import teaPainting from "../public/assets/personal/painting-tea.png";
import animalPainting from "../public/assets/personal/painting-animals.png";
import fishPainting from "../public/assets/personal/painting-serendipity.png";

export default function About() {
  return (
    <div>
      <p className={globalStyles.font_styles.p}>
        Thanks for visiting. :-) <br />
        <br />I am Mia Tang, a student at Carnegie Mellon University's{" "}
        <a
          className={globalStyles.font_styles.link}
          href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html"
        >
          BXA program
        </a>
        , majoring in Computer Science and Design. My Design concentration is
        Communications Design.
        <br />
        <br />
        Solving a problem that I couldn't solve yesterday gives me the greatest
        joy. I am an avid learner curious about a variety of topics from within
        my field of academics study to the natural world, history, and
        personal-development. The world is an intriguing system that I seek to
        understand. As long as I grow in any arbitrary axis of life on a daily
        basis, I find that to be extremely meaningful and rewarding.
        <br />
        <br />
        On the more professional side of things, I enjoy software development,
        in particular, I wish to work with graphics systems. My background in
        Computer Science equips me to take on exciting technical challenges. On
        top of enjoying the process of making things work, I am passionate about
        beautiful typography, colors, and motion. Hence, I treasure professional
        environments where I get to collaborate with designers as a developer,
        or work on projects developing tools for the creative community.
        <br />
        <br />
        In my free time, I like to experiment with my interest in storytelling.
        I enjoy finding ways to explain difficult technical concepts. It all
        started in my sophomore year in college when I was a teaching assistant
        for the class Functional Programming 15-150 at CMU. It is an
        introductory class with students coming from different majors, and
        naturally, there are students who come with a weaker background in
        logical thinking and programming. To help my students, I spent time
        thinking about how to explain complicated topics in an accessible and
        engaging manner. I strongly believe in that the process of aquiring new
        knowledge is one of the most exhilarating and gratifying experience that
        everyone deserves to have. More importantly, the repeated victories of
        conquering new intellectual challenges help us become more confident and
        resilient.
        <br />
        <br /> I also like to paint oil on canvas ʕ•̮͡•ʔ.
      </p>
      <div class="grid grid-cols-2 gap-4">
        <Image src={teaPainting} />
        <Image src={animalPainting} />
        <Image src={fishPainting} />
      </div>
    </div>
  );
}
