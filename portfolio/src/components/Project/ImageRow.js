import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";
import TwoColumns from "../Layout/TwoColumns";
import IndivImage from "./IndivImage";

export default function ImageRow(props) {
  return (
    <TwoColumns>
      <LeftColumn>
        {props.left && (
          <IndivImage src={props.src} caption={props.caption} width="100%" />
        )}
        {!props.left && props.children}
      </LeftColumn>

      <RightColumn>
        {props.right && (
          <IndivImage src={props.src} caption={props.caption} width="100%" />
        )}

        {!props.right && props.children}
      </RightColumn>
    </TwoColumns>
  );
}
