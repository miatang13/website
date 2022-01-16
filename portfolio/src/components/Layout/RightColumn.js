import { Col } from "react-bootstrap";

export default function RightColumn(props) {
  return (
    <Col md={6} sm={12}>
      <div>{props.children}</div>
    </Col>
  );
}
