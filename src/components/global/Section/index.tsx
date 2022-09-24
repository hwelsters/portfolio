import React from "react";

import styles from "./Section.module.css";

type Props = {
  children: React.ReactNode;
  id?: string;
};

export default function Section({ children, id }: Props) {
  return <div className={styles.root} id={id}>{children}</div>;
}
