import { useEffect, useMemo, useState } from "react";
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
  const [search, setSearch] = useState();

  const location = useLocation();

  const [searchParams] = useSearchParams();
  const sorting = searchParams.get("sort");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const entries = Array.from(params.entries());
    const parsedSearch = entries.reduce((acc, [key, value]) => {
      if (key !== "sort") acc[key] = value.split(",");
      return { ...acc };
    }, {});
    setSearch(parsedSearch);
  }, [location.search]);

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

  const filtersMap = {
    "/market": {
      keys: ["brand", "category"],
      queryFn: () => getProducts({ sorting, search }),
      card: ProductCard,
      items: marketFilters,
    },
    "/freelancers": {
      keys: ["skills", "level"],
      queryFn: () => getFreelancers({ sorting, search }),
      card: FreelancerCard,
      items: freelancerFilters,
    },
    "/projects": {
      keys: ["level", "category"],
      queryFn: () => getProjects({ sorting, search }),
      card: ProjectCard,
      items: projectFilters,
    },
  };
  const { queryFn, card, items } = filtersMap[pathname] || {};

  const { data, error, isLoading } = useQuery({
    queryKey: [pathname, sorting, JSON.stringify(search)],
    queryFn: queryFn,
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
          filterItems={items}
          isLoading={isLoading}
        />
        <div className="flex flex-col w-full col-span-4">
          <ResultsHeader setShowFilter={setShowFilter} data={data} />
          <Results
            isLoading={isLoading}
            setShowFilter={setShowFilter}
            data={data}
            error={error}
            card={card}
            pathname={pathname}
          />
        </div>
      </div>
    </section>
  );
}

export default Market;
