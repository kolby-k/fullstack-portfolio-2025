import { FaHtml5, FaNodeJs, FaAppStoreIos } from "react-icons/fa";
import CustomTag from "./CustomTag";

function SkillSection() {
  return (
    <div className="flex w-[94%] mx-auto justify-evenly my-10">
      <div className="flex flex-1 justify-between flex-col p-4 border-r-1 mr-2 border-neutral-800">
        <span className="flex justify-evenly items-center">
          <p className="text-3xl text-center">Frontend Development</p>
          <FaHtml5 size={42} />
        </span>
        <p className="pt-4  w-4/5 h-28 mx-auto">
          I create responsive, user-focused front-end designs that blend
          performance, accessibility, and style—often with React.
        </p>
        <ul className="flex flex-1 justify-evenly p-4 mt-6">
          <li>
            <CustomTag label="HTML" />
          </li>
          <li>
            <CustomTag label="CSS" />
          </li>
          <li>
            <CustomTag label="JavaScript" />
          </li>
        </ul>
      </div>

      <div className="flex flex-1 justify-between flex-col p-4 border-r-1 mr-2 border-neutral-800">
        <span className="flex justify-evenly items-center">
          <p className="text-3xl text-center"> Backend Development</p>
          <FaNodeJs size={42} />
        </span>
        <p className="pt-4  w-4/5 h-28 mx-auto">
          I develop efficient, secure backend systems using Node.js and
          Express.js to power robust APIs, often paired with PostgreSQL for
          reliable, scalable data management.
        </p>
        <ul className="flex flex-1 justify-evenly p-4 mt-6">
          <li>
            <CustomTag label="Node.JS" />
          </li>
          <li>
            <CustomTag label="SQL" />
          </li>
          <li>
            <CustomTag label="Python" />
          </li>
        </ul>
      </div>

      <div className="flex flex-1 justify-between flex-col p-4 border-r-1 mr-2 border-neutral-800">
        <span className="flex justify-evenly items-center">
          <p className="text-3xl text-center"> iOS App Development</p>
          <FaAppStoreIos size={42} />
        </span>
        <p className="pt-4  w-4/5 h-28 mx-auto">
          I build user-friendly mobile applications for iOS, primarily using
          Expo for development, with additional experience in Swift for native
          functionality.
        </p>

        <ul className="flex flex-1 justify-evenly p-4 mt-6">
          <li>
            <CustomTag label="React Native" />
          </li>
          <li>
            <CustomTag label="Expo" />
          </li>
          <li>
            <CustomTag label="Swift" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillSection;
