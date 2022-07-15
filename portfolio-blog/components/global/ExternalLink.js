import globalStyles from "../../settings/global-styles.json";

export default function ExternalLink(props) {
  return (
    <a
      className={globalStyles.font_styles.link}
      href={props.href}
      target="_blank"
    >
      {props.children}
    </a>
  );
}
