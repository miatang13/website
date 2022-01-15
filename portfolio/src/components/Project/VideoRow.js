import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";
import TwoColumns from "../Layout/TwoColumns";
import IndivVideo from "./IndivVideo";

export default function VideoRow(props) {
  return (
    <TwoColumns>
      <LeftColumn>
        {props.left && (
          <IndivVideo src={props.src} caption={props.caption} width="100%" />
        )}
        {!props.left && props.children}
      </LeftColumn>

      <RightColumn>
        {props.right && (
          <IndivVideo src={props.src} caption={props.caption} width="100%" />
        )}

        {!props.right && props.children}
      </RightColumn>
    </TwoColumns>
  );
}
