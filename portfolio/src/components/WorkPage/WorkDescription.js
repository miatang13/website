import SlantAppearText from "../Animation/SlantAppearText";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import { motion } from "framer-motion";
import { framer_transition } from "../../animations/const";

export default function WorkDescription(props) {
  return (
    <TiltOnIntersect>
      <motion.div transition={framer_transition}>
        <div className="thumbnail_description">
          <div className="thumbnail_title">
            <SlantAppearText
              text={props.title}
              index={props.index}
              type="title"
            />
          </div>
          <div className="thumbnail_subtitle">
            <SlantAppearText
              text={props.subtitle}
              index={props.index}
              type="subtitle"
            />
          </div>
          {/* <div className="thumbnail_link">
          <Link to={props.page_name}>
            <SlantAppearText text="More" index={props.index} type="link" />
          </Link>
        </div> */}
        </div>
      </motion.div>
    </TiltOnIntersect>
  );
}
