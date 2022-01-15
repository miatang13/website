import { motion } from "framer-motion";
import { gallery_image_size } from "../../animations/const";

export default function IntroImg(props) {
  return (
    <div className="image-container">
      <motion.div
        className="thumbnail"
        initial={{
          width: gallery_image_size.width,
          height: gallery_image_size.height,
        }}
      >
        <div className="frame">
          <motion.img
            className="thumbnail_img"
            src={props.img_src}
            alt="Sorry something went wrong ;("
            initial={{ scale: 1 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
