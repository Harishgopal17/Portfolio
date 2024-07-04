import madrasfoodadvisor from "../assets/images/madrasfoodadvisor.png";
import breaktheroutine from "../assets/images/breaktheroutine.png";
import taskburst from "../assets/images/taskburst.png";
import harishLogo from "../assets/icons/harishLogo.png";
import resumefile from "../assets/resume/Harish_Resume.pdf";
import harishPhoto from "../assets/images/Photo_WhiteBG.png";

export const logo = {
  imgURL: harishLogo,
  title: "harishLogo",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#Projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const resume = {
  fileURL: resumefile,
  title: "Resume",
};

export const projects = [
  {
    imgURL: madrasfoodadvisor,
    name: "Madras Food Advisor",
    description:
      "Madras Food Advisor is a passion project dedicated to celebrating the rich culinary heritage of Chennai. The project aims to connect food enthusiasts with the vibrant flavors and hidden gems of South Indian cuisine. From traditional recipes to modern dining experiences.",
    projectURL: "https://madrasfoodadvisor.netlify.app",
    githubURL: "https://github.com/Harishgopal17/Madras-food-advisor",
    tools: ["Html", "CSS", "Java Script"],
  },
  {
    imgURL: breaktheroutine,
    name: "Break the Routine",
    description:
      "Developed and implemented a dynamic system for suggesting random activities to get relief from the routine work. We sift through the random data to find activities that give you a new experience. Curated a diverse array of activities spanning physical fitness, cultural immersion, skill development, relaxation techniques, and random foods, ensuring a comprehensive and engaging experience.",
    projectURL: "https://breaktheroutine.netlify.app/",
    githubURL: "https://github.com/Harishgopal17/break_the_routine",
    tools: ["Html", "CSS", "Java Script", "Web API", "Fetch API"],
  },
  {
    imgURL: taskburst,
    name: "Task Burst",
    description:
      "A simple and efficient to-do list app to help you manage daily tasks. Tasks are stored in the browser's local storage, ensuring data persistence even after refreshing or closing the browser.",
    projectURL: "https://taskburst.netlify.app/",
    githubURL: "https://github.com/Harishgopal17/TaskBurst",
    tools: ["React", "Tailwind CSS"],
  },
];

export const photo = {
  imgURl: harishPhoto,
  title: "Photo of Harish",
};
