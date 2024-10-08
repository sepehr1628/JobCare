import { useEffect, useState } from "react";
import Filter from "../features/products/Filter";
import BreadCrumb from "../ui/BreadCrumb";
import Results from "../ui/Results";

<<<<<<< HEAD
const PRODUCTPERPAGE = 10;

function Market() {
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState();
  const [priceRange, setPriceRange] = useState();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

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
          type={type}
          brand={brand}
          category={category}
          priceRange={priceRange}
          setType={setType}
          setBrand={setBrand}
          setCategory={setCategory}
          setPriceRange={setPriceRange}
          onConfirm={(filter) => {
            console.log(filter);
            getProducts(filter);
          }}
        />
        <Results
          type={type}
          brand={brand}
          category={category}
          priceRange={priceRange}
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
=======
function Market() {
  const [showFilter, setShowFilter] = useState(false);
  const [getURL, setGetURL] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    return urlParams.toString();
  });
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

  useEffect(function () {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    setGetURL(`?${urlParams.toString()}`);
  }, []);

  useEffect(
    function () {
      async function fetchProducts() {
        const decodedGetURL = decodeURIComponent(getURL);
        const response = await fetch(
          `Http://localhost:5000/laptops${getURL && decodedGetURL}`
        );
        const data = await response.json();
        setProducts(data);
      }
      fetchProducts();
    },
    [getURL, setProducts]
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
        />
        <Results setShowFilter={setShowFilter} products={products} />
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
      </div>
    </section>
  );
}

export default Market;
