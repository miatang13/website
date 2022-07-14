import { Image } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import ImageCaption from "./ImageCaption";

export default function ImageSection(props) {
  return (
    <TiltOnIntersect>
      <div className={props.isGallery ? "gallery_img" : "project_section"}>
        {props.title && <h2 className="section_title">{props.title}</h2>}
        <Image src={props.src} alt={props.alt} style={{ width: props.width }} />
        {props.caption && <ImageCaption> {props.caption} </ImageCaption>}
      </div>
    </TiltOnIntersect>
  );
}
