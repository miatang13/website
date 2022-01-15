import { Col, Row } from "react-bootstrap";
import ImageCaption from "./ImageCaption";
import ImageSection from "./ImageSection";
import IndivImage from "./IndivImage";

export default function ImageGallery(props) {
  return (
    <div className="image_gallery_wrapper">
      <Row>
        {props.images.map((im, index) => (
          <Col md={props.md ? props.md : 12 / props.images.length} sm={12}>
            <IndivImage src={im} width="100%" />
          </Col>
        ))}
      </Row>
      {props.caption && <ImageCaption> {props.caption} </ImageCaption>}
    </div>
  );
}
