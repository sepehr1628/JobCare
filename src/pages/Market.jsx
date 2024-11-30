import { useEffect, useState } from "react";
import Filter from "../features/products/Filter";
import BreadCrumb from "../ui/BreadCrumb";
<<<<<<< HEAD
import Results from "../features/products/Results";
import { supabase } from "../ui/supabase";

const PER_PAGE = 10;
=======
<<<<<<< HEAD
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
=======
import Results from "../features/products/Results";
import { supabase } from "../ui/supabase";

const PER_PAGE = 10; // Set the number of items per page
>>>>>>> origin/master

function Market() {
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
<<<<<<< HEAD
  const [errorMessage, setErrorMessage] = useState();
=======
>>>>>>> origin/master

  const getProducts = async (filter) => {
    const { brand, type, category } = filter;
    try {
      setLoading(true);
<<<<<<< HEAD

      let query = supabase
        .from("products")
        .select("rate, name, price, id, description, isAvailable, imgUrl")
        .order("isAvailable", { ascending: false });
=======
      let query = supabase.from("products").select();
>>>>>>> origin/master

      if (brand) {
        query = query.eq("brand", brand);
      }
      if (type) {
        query = query.eq("type", type);
      }
      if (category) {
        query = query.eq("category", category);
      }

      query = query.range((page - 1) * PER_PAGE, page * PER_PAGE - 1);

      const { data, error } = await query;
<<<<<<< HEAD
      error && setErrorMessage(error);

      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setErrorMessage(error);
=======
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/master
      <div className="flex xlg:grid xlg:grid-cols-5 xlg:gap-5 px-8 md:px-24 my-10 md:my-24">
        <Filter
          loading={loading}
          showFilter={showFilter}
<<<<<<< HEAD
          onConfirm={(filter) => {
=======
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
>>>>>>> origin/master
            getProducts(filter);
          }}
        />
        <Results
<<<<<<< HEAD
          errorMessage={errorMessage}
=======
          type={type}
          brand={brand}
          category={category}
          priceRange={priceRange}
>>>>>>> origin/master
          page={page}
          setPage={setPage}
          loading={loading}
          setShowFilter={setShowFilter}
          products={products}
          onConfirm={(filter) => {
<<<<<<< HEAD
            getProducts(filter);
          }}
        />
=======
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
=======
      <div className="flex xlg:gap-5 px-8 xlg:px-24 my-10 md:mt-24">
        <Filter
          loading={loading}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          onConfirm={(filter) => getProducts(filter)}
        />
        <Results
          setShowFilter={setShowFilter}
          products={products}
          loading={loading}
          setPage={setPage}
          onConfirm={(filter) => getProducts(filter)}
          page={page}
        />
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
      </div>
    </section>
  );
}

export default Market;
