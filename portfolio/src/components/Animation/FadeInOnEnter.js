// animation
import { motion } from "framer-motion";
import { fadein_transition } from "../../animations/const";

export default function FadeInOnEnter(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fadein_transition}
    >
      {props.children}
    </motion.div>
  );
}
