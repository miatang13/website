import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { gallery_image_size } from "../../animations/const";
import TiltOnIntersect from "../Animation/TiltOnIntersect";

export default function IntroImg(props) {
  return (
    <Container>
      {/*className="project_section"*/}
      <TiltOnIntersect>
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
                initial={{ scale: 1.1 }}
              />
            </div>
          </motion.div>
        </div>
      </TiltOnIntersect>
    </Container>
  );
}
