import { Col, Row } from "react-bootstrap";
import IndivVideo from "./IndivVideo";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";

export default function SpotlightVideoSection(props) {
  return (
    <div className="spotlight_video_wrapper">
      <Row>
        <Col md={{ span: 6 }}>
          {props.title && <SectionTitle title={props.title} />}
          {props.subtitle && (
            <SectionSubtitle>{props.subtitle}</SectionSubtitle>
          )}
        </Col>
      </Row>
      <Row style={{ paddingBottom: "2vh" }}>
        <Col md={{ span: 12 }}>
          <IndivVideo src={props.src} />
        </Col>
      </Row>
      <Row>{props.children}</Row>
    </div>
  );
}
