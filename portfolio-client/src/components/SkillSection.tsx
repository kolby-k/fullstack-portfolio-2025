import { FaHtml5, FaNodeJs, FaAppStoreIos } from "react-icons/fa";

function SkillSection() {
  return (
    <div className="flex h-80 w-[94%] mx-auto justify-evenly my-10">
      <div className="flex flex-1 justify-between flex-col p-4 border-r-1 mr-2 border-neutral-800">
        <span className="flex justify-evenly items-center">
          <p className="text-3xl text-center"> Frontend Development</p>
          <FaHtml5 size={42} />
        </span>
        <p>I create modern front ends. I also often use React.</p>
        <ul className="flex flex-col">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      </div>
      <div className="flex flex-1 justify-between flex-col p-4 border-r-1 mr-2 border-neutral-800">
        <span className="flex justify-evenly items-center">
          <p className="text-3xl text-center"> Backend Development</p>
          <FaNodeJs size={42} />
        </span>
        <p>
          I create efficient and secure backends. I use Node.js and express.js
          for api's. I often use PostgreSql for database.
        </p>
        <ul className="flex flex-col">
          <li>Node.JS</li>
          <li>SQL</li>
          <li>Python</li>
        </ul>
      </div>

      <div className="flex flex-1 justify-between flex-col p-4 ">
        <span className="flex justify-evenly items-center">
          <p className="text-3xl text-center"> iOS App Development</p>
          <FaAppStoreIos size={42} />
        </span>
        <p>
          I create user friendly mobile apps for iOS. I mainly use Expo for
          development and have some experience with Swift.
        </p>
        <ul className="flex flex-col">
          <li>React Native</li>
          <li>Expo</li>
          <li>Swift</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillSection;
