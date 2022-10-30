import Block from "layouts/Block/Block";
import styles from "./Awards.module.css";

export default function Awards() {
  return (
    <Block >
      <span className="title">Awards</span>
      <span className="description">
        I've joined a few competitions and won 🏆 a few things
      </span>
      <span className={styles.award}>🥈 Hacklytics 2022, Best Use Of Google Cloud 2nd place, Top 6 Hacks</span>
      <span className={styles.award}>🥉 ASU Cloud Scholars Hackathon, 3rd place, Sparky Award</span>
    </Block>
  );
}
