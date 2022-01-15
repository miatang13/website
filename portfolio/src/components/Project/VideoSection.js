import TiltOnIntersect from "../Animation/TiltOnIntersect";
import ImageCaption from "./ImageCaption";
import IndivVideo from "./IndivVideo";

export default function VideoSection(props) {
  return (
    <TiltOnIntersect>
      <div>
        {props.title && <h2 className="section_title">{props.title}</h2>}
        <IndivVideo src={props.src} width={props.width} />
        {props.caption && <ImageCaption> {props.caption} </ImageCaption>}
      </div>
    </TiltOnIntersect>
  );
}
