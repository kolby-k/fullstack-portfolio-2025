import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div className="flex flex-col justify-start gap-y-4">
      <HeroSection />
      <hr className="animated-divider mt-8" />
      <div className="h-[1000px] w-full"></div>
    </div>
  );
}

export default Home;
