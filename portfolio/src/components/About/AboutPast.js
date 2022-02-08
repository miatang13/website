import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";
import TwoColumns from "../Layout/TwoColumns";
import AboutSection from "./AboutSection";

export default function AboutPast() {
  return (
    <div id="about_past">
      <AboutSection>
        <TwoColumns>
          <LeftColumn>
            <h1> in the past, </h1>
          </LeftColumn>
          <RightColumn>
            <p>
              {" "}
              I have worked as a developer intern at Jam3, research assistant at
              Penrose, developer & brand designer at CMU School of Design, and
              frontend engineer at IrisRover.
            </p>
          </RightColumn>
        </TwoColumns>
      </AboutSection>
    </div>
  );
}
