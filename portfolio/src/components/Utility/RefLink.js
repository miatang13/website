import Link45Deg from "../svgs/Link45Deg";

export default function RefLink(props) {
  return (
    <a href={props.href}>
      <Link45Deg /> {props.text}
    </a>
  );
}
