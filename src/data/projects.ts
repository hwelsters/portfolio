export const projects: Array<ProjectInterface> = [
  {
    name: "whine",
    githubURL: "",
    externalURL: "https://whining.herokuapp.com/",
    skills: "MONGODB, EXPRESS.JS, REACT.JS, NODE.JS"
  },
  {
    name: "edamame",
    githubURL: "https://github.com/hwelsters/edamame",
    externalURL: "https://hwelsters.itch.io/edamame",
    skills: "UNITY, C#, ASEPRITE"
  },
];

export type ProjectInterface = {
  name: string;
  githubURL?: string;
  externalURL?: string;
  skills?: string
};

export default projects;
