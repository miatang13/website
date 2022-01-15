import "../../styles/project/introTitle.scss";
// import SlantAppearText from "../Animation/SlantAppearText";

export default function IntroTitle(props) {
  return (
    <div className="project_section">
      <h1 className="project_title"> {props.title}</h1>
      <h4 className="project_subtitle">{props.subtitle} </h4>
    </div>
  );
}
