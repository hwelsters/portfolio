import { HashLink } from "react-router-hash-link";

import { urls } from "data/urls";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.root}>
      {/* LEFT SECTION */}
      <div className={styles.section}>
        <img className={styles.image} src={urls.headerImageURL} alt={urls.altUrl} />
        <span className={styles.title}>Noel Ngu</span>
      </div>

      {/* RIGHT SECTION */}
      <div>
        {/* Hashlink to header */}
        <HashLink aria-label="📖 About" smooth to="#header" className={styles.list_items}>
          📖 About
        </HashLink>

        {/* Hashlink to projects section */}
        <HashLink smooth to="#projects" className={styles.list_items}>
          🛠️ Projects
        </HashLink>

        {/* Hashlink to contact info */}
        <HashLink smooth to="#contactInfo" className={styles.list_items}>
          💬 Contact
        </HashLink>
      </div>
    </div>
  );
}
