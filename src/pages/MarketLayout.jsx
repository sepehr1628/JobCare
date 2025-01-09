import { useState } from "react";
import Filter from "../features/shop/Filter";
import BreadCrumb from "@/components/UI/BreadCrumb";
import Results from "../features/shop/Results";
import { useLocation, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";
import { getProjects } from "../services/apiProjects";
import { getFreelancers } from "../services/apiFreelancers";
import ProductCard from "../features/products/ProductCard";
import FreelancerCard from "../features/freelancers/FreelancerCard";
import ProjectCard from "../features/projects/ProjectCard";
import ResultsHeader from "../features/shop/ResultsHeader";
import { useScrollTop } from "@/services/useScrollTop";

function Market() {
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({});

  const [url] = useSearchParams();
  const sorting = url.get("sort");

  const location = useLocation();
  const pathname = location.pathname;

  useScrollTop();

  const marketFilters = {
    brand: ["Asus", "Apple", "Acer", "HP", "Lenovo"],
    category: ["mobile", "laptop"],
  };
  const freelancerFilters = {
    skills: ["Front-end", "Back-end", "DevOps", "Linux", "Network"],
    level: ["Senior", "Mid-level", "Junior"],
  };
  const projectFilters = {
    level: ["beginner", "Intemediate", "Advanced"],
    category: ["Seo", "Back-end", "DevOps", "Web design", "Network Marketing"],
  };

  const map = {
    market: marketFilters,
    freelancers: freelancerFilters,
    projects: projectFilters,
  };

  const filterItems = map[pathname.slice(1)];

  const queryFunctions = {
    "/freelancers": () => getFreelancers({ sorting, filter }),
    "/market": () => getProducts({ sorting, filter }),
    "/projects": () => getProjects({ sorting, filter }),
  };

  const ItemCards = {
    "/freelancers": FreelancerCard,
    "/market": ProductCard,
    "/projects": ProjectCard,
  };

  const { data, isLoading } = useQuery({
    queryKey: [pathname, sorting],
    queryFn: queryFunctions[pathname],
    staleTime: 0,
    cacheTime: 0,
  });

  return (
    <section className={`${showFilter ? "overflow-hidden" : "overflow-auto"}`}>
      <BreadCrumb />
      <div className="flex xlg:gap-5 px-8 md:px-24 my-10 ">
        <Filter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          filterItems={filterItems}
          isLoading={isLoading}
          filter={filter}
        />
        <div className="flex flex-col w-full col-span-4">
          <ResultsHeader setShowFilter={setShowFilter} data={data} />
          <Results
            isLoading={isLoading}
            setShowFilter={setShowFilter}
            data={data}
            cards={ItemCards}
            pathname={pathname}
            onConfirm={(filter) => {
              getProducts(filter);
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Market;
