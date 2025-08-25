import { FaHtml5, FaNodeJs } from "react-icons/fa";
import CustomTag from "./CustomTag";

function SkillSection() {
  return (
    <div className="flex flex-col md:flex-row flex-1 mx-auto justify-evenly mt-4 md:mt-10 relative">
      <div className="flex flex-1 justify-between   flex-col p-4 gap-y-5">
        <span className="flex justify-evenly items-center -mb-2">
          <p className="text-3xl text-center text-(--text-primary)">
            Frontend Development
          </p>
          <FaHtml5 size={42} />
        </span>
        <p className="px-4 mx-auto text-lg text-(--text-secondary)">
          I build modern, responsive interfaces for both web and iOS apps using
          React and Expo (React Native), with a focus on design, accessibility,
          and performance.
        </p>
        <ul className="flex flex-1 justify-evenly m-2">
          <li>
            <CustomTag label="React" />
          </li>
          <li>
            <CustomTag label="React Native/Expo" />
          </li>
          <li>
            <CustomTag label="TypeScript" />
          </li>
        </ul>
      </div>
      <div className="flex h-[100] w-1/2 mx-auto my-2 md:w-[0.5px] p-[0.5px] md:my-0 bg-(--input-border) rounded-full"></div>
      <div className="flex flex-1 justify-between flex-col p-4 gap-y-5">
        <span className="flex justify-evenly items-center -mb-2">
          <p className="text-3xl text-center text-(--text-primary)">
            Backend Development
          </p>
          <FaNodeJs size={42} />
        </span>
        <p className="px-4 mx-auto text-lg text-(--text-secondary)">
          I develop efficient, secure backend systems using Node.js and
          Express.js to power robust APIs, often paired with PostgreSQL for
          reliable, scalable data management.
        </p>
        <ul className="flex flex-1 justify-evenly m-2">
          <li>
            <CustomTag label="API Design" />
          </li>
          <li>
            <CustomTag label="SQL" />
          </li>
          <li>
            <CustomTag label="Node.js/Express" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillSection;
