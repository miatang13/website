import Hashtag from "../svgs/Hashtag";

export default function SectionSubtitle(props) {
  return (
    <h2 className="section_subtitle">
      <Hashtag /> {props.children}
    </h2>
  );
}
