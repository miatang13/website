export default function SectionTitle(props) {
  const title = props.title ? props.title.toLowerCase() : "";
  return <h1 className="section_title">{title}</h1>;
}
