import { Col } from "react-bootstrap";

export default function LeftColumn(props) {
  return (
    <Col className="align-vertical-container" md={6} sm={12}>
      <div className={props.vAlign ? "align-vertical" : ""}>
        {props.children}
      </div>
    </Col>
  );
}
