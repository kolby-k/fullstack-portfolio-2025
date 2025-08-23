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
    <div className="w-120 h-120 flex flex-col border-1 border-(--project-border) bg-(--project-bg) rounded-xl cursor-pointer p-4 project-glow hover:bg-(--btn-primary-hover-bg) hover:scale-102">
      <a href={project.projectUrl} target="_blank">
        <span className="flex flex-1 justify-evenly flex-col gap-2">
          <img src={project.imageSrc} height={100} className="flex" />
          <h3 className="font-medium text-xl text-(--text-primary)">
            {project.title}
          </h3>
          <p className="font-normal text-base w-5/6 text-(--text-secondary)">
            {project.description}
          </p>
        </span>
        <span className="flex flex-wrap items-center justify-evenly m-4">
          {project.tagList.map((tag, idx) => (
            <CustomTag key={`project-tag-${idx}`} label={tag} />
          ))}
        </span>
      </a>
    </div>
  );
}

export default ProjectCard;
