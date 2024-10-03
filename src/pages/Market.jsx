import { useEffect, useState } from "react";
import Filter from "../features/products/Filter";
import BreadCrumb from "../ui/BreadCrumb";
import Results from "../ui/Results";
import { useParams } from "react-router";

function Market() {
  const [showFilter, setShowFilter] = useState(false);
  const [getURL, setGetURL] = useState();
  const [products, setProducts] = useState();
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

  useEffect(
    function () {
      async function fetchProducts() {
        const response = await fetch(
          `Http://localhost:5000/laptops${getURL ? getURL : ""}`
        );
        const data = await response.json();
        console.log(data);
        setProducts(data);
      }
      fetchProducts();
    },
    [getURL]
  );

  return (
    <section>
      <BreadCrumb />
      <div className="flex xlg:grid xlg:grid-cols-5 xlg:gap-5 px-8 md:px-24 my-10 md:my-24">
        <Filter
          showFilter={showFilter}
          filters={filters}
          setFilters={setFilters}
          setGetURL={setGetURL}
          getURL={getURL}
        />
        <Results setShowFilter={setShowFilter} products={products} />
      </div>
    </section>
  );
}

export default Market;
