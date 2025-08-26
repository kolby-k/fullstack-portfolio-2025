import { useNavigate } from "react-router";
import CodeSnippet from "./CodeSnippet";
import CustomButton from "./CustomButton";

function HeroSection() {
  const nav = useNavigate();

  const handleContactRedirect = () => {
    return nav("/contact");
  };
  return (
    <div className="flex flex-col items-center justify-evenly lg:flex-row gap-x-8 px-5">
      <span className="flex flex-col justify-between gap-2 mb-8">
        <span className="flex flex-col flex-1 gap-2 md:text-center">
          <h1 className="main-text text-6xl">Fullstack Web Developer</h1>
          <p className="secondary-text text-xl">
            Turning ideas into reality — one line of code at a time.
          </p>
        </span>
        <span className="w-1/2 max-w-92 mb-2 mt-4 md:mt-8 mx-auto btn-glow rounded-sm">
          <CustomButton
            label="Get in touch"
            onClick={handleContactRedirect}
            size="medium"
          />
        </span>
      </span>
      <span className="flex">
        <CodeSnippet />
      </span>
    </div>
  );
}

export default HeroSection;
