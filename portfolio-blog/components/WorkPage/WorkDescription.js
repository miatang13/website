import { motion } from "framer-motion";
import { fast_transition } from "../../animations/const";

export default function WorkDescription(props) {
  return (
    <motion.div transition={fast_transition}>
      <div className="thumbnail_description">
        <div>
          <h2 className="thumbnail_title">{props.title}</h2>
        </div>
        <div>
          <h4 className="thumbnail_subtitle">{props.subtitle}</h4>
        </div>
      </div>
    </motion.div>
  );
}
