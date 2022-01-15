import { Col, Row } from "react-bootstrap";
import ImageCaption from "./ImageCaption";
import ImageSection from "./ImageSection";

export default function ImageGallery(props) {
  return (
    <div className="image_gallery_wrapper">
      <Row>
        {props.images.map((im, index) => (
          <Col md={props.md}>
            <ImageSection
              isGallery={true}
              src={im}
              alt="Sorry something went wrong with the image"
              style={{ width: 100, height: 100 }}
              width="100%"
            />
          </Col>
        ))}
      </Row>
      {props.caption && <ImageCaption> {props.caption} </ImageCaption>}
    </div>
  );
}
