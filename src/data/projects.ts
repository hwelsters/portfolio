export const projects: Array<ProjectInterface> = [
  {
    name: "snakecode",
    description: "The coolest Python programming tutorial website in the world.",
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
    description: "Logic-gate sokoban game.",
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
