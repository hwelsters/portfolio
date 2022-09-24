import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.root} id="header">
      <h2 className={styles.hand} data-aos="fade-right">👋</h2>
      <h3 data-aos="fade-left">Hi, I'm</h3>
      <h1 className={styles.name} data-aos="fade-right">Noel Ngu</h1>
      <h3 data-aos="fade-left">
        A computer science student at Arizona State University. I'm interested
        in full-stack development and game development and am always working on
        projects.
      </h3>
    </div>
  );
}
