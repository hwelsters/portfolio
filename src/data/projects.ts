export const projects: Array<ProjectInterface> = [
  {
    name: "axolotl",
    description: "Python programming tutorial website that's currently a WIP",
    githubURL: "https://github.com/hwelsters/axolotl",
    skills: "PYTHON, REACT.JS, NODE.JS, EXPRESS.JS"
  },
  {
    name: "whine",
    description: "Minimalistic social media website with AFINN sentiment analysis",
    githubURL: "https://github.com/hwelsters/whine",
    externalURL: "https://whining.herokuapp.com/",
    skills: "MONGODB, EXPRESS.JS, REACT.JS, NODE.JS"
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
