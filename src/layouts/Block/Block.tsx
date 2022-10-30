import React from "react";
import styles from "./Block.module.css";

type BlockParams = {
  children?: React.ReactNode;
  className?: string;
};
export default function Block({ children, className }: BlockParams) {
  return <div className={`${styles.root} ${className}`} data-aos="zoom-in">{children}</div>;
}
