import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Section from "components/global/Section";

import { urls } from "data/urls";

import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <Section id="contactInfo">
      <h1>Get in touch</h1>
      <h3>I would be glad to further discuss my experiences with you</h3>

      <div>
        <a href={urls.githubUrl}>
          <GitHubIcon className={styles.icons} />
        </a>

        <a href={urls.linkedInUrl}>
          <LinkedInIcon className={styles.icons} />
        </a>
      </div>
    </Section>
  );
}
