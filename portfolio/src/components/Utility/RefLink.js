export default function RefLink(props) {
  return (
    <a href={props.href} style={{ textDecoration: "underline" }}>
      {props.text}
    </a>
  );
}
