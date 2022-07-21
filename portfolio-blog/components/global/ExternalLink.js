import globalStyles from "../../settings/global-styles";

export default function ExternalLink(props) {
  return (
    <a href={props.href} target="_blank" className="external-link">
      {props.children}
    </a>
  );
}
