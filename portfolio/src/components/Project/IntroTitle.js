import { Container } from "react-bootstrap";
import "../../styles/project/introTitle.scss";
import SlantAppearText from "../Animation/SlantAppearText";

export default function IntroTitle(props) {
  return (
    <Container className="project_section">
      <div className="project_title">
        <SlantAppearText text={props.title} index={0} type="title" />
      </div>
      <h4 className="project_subtitle">{props.subtitle} </h4>
    </Container>
  );
}
