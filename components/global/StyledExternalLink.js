import globalStyles from "../../settings/global-styles";

export default function StyledExternalLink(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      className={"external-link " + globalStyles.font_styles.link}
    >
      {props.children}
    </a>
  );
}