import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Evolve Workout Tracker",
    description:
      "A Mobile iOS Application to log, workout history, helping users gain insights into performance and improve results.",
    imageSrc: "/src/assets/evolve-ios-app.png",
    appRedirectUrl: "/evolve-workout-tracker-ios",
    tagList: ["Expo", "Node.js", "PostgreSQL"],
    projectUrl:
      "https://apps.apple.com/us/app/evolve-workout-tracker/id6738889804",
  },
  {
    title: "Summarizer",
    description:
      "A full-stack web application that generates real-time summaries of online articles using the OpenAI API.",
    imageSrc: "/src/assets/summarizer-app.png",
    appRedirectUrl: "/summarizer-app",
    tagList: ["React", "Node.js", "Express.js"],
    projectUrl: "https://summarizer-io.netlify.app/",
  },
  {
    title: "Developer Toolkit",
    description:
      "A client-side web application that provides developers with a variety of common tools to aid in fullstack development.",
    imageSrc: "/src/assets/dev-toolkit-app.png",
    appRedirectUrl: "/dev-toolkit-app",
    tagList: ["React", "CSS", "JavaScript"],
    projectUrl: "https://developer-toolkit.netlify.app/",
  },
  {
    title: "What The Temp",
    description:
      "A client-side weather app that provides real-time local forecasts with a clean, user-friendly interface.",
    imageSrc: "/src/assets/weather-app.png",
    appRedirectUrl: "/what-the-temp-app",
    tagList: ["React", "CSS", "API Integration"],
    projectUrl: "https://what-the-temp.netlify.app/",
  },
];

function ProjectSection() {
  return (
    <div className="flex flex-col flex-1 justify-between items-center p-4 min-h-[500px] mt-10">
      <div className="w-3/4 h-80 flex justify-evenly items-center">
        <span className="self-start max-w-1/2 pt-10">
          <h2 className="font-semibold text-5xl text-center my-2">
            Recent Projects
          </h2>
          <p>
            Explore my latest work, from dynamic single-page applications to
            full-stack solutions and mobile apps.{" "}
          </p>
          <hr className="animated-divider mt-10 w-1/2" />
        </span>
        <img
          src="/src/assets/kolby-3d.png"
          width={275}
          className="rotate-y-180"
        />
      </div>

      <div className="flex flex-wrap flex-1 justify-evenly items-start p-4 mt-8 gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={`project-${project.appRedirectUrl}`}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
