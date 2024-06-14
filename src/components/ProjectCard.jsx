import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
export default function ProjectCard({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full lg:w-[700px] xl:w-[500px] h-auto bg-[#111111] rounded-lg flex flex-col hover:scale-[0.95] transition-all duration-300 cursor-pointer"
        >
          <div className="w-full">
            <img
              src={project.imgURL}
              alt={project.name}
              className="rounded-t-lg "
            />
          </div>
          <div className="px-5 py-5">
            <div className="w-full mb-4 pb-5 border-b border-slate-gray">
              <div
                id="heading-link"
                className="flex justify-between items-center mb-3"
              >
                <a
                  href={project.projectURL}
                  target="_blank"
                  className="flex items-center gap-1 text-lg font-bold"
                >
                  <span className="border-b border-transparent hover:border-white">
                    {project.name}
                  </span>
                  <AiOutlineLink size={22} />
                </a>
                <div>
                  <a href={project.githubURL} target="_blank">
                    <AiFillGithub size={30} />
                  </a>
                </div>
              </div>
              <div id="tools" className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <div
                    key={index}
                    className={`button-card text-green max-sm:text-sm md:text-lg lg:text-lg`}
                  >
                    <h6>{tool}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-base font-normal leading-7 text-slate-whitetext-base">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
