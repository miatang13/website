import Link from "next/link";
import ExternalLink from "./ExternalLink";

export default function LinkWrapper(props) {
  return (
    <div className="link-wrapper">
      {props.external ? (
        <ExternalLink href={props.href}>
          <>{props.children}</>
        </ExternalLink>
      ) : (
        <Link href={props.href}>
          <a>{props.children}</a>
        </Link>
      )}
    </div>
  );
}
