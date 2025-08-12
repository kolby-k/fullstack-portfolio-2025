import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";

function Home() {
  return (
    <div className="flex flex-col justify-start gap-y-4">
      <HeroSection />
      <hr className="animated-divider mt-16 w-5/6 mx-auto" />
      <SkillSection />
      <ProjectSection />
    </div>
  );
}

export default Home;
