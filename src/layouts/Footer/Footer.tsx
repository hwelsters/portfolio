import Block from "layouts/Block/Block";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Block className={styles.root}>
      <span>Made with the power of love ❤️, sunshine ☀️ and friendship 💪</span>
      <span>by Noel</span>
    </Block>
  );
}
