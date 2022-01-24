import { Col, Row } from "react-bootstrap";
import "../../styles/gallery/intro.scss";
import IndivImage from "../Project/IndivImage";

export default function WorkIntro() {
  return (
    <div id="work_intro">
      <Row>
        <Col md={2}>
          <IndivImage src="/assets/personal/happy-elmo.gif" />
        </Col>
      </Row>
      <Row>
        <h3 className="work_intro_text">
          hello there, I'm mia, currently studying computer science and design{" "}
          <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">
            @cmu
          </a>
          , interested in computer graphics, immersive experiences, and ux
          engineering.
        </h3>
      </Row>
    </div>
  );
}
