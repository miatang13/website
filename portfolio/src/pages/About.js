import "../styles/about.scss";
import AboutIntro from "../components/About/AboutIntro";
import Contact from "../components/About/AboutContact";
import { Container } from "react-bootstrap";
import AboutBlurb from "../components/About/AboutBlurb";
import TwoColumns from "../components/Layout/TwoColumns";
import LeftColumn from "../components/Layout/LeftColumn";
import RightColumn from "../components/Layout/RightColumn";
import AboutSection from "../components/About/AboutSection";
import FadeInOut from "../components/Animation/FadeInOut";

export default function About() {
  return (
    <FadeInOut>
      <div className="about_wrapper">
        <Container>
          <AboutSection>
            <TwoColumns>
              <LeftColumn>
                <img
                  src="/assets/personal/bio-photo-filter.png"
                  width="100%"
                  style={{ padding: "5vw" }}
                  alt="bio"
                />
              </LeftColumn>
              <RightColumn>
                <AboutIntro />
              </RightColumn>
            </TwoColumns>
          </AboutSection>

          <AboutBlurb />
          <Contact />
        </Container>
      </div>
    </FadeInOut>
  );
}
