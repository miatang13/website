import TiltOnIntersect from "../Animation/TiltOnIntersect";
import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";
import TwoColumns from "../Layout/TwoColumns";
import Envelop from "../svgs/Envelop";
import Linkedin from "../svgs/Linkedin";
import Twitter from "../svgs/Twitter";
import HighlightText from "../Utility/HighlightText";
import AboutSection from "./AboutSection";

export default function AboutContact() {
  return (
    <AboutSection>
      <TiltOnIntersect>
        <TwoColumns>
          <LeftColumn>
            <h1>contact</h1>
          </LeftColumn>
          <RightColumn>
            <HighlightText>
              Currently looking for 2022 summer internship opportunities. Reach
              out to talk about anything fun. =)
            </HighlightText>
            <ul className="contact_links_wrapper">
              <li>
                <Envelop />{" "}
                <HighlightText>miatang13[at]gmail[dot]com</HighlightText>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1tXYpZihDdmMnYTsDwIiHwF3peB2Zq3r6/view?usp=sharing">
                  résumé
                </a>
                <a href="https://www.linkedin.com/in/mia-tang/">
                  <Linkedin />{" "}
                </a>{" "}
                <a href="https://twitter.com/Miamiamia0103">
                  <Twitter />
                </a>
              </li>
            </ul>
          </RightColumn>{" "}
        </TwoColumns>
      </TiltOnIntersect>
    </AboutSection>
  );
}
