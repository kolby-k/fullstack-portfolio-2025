import { useNavigate } from "react-router";
import CodeSnippet from "./CodeSnippet";
import CustomButton from "./CustomButton";

function HeroSection() {
  const nav = useNavigate();

  const handleContactRedirect = () => {
    return nav("/contact");
  };
  return (
    <>
      <div className="flex px-10 gap-8 flex-col items-center md:flex-row">
        <span className="flex flex-col flex-1 items-center">
          <span className="flex flex-col max-w-[300px] gap-2">
            <h1 className="main-text text-6xl ">Fullstack Web Developer</h1>
            <p className="secondary-text text-xl">
              I build responsive web apps
            </p>
          </span>
          <span className="w-92 mb-2 mt-4 md:mt-8 mx-auto nav-glow rounded-sm">
            <CustomButton
              label="Get in touch"
              onClick={handleContactRedirect}
            />
          </span>
        </span>
        <span className="flex flex-col flex-1 gap-2">
          <CodeSnippet />
        </span>
      </div>
    </>
  );
}

export default HeroSection;
