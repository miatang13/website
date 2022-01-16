import TiltOnIntersect from "../Animation/TiltOnIntersect";
import ImageCaption from "./ImageCaption";
import IndivVideo from "./IndivVideo";
import SectionTitle from "./SectionTitle";

export default function VideoSection(props) {
  return (
    <TiltOnIntersect>
      <div>
        {props.title && <SectionTitle title={props.title} />}
        <IndivVideo src={props.src} width={props.width} />
        {props.caption && <ImageCaption> {props.caption} </ImageCaption>}
      </div>
    </TiltOnIntersect>
  );
}
