import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";
import TwoColumns from "../Layout/TwoColumns";
import IndivImage from "./IndivImage";

export default function ImageRow(props) {
  return (
    <TwoColumns>
      <LeftColumn>
        <IndivImage src={props.src} caption={props.caption} width="100%" />
      </LeftColumn>

      <RightColumn> {props.children}</RightColumn>
    </TwoColumns>
  );
}
