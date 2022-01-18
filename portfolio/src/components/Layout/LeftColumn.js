import { Col } from "react-bootstrap";

export default function LeftColumn(props) {
  return (
    <Col md={6} sm={12}>
      {props.children}
    </Col>
  );
}
