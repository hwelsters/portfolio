import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import styles from "./JobExperience.module.css";

export default function JobExperience({ title, description, gradient }: { title: string; description: string; gradient: string }) {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <span className={`${styles.accordion} ${gradient}`} tabIndex={0}>
        <span className={styles.top}>
          <span>{title}</span>
          <span className={styles.left}>
            <AddIcon />
          </span>
        </span>
        <span className={styles.panel}>{description}</span>
      </span>
    </>
  );
}
