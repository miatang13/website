import { Row } from "react-bootstrap";
import "../../styles/project/column.scss";

export default function TwoColumns(props) {
  return <Row className="columns_wrapper"> {props.children} </Row>;
}
