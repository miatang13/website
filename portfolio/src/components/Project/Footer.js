import { Col, Container, Row } from "react-bootstrap";
import TiltOnIntersect from "../Animation/TiltOnIntersect";
import "../../styles/footer/project-footer.scss";
import projects from "../../settings/projects.json";
import { Link } from "react-router-dom";
import DoubleRight from "../svgs/DoubleRight";
import Star from "../svgs/Star";

export default function ProjectFooter(props) {
  // const prevIndex = props.currentIndex;
  const nextIndex = (props.currentIndex + 1) % projects.length;
  return (
    <TiltOnIntersect>
      <Container className="footer_wrapper">
        <Row>
          <Col md={6}>
            <h4 className="footer_greeting">
              <Star /> Thank you for reading.
            </h4>
          </Col>
          <Col style={{ textAlign: "right" }} md={6}>
            <Link
              to={projects[nextIndex].page_name}
              className="footer_next_item"
            >
              <h4 className="footer_next_text">
                {projects[nextIndex].landing.title} <DoubleRight />
              </h4>
            </Link>
          </Col>
        </Row>
      </Container>
    </TiltOnIntersect>
  );
}
