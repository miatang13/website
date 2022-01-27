import AboutSection from "./AboutSection";
import TwoColumns from "../Layout/TwoColumns";
import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";

export default function AboutBlurb() {
  return (
    <AboutSection>
      <TwoColumns>
        <LeftColumn>
          <h1>a bit more about myself </h1>
        </LeftColumn>
        <RightColumn>
          <p>
            Solving a problem that I couldn't solve yesterday gives me the
            greatest joy.
            <br />
            <br />
            My curiosity of everything that I haven't done is the reason why I
            love to work with technology. My background in Computer Science
            equips me to take on technical challenges. On top of enjoying the
            process of making things work, I'm also a graphic designer who gets
            excited about beautiful typography, colors, and motion.
          </p>
          <p>
            Another important aspect of my work is my interest in storytelling,
            or put simply, explaining stuff. <br />
            <br />I realized this when I was a teaching assistant for a CS
            class. To help my students, I spent time thinking about how to
            explain complicated topics for people with varied backgrounds, and
            have fun while understanding it. This applies to all kinds of
            information sharing that happens in digital and physical worlds. I
            believe in creating engaging experiences that smoothly delivers
            meaningful content to its audience. Whether I'm a writer, designer,
            or a developer, I want to write, design, or build work that is
            accessible and compelling.
          </p>
        </RightColumn>
      </TwoColumns>
    </AboutSection>
  );
}
