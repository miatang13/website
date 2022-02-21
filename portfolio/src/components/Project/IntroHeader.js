import { Col, Row } from "react-bootstrap";
import "../../styles/project/introHeader.scss";

export default function IntroHeader(props) {
  // console.log(props);
  return (
    <div className="project_subsection">
      <Row>
        <Col className="header_tile" md={4}>
          <h4 className="header_title">Client</h4>
          <span className="header_content"> {props.client}</span>
        </Col>
        <Col className="header_tile" md={4}>
          <h4 className="header_title"> Role </h4>{" "}
          <span className="header_content"> {props.role}</span>
        </Col>
        <Col className="header_tile" md={4}>
          <h4 className="header_title"> Skills </h4>
          <span className="header_content"> {props.skills}</span>
        </Col>
      </Row>
      <Row>
        <Col className="header_tile" md={4}>
          <h4 className="header_title">Timeline</h4>
          <span className="header_content"> {props.timeline}</span>
        </Col>
        <Col className="header_tile" md={4}>
          <h4 className="header_title"> Team </h4>{" "}
          <span className="header_content"> {props.team}</span>
        </Col>
      </Row>
    </div>
  );
}
