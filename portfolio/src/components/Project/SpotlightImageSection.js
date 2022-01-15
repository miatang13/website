import { Col, Row } from "react-bootstrap";
import IndivImage from "./IndivImage";

export default function SpotlightImageSection(props) {
  return (
    <div className="spotlight_video_wrapper">
      <Row style={{ paddingBottom: "2vh" }}>
        {/* <Col md={{ span: 4 }}>
          <h2 className="section_title">{props.title}</h2>
        </Col> */}
        <Col md={{ span: 12 }}>
          <IndivImage src={props.src} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6 }}>
          <h2 className="section_title">{props.title}</h2>
        </Col>
        <Col md={{ span: 6 }}>{props.children}</Col>
      </Row>
    </div>
  );
}
