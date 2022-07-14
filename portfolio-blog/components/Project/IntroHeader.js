import { Col, Row } from "react-bootstrap";
import styles from "../../styles/project/introHeader.module.scss";

export default function IntroHeader(props) {
  return (
    <div className={styles.project_subsection}>
      <Row>
        <Col className={styles.header_tile} md={4}>
          <h4 className={styles.header_title}>Client</h4>
          <span className={styles.header_content}> {props.client}</span>
        </Col>
        <Col className={styles.header_tile} md={4}>
          <h4 className={styles.header_title}> Role </h4>{" "}
          <span className={styles.header_content}> {props.role}</span>
        </Col>
        <Col className={styles.header_tile} md={4}>
          <h4 className={styles.header_title}> Skills </h4>
          <span className={styles.header_content}> {props.skills}</span>
        </Col>
      </Row>
      <Row>
        <Col className={styles.header_tile} md={4}>
          <h4 className={styles.header_title}>Timeline</h4>
          <span className={styles.header_content}> {props.timeline}</span>
        </Col>
        <Col className={styles.header_tile} md={4}>
          <h4 className={styles.header_title}> Team </h4>{" "}
          <span className={styles.header_content}> {props.team}</span>
        </Col>
      </Row>
    </div>
  );
}
