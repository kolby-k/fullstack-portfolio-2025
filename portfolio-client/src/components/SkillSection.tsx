import { FaHtml5, FaNodeJs } from "react-icons/fa";
import CustomTag from "./CustomTag";

const skills = {
  frontend: {
    title: "Frontend Development",
    icon: FaHtml5,
    description:
      "I enjoy the process of turning ideas into real applications — shaping how an app should look, feel, and flow so users get the most out of it. My frontend work focuses on creating responsive, modern interfaces where design and usability go hand in hand with performance.",
    tags: ["UI/UX Design", "React & Expo", "Responsive UI", "Accessibility"],
  },
  backend: {
    title: "Backend Development",
    icon: FaNodeJs,
    description:
      "What excites me about backend work is problem-solving: taking a simple idea for an API and evolving it into a system that solves real problems at scale. I enjoy designing backends that are secure, efficient, and able to grow alongside the product.",
    tags: ["REST APIs", "Auth & Security", "Server-Side Logic", "PostgreSQL"],
  },
};

function SkillSection() {
  return (
    <div className="flex flex-col md:flex-row flex-1 mx-auto justify-evenly mt-4 md:mt-10 relative">
      {Object.values(skills).map(
        ({ title, icon: Icon, description, tags }, idx) => (
          <>
            <div key={title} className="flex flex-1 flex-col p-4 gap-y-2 ">
              <span className="grid grid-cols-4">
                <p className="text-3xl px-4 text-left text-(--text-primary) col-span-3">
                  {title}
                </p>
                <Icon size={42} className="p-2" />
              </span>
              <p className="px-4 mx-auto text-lg text-(--text-secondary) flex-1">
                {description}
              </p>
              <ul className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-4 mt-4">
                {tags.map((tag) => (
                  <li key={tag} className="min-w-32 mx-auto">
                    <CustomTag label={tag} />
                  </li>
                ))}
              </ul>
            </div>
            {/* Add divider between sections (only between frontend and backend) */}
            {idx === 0 && (
              <div className="h-1 w-1/2 md:h-[200px] md:w-[0.5px] mx-auto my-4 p-[0.5px] bg-(--input-border) rounded-full"></div>
            )}
          </>
        )
      )}
    </div>
  );
}

export default SkillSection;
