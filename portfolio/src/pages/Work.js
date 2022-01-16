import projects from "../settings/projects.json";
import Thumbnail from "../components/WorkPage/Thumbnail";
import WorkDescription from "../components/WorkPage/WorkDescription";
// css
import "../styles/webgl.scss";
import "../styles/gallery/work.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FadeInOut from "../components/Animation/FadeInOut";
import WorkIntro from "../components/WorkPage/WorkIntro";

export default function Work(props) {
  const numPerRow = 2;
  const md = 12 / numPerRow;

  return (
    <FadeInOut>
      <Container>
        <WorkIntro />
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
      </Container>
    </FadeInOut>
  );
}
