import "../../styles/project/callout.scss";

export default function Callout(props) {
  return <h2 className="callout_text">{props.children}</h2>;
}
