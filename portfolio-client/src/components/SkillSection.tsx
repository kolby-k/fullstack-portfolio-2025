import { FaHtml5, FaNodeJs } from "react-icons/fa";
import CustomTag from "./CustomTag";

function SkillSection() {
  return (
    <div className="flex flex-col md:flex-row flex-1 mx-auto justify-evenly mt-4 md:mt-10 relative">
      <div className="flex flex-1 justify-between flex-col p-4 gap-y-5">
        <span className="flex justify-evenly items-center -mb-2">
          <p className="text-3xl text-center text-(--text-primary)">
            Frontend Development
          </p>
          <FaHtml5 size={42} className="p-2" />
        </span>
        <p className="px-4 mx-auto text-lg text-(--text-secondary)">
          I build modern, responsive interfaces for both web and iOS apps using
          React and Expo (React Native), with a focus on design, user
          experience, and performance.
        </p>
        <ul className="flex flex-1 flex-wrap justify-evenly gap-y-3 gap-x-2 md:mt-2">
          <li>
            <CustomTag label="Web & Mobile Design" />
          </li>
          <li>
            <CustomTag label="Responsive UI" />
          </li>
          <li>
            <CustomTag label="Single-Page Applications" />
          </li>
          <li>
            <CustomTag label="API Integration" />
          </li>
        </ul>
      </div>
      <div className="flex h-1 md:h-[300px] w-1/2 mx-auto my-4 md:w-[0.5px] p-[0.5px] bg-(--input-border) rounded-full"></div>
      <div className="flex flex-1 justify-between   flex-col p-4 gap-y-5">
        <span className="flex justify-evenly items-center -mb-2">
          <p className="text-3xl text-center text-(--text-primary)">
            Backend Development
          </p>

          <FaNodeJs size={42} className="p-2" />
        </span>
        <p className="px-4 mx-auto text-lg text-(--text-secondary)">
          I design efficient, secure backend systems using Node.js and
          Express.js, powering REST APIs backed by PostgreSQL for reliable,
          scalable data management.
        </p>
        <ul className="flex flex-1 flex-wrap justify-evenly gap-y-4 md:mt-2">
          <li>
            <CustomTag label="REST APIs" />
          </li>
          <li>
            <CustomTag label="Relational Databases" />
          </li>
          <li>
            <CustomTag label="SQL" />
          </li>
          <li>
            <CustomTag label="OAuth Integration" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillSection;
