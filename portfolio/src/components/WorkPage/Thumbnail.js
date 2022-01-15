import { thumbnail_base_path, thumbnail_filename } from "../../settings/path";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import { motion } from "framer-motion";
import "../../styles/gallery/thumbnail.scss";
import { framer_transition, gallery_image_size } from "../../animations/const";

export default function Thumbnail(props) {
  return (
    <TiltOnIntersect>
      <div className="image-container">
        <div className="thumbnail" style={gallery_image_size}>
          <div className="frame">
            <motion.img
              className="thumbnail_img"
              src={thumbnail_base_path + props.path + thumbnail_filename}
              alt={props.name}
              whileHover={{
                scale: 1.1,
                skewX: "1deg",
                skewY: "-1deg",
              }}
              transition={framer_transition}
            />
          </div>
        </div>
      </div>
    </TiltOnIntersect>
  );
}

//https://github.com/wrongakram/framermotion-react-router/blob/master/src/pages/home.js
