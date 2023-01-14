type ExperienceParams = { id: string; title: string; image: string; description: string; date: string };

const experience: Array<ExperienceParams> = [
  {
    id: "lab_v2",
    title: "Undergraduate Researcher @ Lab V2",
    image: "",
    description: "• Assisted Professor Shakarian in analyzing ChatGPT’s success rate in answering algebraic problems with Pandas and Python.",
    date: "12/2022 - Present",
  },
  {
    id: "digital_hub",
    title: "Software Engineer Intern @ Digital Hub",
    image: "",
    description: `• Collaborated with a team of 11 members that leverages IoT technology and optical character recognition to increase car parking speed by 20% in Sarawak’s major shopping malls
    • Developed a RESTful API to store car plate images and metadata with various AWS Services (EC2, S3, and RDS) and technologies (MySQL, Node.JS, and Express.JS) which processed 100+ cars per day in each shopping mall.
    • Abided by Test-Driven Development principles and led daily scrums with PMs, designers, and senior/staff engineers to finalize product requirements.
    `,
    date: "05/2021 - 08/2021",
  },
];

export default experience;
