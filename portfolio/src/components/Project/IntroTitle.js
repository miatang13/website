import "../../styles/project/introTitle.scss";
import IntroCallout from "./IntroCallout";

export default function IntroTitle(props) {
  return (
    <div className="project_subsection">
      <h1 className="project_title"> {props.title}</h1>
      {props.callout && <IntroCallout>{props.callout}</IntroCallout>}
    </div>
  );
}
