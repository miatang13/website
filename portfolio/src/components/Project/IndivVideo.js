import ImageCaption from "./ImageCaption";

export default function IndivVideo(props) {
  return (
    <div>
      <video
        width={props.width ? props.width : "100%"}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={props.src} type="video/mp4" />
      </video>
      {props.caption && <ImageCaption> {props.caption} </ImageCaption>}
    </div>
  );
}
