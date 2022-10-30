import pageURLs from "data/pageURLs";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <HashLink smooth to="#top" className={styles.root}>
      <img
        className={styles.logo}
        src="https://i.ibb.co/c3FPNch/header-image.png"
        alt=""
      />
      Noel
    </HashLink>
  );
}
