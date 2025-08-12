import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <div className="flex flex-col flex-1 justify-between items-center p-4 min-h-[500px] border-1 border-neutral-800">
      <div className="w-full h-80 flex justify-evenly items-center">
        <h2 className="font-semibold text-5xl text-center">Recent Projects</h2>
        <img
          src="/src/assets/macbook-transparent.png"
          width={300}
          className="img-glow"
        />
      </div>
      <div className="flex flex-wrap flex-1 justify-evenly items-start m-4 gap-12">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectSection;
