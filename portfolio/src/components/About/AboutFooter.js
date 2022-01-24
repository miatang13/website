import { Col, Row } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import AboutSection from "./AboutSection";

export default function AboutFooter() {
  return (
    <AboutSection>
      <TiltOnIntersect>
        <Row>
          <Col md={4} sm={12}>
            <img
              src="/assets/personal/with-mango-cropped.png"
              width="100%"
              id="bio-photo"
              alt="bio"
            />
          </Col>
          <Col md={8} sm={12}>
            <img src="/assets/personal/doggo.png" width="100%" alt="doggo" />
            <span>My dogs: Mango & Leeze</span>
          </Col>
        </Row>
      </TiltOnIntersect>
    </AboutSection>
  );
}
