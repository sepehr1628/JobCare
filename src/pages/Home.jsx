import CVSection from "../ui/CVSection";
import FindSection from "../ui/FindSection";
import JobCategories from "../ui/JobCategories";
import ReportBarSection from "../ui/ReportBarSection";

function Home() {
  return (
    <>
      <FindSection />
      <CVSection />
      <JobCategories />
      <ReportBarSection />
    </>
  );
}

export default Home;
