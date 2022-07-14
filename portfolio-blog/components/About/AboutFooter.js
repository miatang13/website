import { Row } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import AboutSection from "./AboutSection";

export default function AboutFooter() {
  return (
    <AboutSection>
      <TiltOnIntersect>
        <Row>
          <img src="/assets/personal/doggo.png" width="100%" alt="doggo" />
          <span>
            {" "}
            <b>Mango & Leeze</b>
          </span>
        </Row>
      </TiltOnIntersect>
    </AboutSection>
  );
}
