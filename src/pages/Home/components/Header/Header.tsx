import Block from "layouts/Block/Block";
import styles from "./Header.module.css";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <Block className={styles.root}>
      <span className={styles.intro} id="header">HI THERE👋, I’M</span>
      <span className={`${styles.name} wavy gradient`}>Noel Ngu</span>
      <span className={styles.description}>
        {" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("A COMPUTER SCIENCE STUDENT")
              .pauseFor(1000)
              .deleteAll()
              .start()
              .typeString("AN ASPIRING SOFTWARE ENGINEER")
              .pauseFor(1000)
              .deleteAll()
              .start()
              .typeString("A GAME DEVELOPER")
              .pauseFor(1000)
              .deleteAll()
              .start()
              .typeString("A WEBSITE DEVELOPER")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
          options={{ loop: true }}
        />
      </span>
      <span className={styles.intro_description}>
        A curious software developer interested in full-stack, infrastructure,
        ML and game development.
      </span>
    </Block>
  );
}
