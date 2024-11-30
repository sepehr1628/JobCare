import { useEffect, useState } from "react";
import Filter from "../features/products/Filter";
import BreadCrumb from "../ui/BreadCrumb";
import Results from "../features/products/Results";
import { supabase } from "../ui/supabase";

const PER_PAGE = 10;

function Market() {
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState();

  const getProducts = async (filter) => {
    const { brand, type, category } = filter;
    try {
      setLoading(true);

      let query = supabase
        .from("products")
        .select("rate, name, price, id, description, isAvailable, imgUrl")
        .order("isAvailable", { ascending: false });

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
      error && setErrorMessage(error);

      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setErrorMessage(error);
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
            getProducts(filter);
          }}
        />
        <Results
          errorMessage={errorMessage}
          page={page}
          setPage={setPage}
          loading={loading}
          setShowFilter={setShowFilter}
          products={products}
          onConfirm={(filter) => {
            getProducts(filter);
          }}
        />
      </div>
    </section>
  );
}

export default Market;
