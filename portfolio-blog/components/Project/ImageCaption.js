import ArrowUp from "../svgs/ArrowUp";

export default function ImageCaption(props) {
  return (
    <p className="img_caption">
      <ArrowUp size={"16px"} /> {props.children}
    </p>
  );
}
