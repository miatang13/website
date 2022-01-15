import { Col, Container, Row } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";

export default function ProjectShortSection(props) {
  return (
    <TiltOnIntersect>
      <Container className="project_section">
        <Row>
          <Col md={6}>
            <h1 className="section_title">{props.title}</h1>
          </Col>
          <Col md={6}> {props.children}</Col>
        </Row>
        {props.hasDivider && <hr></hr>}
      </Container>
    </TiltOnIntersect>
  );
}
