import TiltOnIntersect from "../Animation/TiltOnIntersect";

export default function ProjectSection(props) {
  return (
    <TiltOnIntersect>
      <div className="project_section">
        <h1 className="section_title">{props.title}</h1>
        {props.children}
        {props.hasDivider && <hr></hr>}
      </div>
    </TiltOnIntersect>
  );
}
