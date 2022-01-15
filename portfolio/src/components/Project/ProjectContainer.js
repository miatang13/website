import "../../styles/project/project.scss";
import ProjectFooter from "./Footer";
import { motion } from "framer-motion";
import FadeInOut from "../Animation/FadeInOut";

export default function Project(props) {
  return (
    // <SmoothScroll>
    <FadeInOut>
      <motion.div initial="initial" animate="animate" exit="exit">
        <div className="project_wrapper">{props.children}</div>
      </motion.div>
      <ProjectFooter currentIndex={props.index} />
    </FadeInOut>
    // </SmoothScroll>
  );
}
