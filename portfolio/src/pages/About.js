import "../styles/about.scss";
import { Container } from "react-bootstrap";
import AboutBlurb from "../components/About/AboutBlurb";
import FadeInOut from "../components/Animation/FadeInOut";
import AboutContact from "../components/About/AboutContact";
import AboutFooter from "../components/About/AboutFooter";
import AboutIntro from "../components/About/AboutIntro";

export default function About() {
  return (
    <FadeInOut>
      <div className="about_wrapper">
        <Container>
          <AboutIntro />
          <AboutBlurb />
          <AboutContact />
          <AboutFooter />
        </Container>
      </div>
    </FadeInOut>
  );
}
