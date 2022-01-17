import { Col, Row } from "react-bootstrap";
import IndivImage from "./IndivImage";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";

export default function SpotlightImageSection(props) {
  const content_span = props.fullContent ? 12 : 6;
  const content_offset = props.fullContent ? 0 : 6;

  return (
    <div className="spotlight_video_wrapper">
      <Row style={{ paddingBottom: "2vh" }}>
        <Col md={{ span: 6 }}>
          {props.title && <SectionTitle title={props.title} />}
          {props.subtitle && (
            <SectionSubtitle>{props.subtitle}</SectionSubtitle>
          )}
        </Col>
        <Col md={{ span: 12 }}>
          <IndivImage src={props.src} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: content_span, offset: content_offset }}>
          {props.children}
        </Col>
      </Row>
    </div>
  );
}
