import { Col, Row } from "react-bootstrap";
import IndivVideo from "./IndivVideo";
import SectionSubtitle from "./SectionSubtitle";

export default function SpotlightVideoSection(props) {
  return (
    <div className="spotlight_video_wrapper" style={{ paddingBottom: "2vh" }}>
      <Row>
        <Col md={{ span: 6 }}>
          {props.title && <h2 className="section_title">{props.title}</h2>}
          {props.subtitle && (
            <SectionSubtitle>{props.subtitle}</SectionSubtitle>
          )}
        </Col>
      </Row>
      <Row style={{ paddingBottom: "2vh" }}>
        {/* <Col md={{ span: 4 }}>
          <h2 className="section_title">{props.title}</h2>
        </Col> */}
        <Col md={{ span: 12 }}>
          <IndivVideo src={props.src} />
        </Col>
      </Row>
      <Row>{props.children}</Row>
    </div>
  );
}
