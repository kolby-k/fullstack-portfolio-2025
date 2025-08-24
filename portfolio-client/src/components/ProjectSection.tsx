import ProjectCard from "./ProjectCard";
import SummarizerProjectBannerImage from "../assets/summarizer-app.png";
import DevToolKitProjectBannerImage from "../assets/dev-toolkit-app.png";
import WeatherProjectBannerImage from "../assets/weather-app.png";
import Kolby3DImage from "../assets/kolby-3d.png";

const PROJECTS = [
  {
    title: "Summarizer",
    description:
      "A full-stack web application that generates real-time summaries of online articles using the OpenAI API.",
    imageSrc: SummarizerProjectBannerImage,
    appRedirectUrl: "/summarizer-app",
    tagList: ["OpenAI API", "Prompt Engineering", "Express API"],
    projectUrl: "https://summarizer-io.netlify.app/",
  },
  {
    title: "Developer Toolkit",
    description:
      "A client-side web application that provides developers with a variety of common tools to aid in fullstack development.",
    imageSrc: DevToolKitProjectBannerImage,
    appRedirectUrl: "/dev-toolkit-app",
    tagList: ["DOM APIs", "Algorithm Design", "TypeScript"],
    projectUrl: "https://developer-toolkit.netlify.app/",
  },
  {
    title: "What The Temp",
    description:
      "A client-side weather app that provides real-time local forecasts with a clean, user-friendly interface.",
    imageSrc: WeatherProjectBannerImage,
    appRedirectUrl: "/what-the-temp-app",
    tagList: ["Responseive UI", "REST API", "Caching"],
    projectUrl: "https://what-the-temp.netlify.app/",
  },
];

function ProjectSection() {
  return (
    <div className="flex flex-col justify-between items-center p-4 mt-8">
      <div className="w-3/4 flex justify-evenly items-center">
        <span className="self-start max-w-1/2 pt-10">
          <h2 className="font-semibold text-5xl text-(--text-primary) text-center my-2">
            More Recent Projects
          </h2>
          <p className="text-(--text-secondary)">
            Explore my latest work, from dynamic single-page applications to
            full-stack solutions and mobile apps.{" "}
          </p>
          <hr className="animated-divider mt-10 w-1/2" />
        </span>
        <img src={Kolby3DImage} width={275} className="rotate-y-180" />
      </div>

      <div className="flex flex-wrap justify-evenly items-start p-4 mt-8 gap-12">
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
