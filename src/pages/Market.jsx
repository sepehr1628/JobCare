import { useEffect, useState } from "react";
import Filter from "../features/products/Filter";
import BreadCrumb from "../ui/BreadCrumb";
import Results from "../ui/Results";
import { useLocation, useNavigate } from "react-router";

function Market() {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    brand: {
      apple: false,
      asus: false,
      hp: false,
      acer: false,
      lenovo: false,
    },
    price: {
      min: 0,
      max: 1000,
    },
    cpu: {
      intel: false,
      amd: false,
    },
    type: {
      laptop: false,
      desktop: false,
    },
  });

  useEffect(function () {
    async function fetchProducts() {
      const response = await fetch(`Http://localhost:5000/laptops`);
      const data = await response.json();
    }
    fetchProducts();
  }, []);

  return (
    <section>
      <BreadCrumb />
      <div className="flex xlg:grid xlg:grid-cols-5 xlg:gap-5 px-8 md:px-24 my-10 md:my-24">
        <Filter
          showFilter={showFilter}
          filters={filters}
          setFilters={setFilters}
        />
        <Results setShowFilter={setShowFilter} />
      </div>
    </section>
  );
}

export default Market;
