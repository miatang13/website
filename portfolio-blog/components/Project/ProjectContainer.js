import "../../styles/project/project.module.scss";
import ProjectFooter from "./Footer";
import { motion } from "framer-motion";
import FadeInOut from "../Animation/FadeInOut";
import { Container } from "react-bootstrap";

export default function Project(props) {
  return (
    // <SmoothScroll>
    <FadeInOut>
      <Container>
        <motion.div initial="initial" animate="animate" exit="exit">
          <div className="project_wrapper">{props.children}</div>
        </motion.div>
        <ProjectFooter currentIndex={props.index} />
      </Container>
    </FadeInOut>
    // </SmoothScroll>
  );
}
