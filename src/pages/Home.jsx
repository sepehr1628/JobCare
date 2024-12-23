import { useQuery } from "@tanstack/react-query";
import CVSection from "@/components/pages/Home/CVSection";
import FindSection from "@/components/pages/Home/FindSection";
import HighestFreelancerSection from "@/components/pages/Home/HighestFreelancerSection";
import JobCategories from "@/components/pages/Home/JobCategories";
import MarketplaceSection from "@/components/pages/Home/MarketplaceSection";
import ReportBarSection from "@/components/pages/Home/ReportBarSection";
import TrendingserviceSection from "@/components/pages/Home/TrendingserviceSection";
import { getFreelancers } from "../services/apiFreelancers";
import { useScrollTop } from "@/services/useScrollTop";

function calculateAverageRate(rateArray) {
  if (!rateArray || rateArray.length === 0) {
    return 0;
  }
  const sum = rateArray.reduce((acc, rate) => acc + rate, 0);
  return sum / rateArray.length;
}

function Home() {
  const { data, error } = useQuery({
    queryKey: ["freelancers"],
    queryFn: getFreelancers,
  });

  useScrollTop();

  const freelancersWithAverageRate = data?.map((freelancer) => ({
    ...freelancer,
    averageRate: calculateAverageRate(freelancer.rate),
  }));

  const sortedFreelancers = freelancersWithAverageRate?.sort(
    (a, b) => b.averageRate - a.averageRate
  );

  const topFourFreelancers = sortedFreelancers?.slice(0, 4);

  return (
    <>
      <FindSection />
      <CVSection />
      <JobCategories />
      <ReportBarSection />
      <TrendingserviceSection />
      <MarketplaceSection />
      <HighestFreelancerSection freelancers={topFourFreelancers} />
    </>
  );
}

export default Home;
