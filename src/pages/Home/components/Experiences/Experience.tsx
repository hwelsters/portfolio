import Block from "layouts/Block/Block";

import experience from "data/experience";

import styles from "./Experience.module.css";
import JobExperience from "./components/JobExperience/JobExperience";

export default function Experience() {
  const divStyles = [
    styles.gradient_0,
    styles.gradient_1,
    styles.gradient_2,
    styles.gradient_3,
    styles.gradient_4,
  ];

  return (
    <Block>
      <span className="title">Professional Experience</span>
      <span className="description">I've gained work experience in various areas</span>
      <span></span>
      {experience.map((element, index) => {
        return <JobExperience title={element.title} description={element.description} date={element.date} gradient={""}/>;
      })}
    </Block>
  );
}
