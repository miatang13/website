import "../styles/about.scss";
import { Container } from "react-bootstrap";
import FadeInOut from "../components/Animation/FadeInOut";
import AboutFooter from "../components/About/AboutFooter";
import AboutLongBlurb from "../components/About/AboutLongBlurb";

export default function About() {
  return (
    <FadeInOut>
      <div className="about_wrapper">
        <Container>
          <AboutLongBlurb />
          <AboutFooter />
        </Container>
      </div>
    </FadeInOut>
  );
}
