import TiltOnIntersect from "../Animation/TiltOnIntersect";
import SectionSubtitle from "./SectionSubtitle";

export default function ProjectSubsection(props) {
  return (
    <TiltOnIntersect>
      <div className="project_section">
        {props.subtitle && <SectionSubtitle>{props.subtitle}</SectionSubtitle>}
        {props.children}
        {props.hasDivider && <hr></hr>}
      </div>
    </TiltOnIntersect>
  );
}
