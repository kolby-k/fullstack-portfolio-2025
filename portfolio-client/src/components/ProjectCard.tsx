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
    <div className="h-120 w-120 overflow-clip card  project-glow">
      <a
        href={project.projectUrl}
        className="flex flex-1 flex-col gap-4 min-h-full cursor-pointer"
        target="_blank"
      >
        <div className="flex justify-center items-center h-60">
          <img src={project.imageSrc} width={480} className="rounded-sm" />
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="font-semibold text-xl text-(--text-primary) p-2">
            {project.title}
          </h3>
          <p className="font-normal text-base w-5/6 text-(--text-secondary) p-2">
            {project.description}
          </p>

          <span className="flex items-center justify-evenly my-4">
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
