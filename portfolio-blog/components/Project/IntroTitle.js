import styles from "../../styles/project/introTitle.module.scss";
import IntroCallout from "./IntroCallout";

export default function IntroTitle(props) {
  return (
    <div className={styles.project_subsection}>
      <h1 className={styles.project_title}> {props.title}</h1>
      {props.callout && <IntroCallout>{props.callout}</IntroCallout>}
    </div>
  );
}
