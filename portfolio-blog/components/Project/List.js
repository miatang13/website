export default function List(props) {
  return (
    <ul className="blurb_list">
      {props.items.map((item) => (
        <li className={props.item_classname}> {item}</li>
      ))}{" "}
    </ul>
  );
}
