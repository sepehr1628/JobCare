import { useEffect, useState } from "react";
import Filter from "../features/products/Filter";
import BreadCrumb from "../ui/BreadCrumb";
import Results from "../ui/Results";

const PRODUCTPERPAGE = 10;

function Market() {
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState();

  // const getProducts = async (filter) => {
  //   const { brand, type, category, priceRange, page } = filter;
  //   try {
  //     setLoading(true);
  //     let params = `?_page=${page}&_limit=${PRODUCTPERPAGE}`;
  //     if (brand) params += `&brand=${brand}`;
  //     if (type) params += `&type=${type}`;
  //     if (category) params += `&category=${category}`;
  //     if (priceRange) params += `&priceRange=${priceRange}`;
  //     const response = await fetch(`http://localhost:5000/products${params}`);
  //     const data = await response.json();
  //     setProducts(data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const getProducts = async (filter) => {
    const { brand, type, category, priceRange } = filter;
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/products?${`_page=${page}&_per-page=${PRODUCTPERPAGE}`}${
          brand ? `&brand=${brand}` : ""
        }${type ? `&type=${type}` : ""}${
          category ? `&category=${category}` : ""
        }${priceRange ? `&price_lt=${priceRange}` : ""}`
      );
      const data = await res.json();
      console.log("data", data);
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts({});
  }, []);

  return (
    <section>
      <BreadCrumb />
      <div className="flex xlg:grid xlg:grid-cols-5 xlg:gap-5 px-8 md:px-24 my-10 md:my-24">
        <Filter
          loading={loading}
          showFilter={showFilter}
          onConfirm={(filter) => {
            console.log(filter);
            getProducts(filter);
          }}
        />
        <Results
          page={page}
          setPage={setPage}
          loading={loading}
          setShowFilter={setShowFilter}
          products={products}
          onConfirm={(filter) => {
            console.log(filter);
            getProducts(filter);
          }}
        />
      </div>
    </section>
  );
}

export default Market;
