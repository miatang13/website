import { Col, Row } from "react-bootstrap";
import ImageCaption from "./ImageCaption";
import VideoSection from "./VideoSection";

export default function VideoGallery(props) {
  return (
    <div className="video_gallery_wrapper">
      <Row>
        {props.videos.map((vid) => (
          <Col md={props.md ? props.md : 6}>
            <VideoSection
              src={vid}
              alt="Sorry something went wrong with the image"
              width="100%"
            />
          </Col>
        ))}
      </Row>
      {props.caption && <ImageCaption> {props.caption} </ImageCaption>}
    </div>
  );
}
