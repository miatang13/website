import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";
import TwoColumns from "../Layout/TwoColumns";
import AboutSection from "./AboutSection";

export default function AboutIntro() {
  return (
    <div id="about_intro">
      <AboutSection>
        <TwoColumns>
          <LeftColumn>
            <h1> thanks for stopping by! </h1>
          </LeftColumn>
          <RightColumn>
            <p>
              Hi, I am Mia Tang, and I am interested in creating interactive
              experiences (web, MR, & game).
            </p>{" "}
            <p>
              I currently study at Carnegie Mellon University under the
              interdisciplinary{" "}
              <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">
                BXA program
              </a>
              , majoring in Computer Science and Communications Design.
            </p>
            <p>
              I seek to work in environments that allow me to be creative and
              technical at the same time.{" "}
            </p>{" "}
          </RightColumn>
        </TwoColumns>
      </AboutSection>
    </div>
  );
}
