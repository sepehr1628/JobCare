<<<<<<< HEAD
=======
import { useLocation } from "react-router";
>>>>>>> origin/master
import CVSection from "../ui/sections/CVSection";
import FindSection from "../ui/sections/FindSection";
import HighestFreelancerSection from "../ui/sections/HighestFreelancerSection";
import JobCategories from "../ui/sections/JobCategories";
import MarketplaceSection from "../ui/sections/MarketplaceSection";
import ReportBarSection from "../ui/sections/ReportBarSection";
import TrendingserviceSection from "../ui/sections/TrendingserviceSection";

function Home() {
  return (
    <>
      <FindSection />
      <CVSection />
      <JobCategories />
      <ReportBarSection />
      <TrendingserviceSection />
      <MarketplaceSection />
      <HighestFreelancerSection />
    </>
  );
}

export default Home;
