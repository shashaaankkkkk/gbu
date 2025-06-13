



import AboutDepartment from "../components/cse/AboutDepartment";





import Research from "../components/Research";
import HeroSection from "../components/cse/Hero";
import HodMessage from "../components/cse/Hod";
import Programs from "../components/cse/Program";
import Faculty from "../components/cse/Faculty";

const Cse = () => {
  return (
    <div className="min-h-screen bg-background">

      <HeroSection />
      <HodMessage />
      <AboutDepartment />
      <Programs />
      <Faculty />
      <Research />

    </div>
  );
};

export default Cse;
