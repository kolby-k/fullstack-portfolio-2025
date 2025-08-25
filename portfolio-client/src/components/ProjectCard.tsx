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
    <div className="flex flex-1 min-w-100 overflow-clip card project-glow">
      <a
        href={project.projectUrl}
        className="flex flex-1 flex-col min-h-full cursor-pointer"
        target="_blank"
      >
        <div className="flex justify-center items-center h-60 md:mb-4">
          <img src={project.imageSrc} className="rounded-sm w-120" />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <h3 className="font-semibold text-xl text-(--text-primary)">
            {project.title}
          </h3>
          <p className="font-normal text-base text-(--text-secondary)">
            {project.description}
          </p>

          <span className="flex flex-wrap justify-evenly mt-2 gap-3">
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
