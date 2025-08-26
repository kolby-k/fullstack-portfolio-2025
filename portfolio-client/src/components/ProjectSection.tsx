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
    tagList: ["OpenAI API", "Rate Limiting", "Express API"],
    projectUrl: "https://summarizer-io.netlify.app/",
  },
  {
    title: "Developer Toolkit",
    description:
      "A client-side web application that provides developers with a variety of common tools to aid in fullstack development.",
    imageSrc: DevToolKitProjectBannerImage,
    appRedirectUrl: "/dev-toolkit-app",
    tagList: ["DOM APIs", "Algorithms", "TypeScript"],
    projectUrl: "https://developer-toolkit.netlify.app/",
  },
  {
    title: "What The Temp",
    description:
      "A client-side weather app that provides real-time local forecasts with a clean, user-friendly interface.",
    imageSrc: WeatherProjectBannerImage,
    appRedirectUrl: "/what-the-temp-app",
    tagList: ["Responsive UI", "REST API", "Caching"],
    projectUrl: "https://what-the-temp.netlify.app/",
  },
];

function ProjectSection() {
  return (
    <div className="flex flex-col justify-between items-center mt-8">
      <div className="flex flex-wrap justify-evenly items-center md:gap-12 relative">
        <span className="self-start max-w-[500px] md:pt-10">
          <h2 className="font-semibold text-5xl text-(--text-primary) text-center my-2">
            More Projects
          </h2>
          <p className="text-lg text-(--text-secondary) text-left pl-2">
            Explore my additional work — from simple single-page web apps to
            more complex, scalable full-stack solutions.
          </p>
          <hr className="animated-divider mt-10 hidden md:flex" />
        </span>
        <img
          src={Kolby3DImage}
          className="rotate-y-180 w-52 md:w-72 md:relative md:top-0 md:right-0"
        />
      </div>

      <div className="flex flex-1 flex-wrap justify-evenly items-start p-4 md:mt-8 gap-10 relative">
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
