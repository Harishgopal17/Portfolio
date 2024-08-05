import Marquee from "react-fast-marquee";
import SkillCard from "../components/SkillCard";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaNode, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <>
      <div className="flex my-5 lg:py-4">
        <h2
          id="skills"
          className="text-green text-2xl font-medium scroll-mt-[100px]"
        >
          Skills
        </h2>
      </div>
      <div className="w-full">
        <Marquee pauseOnHover pauseOnClick>
          <SkillCard
            values={{
              icon: <AiFillHtml5 size={60} color="#e96228" />,
              name: "Html",
            }}
          />
          <SkillCard
            values={{
              icon: <IoLogoCss3 size={60} color="#2196f3" />,
              name: "CSS",
            }}
          />
          <SkillCard
            values={{
              icon: <IoLogoJavascript size={60} color="#efd81d" />,
              name: "Java Script",
            }}
          />
          <SkillCard
            values={{
              icon: <IoLogoReact size={60} color="#61dbfb" />,
              name: "React JS",
            }}
          />
          <SkillCard
            values={{
              icon: <FaNode size={60} color="#68a063" />,
              name: "Node JS",
            }}
          />
          <SkillCard
            values={{
              icon: <RiTailwindCssFill size={60} color="#38bdf8" />,
              name: "Tailwind CSS",
            }}
          />
          <SkillCard
            values={{
              icon: <FaBootstrap size={60} color="#7952b3" />,
              name: "Bootstrap",
            }}
          />
          <SkillCard
            values={{ icon: <AiFillGithub size={50} />, name: "Github" }}
          />
        </Marquee>
      </div>
    </>
  );
}
