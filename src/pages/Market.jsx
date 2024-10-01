import { useEffect, useState } from "react";
import Filter from "../features/products/Filter";
import BreadCrumb from "../ui/BreadCrumb";
import Results from "../ui/Results";

function Market() {
  const [showFilter, setShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState();
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
      const filteredProducts = async () => {
        const response = await fetch("./../../db.json");
        const data = await response.json();
        const filteredData = data.laptops.filter((product) => {
          if (filters.brand.apple && product.brand !== "Apple") return false;
          if (filters.brand.asus && product.brand !== "Asus") return false;
          if (filters.brand.hp && product.brand !== "Hp") return false;
          if (filters.brand.acer && product.brand !== "Acer") return false;
          if (filters.brand.lenovo && product.brand !== "Lenovo") return false;
          if (filters.price.min && product.price < filters.price.min)
            return false;
          if (filters.price.max && product.price > filters.price.max)
            return false;
          if (filters.cpu.intel && product.cpu !== "Intel") return false;
          if (filters.cpu.amd && product.cpu !== "Amd") return false;
          if (filters.type.laptop && product.type !== "laptop") return false;
          if (filters.type.desktop && product.type !== "desktop") return false;
          return true;
        });
        console.log(filteredData);

        return filteredData;
      };
      filteredProducts().then;
      (data) => setFilteredData(data);
    },
    [
      filters.brand.apple,
      filters.brand.asus,
      filters.brand.hp,
      filters.brand.acer,
      filters.brand.lenovo,
      filters.price.min,
      filters.price.max,
      filters.cpu.intel,
      filters.cpu.amd,
      filters.type.laptop,
      filters.type.desktop,
    ]
  );

  return (
    <section>
      <BreadCrumb />
      <div className="flex xlg:grid xlg:grid-cols-5 xlg:gap-5 px-8 md:px-24 my-10 md:my-24">
        <Filter
          showFilter={showFilter}
          filters={filters}
          setFilters={setFilters}
        />
        <Results filteredData={filteredData} setShowFilter={setShowFilter} />
      </div>
    </section>
  );
}

export default Market;
