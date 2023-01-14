import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

import Block from "layouts/Block/Block";
import Project from "./components/Project/Project";

import styles from "./Projects.module.css";

import projects from "data/projects";

export default function Projects() {
  const divStyles = [
    styles.gradient_0,
    styles.gradient_1,
    styles.gradient_2,
    styles.gradient_3,
    styles.gradient_4,
  ];

  return (
    <Block className={styles.root} data-aos="slide-right">
      <span className="title">Projects</span>
      <span className="description">
        I love making cool stuff for people to enjoy. Click on some
        links or check out my Github repositories
      </span>
      <div className={styles.project_div}>
        {projects.map((e, index) => {
          return (
            <Project
              className={divStyles[index % divStyles.length]}
              githubURL={e.githubURL}
              externalURL={e.externalURL}
              name={e.name}
              description={e.description}
              skills={e.skills}
            />
          );
        })}
      </div>
    </Block>
  );
}
