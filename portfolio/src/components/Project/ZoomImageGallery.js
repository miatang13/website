import { Col, Row } from "react-bootstrap";
import ZoomablePicture from "../Utility/ZoomablePicture";
import ImageCaption from "./ImageCaption";

export default function ZoomImageGallery(props) {
  return (
    <div className="image_gallery_wrapper">
      <Row>
        {props.images.map((im, index) => (
          <Col md={props.md ? props.md : 12 / props.images.length} sm={12}>
            <ZoomablePicture src={im} width="100%" isGallery={true} />
          </Col>
        ))}
      </Row>
      {props.caption && <ImageCaption> {props.caption} </ImageCaption>}
    </div>
  );
}
