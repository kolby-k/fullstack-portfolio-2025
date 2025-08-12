import CustomTag from "./CustomTag";

function ProjectCard() {
  return (
    <div className="w-100 h-50 border-1 border-red-200 cursor-pointer">
      <span className="flex flex-1 flex-col p-4">
        <h3 className="font-medium text-xl">Project Title</h3>
        <p className="font-normal text-base w-5/6">
          Project description will go here okay this is where it will go.
        </p>
      </span>
      <span className="flex flex-wrap items-center justify-evenly m-4">
        <CustomTag />
        <CustomTag />
        <CustomTag />
      </span>
    </div>
  );
}

export default ProjectCard;
