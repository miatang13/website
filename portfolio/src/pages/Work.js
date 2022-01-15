import projects from "../settings/projects.json";
import Thumbnail from "../components/WorkPage/Thumbnail";
import WorkDescription from "../components/WorkPage/WorkDescription";
// css
import "../styles/webgl.scss";
import "../styles/gallery/work.scss";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { framer_transition } from "../animations/const";
import FadeInOut from "../components/Animation/FadeInOut";

export default function Work(props) {
  const numPerRow = 2;
  const md = 12 / numPerRow;

  return (
    // <FadeOutOnExit>
    // <SmoothScroll>
    <>
      <FadeInOut>
        <div id="work_gallery">
          <div id="css3d" ref={props.cssContainerRef}></div>
          <Row>
            {projects.map((p, index) => (
              <Col md={md}>
                <div className="gallery_project_wrapper">
                  <Link to={p.page_name}>
                    <Thumbnail
                      ref={props.thumbnailRefs.current[index]}
                      path={p.path}
                    />
                    <div key={p.name}>
                      <WorkDescription
                        title={p.landing.title}
                        subtitle={p.landing.subtitle}
                        page_name={p.page_name}
                        index={index}
                        ref={props.descriptionRefs.current[index]}
                      />
                    </div>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </FadeInOut>
    </>
    // </SmoothScroll>
    // </FadeOutOnExit>
  );
}
