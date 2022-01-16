import { Col, Row } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import SectionTitle from "./SectionTitle";

export default function ProjectShortSection(props) {
  return (
    <TiltOnIntersect>
      <div className="project_section">
        <Row>
          <Col md={6} sm={12}>
            <SectionTitle title={props.title} />
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
