import { projects } from "../constants/index";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <>
      <div id="Projects" className="flex my-5 lg:py-4 scroll-mt-[100px]">
        <h2 className="text-green text-2xl font-medium">Projects</h2>
      </div>
      <div className="flex justify-center gap-12 flex-col flex-wrap lg:flex-row">
        <ProjectCard projects={projects} />
      </div>
    </>
  );
}
