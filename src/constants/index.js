import tequiz from "./../assets/images/tequiz.png";
import ssk from "./../assets/images/ssk.png";
import madrasfoodadvisor from "./../assets/images/madrasfoodadvisor.png";
import breaktheroutine from "./../assets/images/breaktheroutine.png";
import taskburst from "./../assets/images/taskburst.png";
import harishLogo from "./../assets/icons/harishLogo.png";
import harishPhoto from "./../assets/images/Photo_WhiteBG.png";
import resumefile from "./../assets/resume/Harish_Resume.pdf";

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
    imgURL: tequiz,
    name: "Tequiz",
    description: `Developed Tequiz, an engaging quiz web application built using React.js for the frontend, Express.js for the backend, and MongoDB for the database. The application features user authentication, interactive quizzes, real-time score tracking, and a dedicated section with handpicked resources to help users learn and enhance their tech skills. If you don't want to create an account, use the following credentials to log in:\n User: guest@gmail.com\n Password: pass1234`,
    projectURL: "https://tequiz.netlify.app",
    githubURL: "https://github.com/Harishgopal17/Tequiz",
    tools: ["React.js", "Express", "Mongo DB"],
  },
  {
    imgURL: ssk,
    name: "Shri Senthil Kumaran Electricals",
    description:
      "Developed a user-friendly, responsive website for Shree Senthil Kumaran Electricals, an electrical and hardware shop based in Tamil Nadu. A tailored design with custom sections highlighting their product offerings, and customer testimonials. The site effectively showcases the brand’s commitment to quality and affordability. Targeted towards homeowners, contractors, and electricians.",
    projectURL: "https://ssk-demo.netlify.app",
    githubURL: "https://github.com/Harishgopal17/ssk",
    tools: ["React.js", "Tailwind CSS"],
  },
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
    tools: ["Html", "CSS", "Java Script"],
  },
  {
    imgURL: taskburst,
    name: "Task Burst",
    description:
      "A simple and efficient to-do list app to help you manage daily tasks. Tasks are stored in the browser's local storage, ensuring data persistence even after refreshing or closing the browser.",
    projectURL: "https://taskburst.netlify.app/",
    githubURL: "https://github.com/Harishgopal17/TaskBurst",
    tools: ["React.js", "Tailwind CSS"],
  },
];

export const photo = {
  imgURl: harishPhoto,
  title: "Photo of Harish",
};

// Developed a user-friendly, responsive website for Shree Senthil Kumaran Electricals, an electrical and hardware shop based in Tamil Nadu. The project involved creating a cohesive digital identity for the shop, including a tailored design with custom sections highlighting their product offerings, unique selling points, and customer testimonials. By focusing on clean layout, intuitive navigation, and effective content, the site effectively showcases the brand’s commitment to quality and affordability. Targeted towards homeowners, contractors, and electricians, the website is optimized for both user experience and SEO to increase local visibility.
