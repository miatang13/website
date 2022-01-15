import { Col } from "react-bootstrap";

export default function RightColumn(props) {
  return (
    <Col className="align-vertical-container" md={6}>
      <div className={props.vAlign ? "align-vertical" : ""}>
        {props.children}
      </div>
    </Col>
  );
}
