import Project from "components/global/Project";
import Section from "components/global/Section";
import { projects, ProjectInterface } from "data/projects";

import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  return (
    <Section>
      <h1 className={styles.title} id="projects">
        Projects
      </h1>
      {/* Loop through all projects */}
      {projects?.map(
        (
          { img, title, text, githubUrl, externalUrl }: ProjectInterface,
          index
        ) => {
          return (
            <Project
              key={index}
              img={img}
              title={title}
              text={text}
              githubUrl={githubUrl}
              externalUrl={externalUrl}
            />
          );
        }
      )}
    </Section>
  );
}
