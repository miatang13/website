import styles from "../../styles/project/callout.module.scss";

export default function IntroCallout(props) {
  return <h2 className={styles.intro_callout}>{props.children}</h2>;
}
