import { Col, Row } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";

export default function ProjectShortSection(props) {
  return (
    <TiltOnIntersect>
      <div className="project_section">
        <Row>
          <Col md={6} sm={12}>
            <h1 className="section_title">{props.title}</h1>
          </Col>
          <Col md={6} sm={12}>
            {" "}
            {props.children}
          </Col>
        </Row>
        {props.hasDivider && <hr></hr>}
      </div>
    </TiltOnIntersect>
  );
}
