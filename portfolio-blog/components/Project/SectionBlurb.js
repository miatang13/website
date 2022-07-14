export default function SectionBlurb(props) {
  return (
    <p className={"section_blurb" + (props.fullWidth ? "_full" : "_narrow")}>
      {props.children}
    </p>
  );
}
