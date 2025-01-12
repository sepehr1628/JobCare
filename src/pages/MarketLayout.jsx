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
// import useFilterStore from "@/stores/useFilterStore";

function Market() {
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({});

  const [searchParams] = useSearchParams();
  const sorting = searchParams.get("sort");

  const location = useLocation();
  const pathname = location.pathname;

  useScrollTop();

  // const { marketFilters, freelancerFilters, projectFilters, filterSubjects } =
  // useFilterStore();

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
      queryFn: () => getProducts({ sorting, filter }),
      card: ProductCard,
      items: marketFilters,
    },
    "/freelancers": {
      keys: ["skills", "level"],
      queryFn: () => getFreelancers({ sorting, filter }),
      card: FreelancerCard,
      items: freelancerFilters,
    },
    "/projects": {
      keys: ["level", "category"],
      queryFn: () => getProjects({ sorting, filter }),
      card: ProjectCard,
      items: projectFilters,
    },
  };
  const { keys, queryFn, card, items } = filtersMap[pathname] || {};

  const { data, error, isLoading } = useQuery({
    queryKey: [pathname, sorting, filter],
    queryFn: queryFn,
    staleTime: 0,
    cacheTime: 0,
  });
  console.log(data);

  useEffect(() => {
    if (!keys) return;

    // Extract filter values based on the relevant keys for the current page
    const newFilter = keys.reduce((acc, key) => {
      const value = searchParams.get(key);
      if (value) acc[key] = value.toLowerCase().split(",");
      return acc;
    }, {});
    setFilter(newFilter);
  }, [searchParams]);
  console.log(filter);

  // const priceRange = searchParams.get("price-range");
  // const skills = searchParams.get("skills");
  // const level = searchParams.get("level");
  // const brand = searchParams.get("brand");
  // const category = searchParams.get("category");

  // useEffect(() => {
  //   setFilter({
  //     brand,
  //     level,
  //     category,
  //     skills,
  //     priceRange,
  //   });
  // }, [brand, level, category, skills, priceRange]);

  return (
    <section className={`${showFilter ? "overflow-hidden" : "overflow-auto"}`}>
      <BreadCrumb />
      <div className="flex xlg:gap-5 px-8 md:px-24 my-10 ">
        <Filter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          filterItems={items}
          isLoading={isLoading}
          filter={filter}
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
