export const projects: Array<ProjectInterface> = [
  {
    img: "https://img.itch.zone/aW1nLzc5MDQ1MjMucG5n/original/7Y4ZBE.png",
    title: "edamame",
    text: "Edamame is a logic-gate / block-pushing puzzle game made with Unity and C#",
    githubUrl: "https://github.com/hwelsters/edamame",
    externalUrl: "https://hwelsters.itch.io/edamame",
  },
  {
    img: "https://i.ibb.co/kD0XwJp/Sprite-0002.png",
    title: "whine",
    text: "Minimalistic social media website that uses AFINN sentiment analysis to classify posts",
    githubUrl: "",
    externalUrl: "https://whining.herokuapp.com/",
  },
];

export type ProjectInterface = {
  img: string;
  title: string;
  text: string;
  githubUrl: string;
  externalUrl?: string;
};