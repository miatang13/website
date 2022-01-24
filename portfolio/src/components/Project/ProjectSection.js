import TiltOnIntersect from "../Animation/TiltOnIntersect";
import SectionSubtitle from "./SectionSubtitle";

export default function ProjectSection(props) {
  const title = props.title ? props.title.toLowerCase() : "";
  return (
    <TiltOnIntersect>
      <div className="project_section">
        {props.title && <h1 className="section_title">{title}</h1>}
        {props.subtitle && <SectionSubtitle>{props.subtitle}</SectionSubtitle>}
        {props.children}
        {props.hasDivider && <hr></hr>}
      </div>
    </TiltOnIntersect>
  );
}
