import TiltOnIntersect from "../Animation/TiltOnIntersect";

export default function AboutSection(props) {
  return (
    <TiltOnIntersect>
      <div className="about_section_wrapper">{props.children} </div>{" "}
    </TiltOnIntersect>
  );
}
