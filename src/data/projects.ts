export const projects: Array<ProjectInterface> = [
  {
    name: "snakecode",
    description: "Python programming tutorial website that's currently a WIP",
    githubURL: "https://github.com/hwelsters/axolotl",
    externalURL: "http://www.snakecode.org/",
    skills: "PYTHON, REACT.JS, NODE.JS, EXPRESS.JS, AWS, CSS"
  },
  {
    name: "portfolio",
    description: "This website.",
    githubURL: "https://github.com/hwelsters/portfolio",
    externalURL: "https://www.hwelsters.com/",
    skills: "REACT.JS, AMPLIFY, CSS"
  },
  {
    name: "edamame",
    description: "Block pushing puzzle game with logic-gates",
    githubURL: "https://github.com/hwelsters/edamame",
    externalURL: "https://hwelsters.itch.io/edamame",
    skills: "UNITY, C#, ASEPRITE"
  },
  
];

export const graveyard: Array<ProjectInterface> = [
  {
    name: "mod",
    description: "Yoga tutorial website",
    githubURL: "https://github.com/hwelsters/mod",
    skills: "TENSORFLOW.JS, REACT.JS, NODE.JS, EXPRESS.JS"
  }
]

export type ProjectInterface = {
  name: string;
  githubURL?: string;
  externalURL?: string;
  skills?: string
  description?: string;
};

export default projects;
