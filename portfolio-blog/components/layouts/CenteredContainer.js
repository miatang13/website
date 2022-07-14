export default function CenteredContainer(props) {
  return (
    <div className="grid h-full grid-cols-2 pt-14 mx-auto">
      {props.children}{" "}
    </div>
  );
}
