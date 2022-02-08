import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";
import TwoColumns from "../Layout/TwoColumns";
import HighlightText from "../Utility/HighlightText";
import RefLink from "../Utility/RefLink";
import AboutSection from "./AboutSection";

export default function AboutCurrent() {
  return (
    <div id="about_current">
      <AboutSection>
        <TwoColumns>
          <LeftColumn>
            <h1> currently, </h1>
          </LeftColumn>
          <RightColumn>
            <p>
              I am working as a <HighlightText>backend developer</HighlightText>{" "}
              at{" "}
              <RefLink
                text="Computational Creativity Lab"
                href="http://computational-creativity.org/"
              />{" "}
              led by Professor Kyuha Shim, and a{" "}
              <HighlightText>teaching assistant</HighlightText> for the class
              Computer Graphics (15-462) at CMU.
            </p>
          </RightColumn>
        </TwoColumns>
      </AboutSection>
    </div>
  );
}

/**
 *  <p>
              Currently, I am working as a{" "}
              <HighlightText>backend developer</HighlightText> at Professor
              Kyuha Shim's{" "}
              <RefLink
                text="Computational Creativity Lab"
                href="http://computational-creativity.org/"
              />
              , and a teaching assistant for the class Computer Graphics
              (15-462) at CMU.
            </p>{" "}
 */
