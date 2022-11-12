import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import pageURLs from "data/pageURLs";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.root}>
      <HashLink smooth to="#top"  className={styles.section}>
        <img
          className={styles.logo}
          src="https://i.ibb.co/c3FPNch/header-image.png"
          alt=""
        />
        Noel
      </HashLink>
      <span className={styles.section}>
        <a href={pageURLs.linkedInURL}><LinkedIn className={styles.icon}/></a>
        <a href={pageURLs.githubURL}><GitHub className={styles.icon}/></a>
      </span>
    </div>
  );
}
