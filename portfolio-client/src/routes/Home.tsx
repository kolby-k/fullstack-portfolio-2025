import FeaturedProject from "../components/FeaturedProject";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";

function Home() {
  return (
    <div className="flex flex-col justify-start gap-y-4 container">
      <HeroSection />
      <hr className="animated-divider mt-16 w-full mx-auto" />
      <SkillSection />
      <hr className="animated-divider mt-16 w-full mx-auto" />
      <FeaturedProject />
      <hr className="animated-divider mt-16 w-5/6 mx-auto" />
      <ProjectSection />
      <hr className="animated-divider mt-16 w-full mx-auto" />
    </div>
  );
}

export default Home;
