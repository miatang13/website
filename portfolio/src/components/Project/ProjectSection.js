import { Col, Container, Row } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";

export default function ProjectSection(props) {
  return (
    <TiltOnIntersect>
      <Container className="project_section">
        {/* <Row>
          <Col className="center_container"> */}
        <h1 className="section_title">{props.title}</h1>
        {/* </Col>
        </Row> */}

        {props.children}
        {props.hasDivider && <hr></hr>}
      </Container>
    </TiltOnIntersect>
  );
}
