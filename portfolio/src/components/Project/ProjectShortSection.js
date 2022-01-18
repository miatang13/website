import { Col, Row } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";

export default function ProjectShortSection(props) {
  return (
    <TiltOnIntersect>
      <div className="project_section">
        <Row>
          <Col md={6} sm={12}>
            {props.title && <SectionTitle title={props.title} />}
            {props.subtitle && (
              <SectionSubtitle>{props.subtitle}</SectionSubtitle>
            )}
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
