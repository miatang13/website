import { Image } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import ImageCaption from "./ImageCaption";

export default function IndivImage(props) {
  return (
    <TiltOnIntersect>
      <div className="indiv_img_wrapper">
        <Image
          src={props.src}
          alt="Sorry, something went wrong with the image"
          style={{ width: props.width ? props.width : "100%" }}
        />
        {props.caption && <ImageCaption> {props.caption} </ImageCaption>}
      </div>
    </TiltOnIntersect>
  );
}
