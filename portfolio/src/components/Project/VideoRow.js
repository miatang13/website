import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";
import TwoColumns from "../Layout/TwoColumns";
import IndivVideo from "./IndivVideo";

export default function VideoRow(props) {
  return (
    <TwoColumns>
      <LeftColumn>
        <IndivVideo src={props.src} caption={props.caption} width="100%" />
      </LeftColumn>

      <RightColumn>{props.children}</RightColumn>
    </TwoColumns>
  );
}
