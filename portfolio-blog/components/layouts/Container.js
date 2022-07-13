export default function Container(props) {
  return <div className="grid h-full grid-cols-2 pt-14">{props.children} </div>;
}
