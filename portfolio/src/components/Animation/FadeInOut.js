// animation
import { motion } from "framer-motion";
import { fadein_transition } from "../../animations/const";

export default function FadeInOut(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={fadein_transition}
    >
      {props.children}
    </motion.div>
  );
}
