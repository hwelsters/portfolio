import { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

import { ProjectInterface } from "data/projects";

import styles from "./Project.module.css";
import { urls } from "data/urls";

export default function Project({
  img,
  title,
  text,
  githubUrl,
  externalUrl,
}: ProjectInterface) {
  return (
    <div className={styles.root} data-aos="fade-left" >
      <img className={styles.image} src={img} alt={urls.altUrl}/>
      <div className={styles.textDiv}>
        <h3 className={styles.title}>{title}</h3>
        <p>{text}</p>

        {/* Icons */}
        <div>
          {githubUrl && (
            <a aria-label="Github" target="_blank" href={githubUrl}>
              <GitHubIcon className={styles.icon} />
            </a>
          )}

          {externalUrl && (
            <a aria-label="External" target="_blank" href={externalUrl}>
              <LinkIcon className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
