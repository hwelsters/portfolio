import styles from "./Project.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";

type ProjectParams = {
  className?: string;
  skills?: string;
  name?: string;
  externalURL?: string;
  githubURL?: string;
};
export default function Project({
  className,
  skills,
  name,
  externalURL,
  githubURL,
}: ProjectParams) {
  return (
    <a href={externalURL} data-aos="zoom-in">

      <div className={`${styles.root} ${className}`}>
        <span className={styles.links}>
          {githubURL && (
            <a href={githubURL}>
              <GitHubIcon className={styles.icon} />
            </a>
          )}
          {externalURL && (
            <a href={externalURL}>
              <OpenInNewIcon className={styles.icon} />
            </a>
          )}
        </span>
        <span className={styles.project_name}>{name}</span>
        <span className={styles.skills}>{skills}</span>
      </div>
    </a>
  );
}
