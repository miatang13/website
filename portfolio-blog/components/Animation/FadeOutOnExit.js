// animation
import { motion } from "framer-motion";
import { framer_transition } from "../../animations/const";

export default function FadeOutOnExit(props) {
  return (
    <motion.div exit={{ opacity: 0 }} transition={framer_transition}>
      {props.children}
    </motion.div>
  );
}
