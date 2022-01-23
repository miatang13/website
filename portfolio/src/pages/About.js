import "../styles/about.scss";
import { Container } from "react-bootstrap";
import AboutBlurb from "../components/About/AboutBlurb";
import FadeInOut from "../components/Animation/FadeInOut";
import AboutPhotoBlurb from "../components/About/AboutPhotoBlurb";
import AboutContact from "../components/About/AboutContact";
import AboutFooter from "../components/About/AboutFooter";

export default function About() {
  return (
    <FadeInOut>
      <div className="about_wrapper">
        <Container>
          <AboutPhotoBlurb />
          <AboutBlurb />
          <AboutContact />
          <AboutFooter />
        </Container>
      </div>
    </FadeInOut>
  );
}
