export const projects: Array<ProjectInterface> = [
  {
    name: "edamame",
    githubURL: "https://github.com/hwelsters/edamame",
    externalURL: "https://hwelsters.itch.io/edamame",
    skills: ""
  },
  {
    name: "whine",
    githubURL: "",
    externalURL: "https://whining.herokuapp.com/",
    skills: "MongoDB, Express.js, React.js, Node.js"
  },
];

export type ProjectInterface = {
  name: string;
  githubURL?: string;
  externalURL?: string;
  skills?: string
};

export default projects;
