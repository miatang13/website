import { motion } from "framer-motion";
import { gallery_image_size } from "../../animations/const";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import IntroHeader from "./IntroHeader";
import IntroTitle from "./IntroTitle";
import "../../styles/gallery/thumbnail.scss";
import { Container, Row } from "react-bootstrap";
import IntroImg from "./IntroImage";

export default function ProjectHeader(props) {
  return (
    //
    <Container className="project_section">
      <div className="project_header_wrapper">
        <IntroTitle title={props.title} subtitle={props.subtitle} />

        <IntroHeader
          team={props.team}
          role={props.role}
          timeline={props.timeline}
          skills={props.skills}
          client={props.client}
        />
        <IntroImg img_src={props.img_src} />
      </div>
    </Container>

    // </TiltOnIntersect>
  );
}
