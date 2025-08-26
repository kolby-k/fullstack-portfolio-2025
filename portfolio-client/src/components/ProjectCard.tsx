import CustomTag from "./CustomTag";

export type Project = {
  title: string;
  description: string;
  imageSrc: string;
  appRedirectUrl: string;
  tagList: string[];
  projectUrl: string;
};

export type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-90 h-130 md:w-112 card project-glow">
      <a
        href={project.projectUrl}
        className="flex flex-1 flex-col min-h-full cursor-pointer "
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex justify-center items-center flex-2 mb-4">
          <img src={project.imageSrc} className="rounded-sm w-120" />
        </div>

        <div className="flex flex-2 flex-col">
          <h3 className="font-semibold text-xl text-(--text-primary)">
            {project.title}
          </h3>
          <p className="font-normal text-lg text-(--text-secondary) h-26 md:h-20">
            {project.description}
          </p>

          <span className="flex flex-1 flex-wrap justify-evenly items-center mt-4 gap-2 md:gap-3">
            {project.tagList.map((tag, idx) => (
              <CustomTag key={`project-tag-${idx}`} label={tag} />
            ))}
          </span>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
