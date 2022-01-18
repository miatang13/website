import ChatQuote from "../svgs/ChatQuote";
import AboutSection from "./AboutSection";
import TiltOnIntersect from "../Animation/TiltOnIntersect";

export default function AboutBlurb() {
  return (
    <TiltOnIntersect>
      <AboutSection>
        <ChatQuote />
        <p className="about_blurb">
          Solving a problem that I couldn't solve yesterday gives me the
          greatest joy.
          <br />
          <br />
          My curiosity of everything that I haven't done is the reason why I
          love to work with technology. My background in Computer Science equips
          me to take on technical challenges. On top of enjoying the process of
          making things work, I'm also a graphic designer who gets excited about
          beautiful typography, colors, and motion.
          <br />
          <br />
          Another important aspect of my work is my interest in storytelling, or
          put simply, explaining stuff. I realized this when I was a teaching
          assistant for a CS class. To help my students, I spent time thinking
          about how to explain complicated topics for people with varied
          backgrounds, and have fun while understanding it. This applies to all
          kinds of information sharing that happens in digital and physical
          worlds. I believe in creating engaging experiences that smoothly
          delivers meaningful content to its audience. Whether I'm a writer,
          designer, or a developer, I want to write, design, or build work that
          is accessible and compelling.
        </p>
      </AboutSection>
    </TiltOnIntersect>
  );
}
