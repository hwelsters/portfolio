import { useState } from "react";

import styles from "./Contacts.module.css";

import Block from "layouts/Block/Block";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import pageURLs from "data/pageURLs";

export default function Contacts() {
  const [copied, setCopied] = useState<Boolean>(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("noel.ngu.jacob@gmail.com")
    setCopied(true);
  }

  return (
    <Block>
      <span className="title">Contact me</span>
      <span className="description">
        I would love to further discuss my experiences with you
      </span>
      <span className={styles.foot}>
        <span onClick={()=>copyEmail()}><EmailIcon className={styles.icon}/></span>
        <a href={pageURLs.linkedInURL}><LinkedInIcon className={styles.icon} /></a>
        <a href={pageURLs.githubURL}><GitHubIcon className={styles.icon} /></a>
      </span>
      {copied && <span className={`description ${styles.copiedEmail}`}>📋 Copied to clipboard</span>}
    </Block>
  );
}
