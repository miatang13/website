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
      <Container id="work_wrapper">
        <WorkIntro />
        <div id="work_gallery">
          <div id="css3d" ref={props.cssContainerRef}></div>
          <Row>
            {projects.map((p, index) => (
              <Col md={md} className="gallery_project_wrapper" key={p.name}>
                <Link to={p.page_name}>
                  <Thumbnail
                    ref={props.thumbnailRefs.current[index]}
                    path={p.path}
                  />
                  <WorkDescription
                    title={p.landing.title}
                    subtitle={p.landing.subtitle}
                    page_name={p.page_name}
                    index={index}
                    ref={props.descriptionRefs.current[index]}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </FadeInOut>
  );
}
