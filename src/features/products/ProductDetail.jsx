<<<<<<< HEAD
function ProductDetail() {
  return <div></div>;
=======
import { useEffect, useState } from "react";
import BreadCrumb from "../../ui/BreadCrumb";
import { useParams } from "react-router";
import Spinner from "../../ui/Spinner";
import ProductCommentCard from "./ProductCommentCard";
import ProductDetailCard from "./ProductDetailCard";

function ProductDetail() {
  const [loading, setLoading] = useState();
  const [product, setProduct] = useState();
  const [productInfo, setProductInfo] = useState(1);

  const id = useParams();

  useEffect(
    function () {
      async function getProductDetail() {
        try {
          setLoading(true);
          const res = await fetch(
            `http://localhost:5000/laptops?id=${id.productID}`
          );
          const data = await res.json();
          setProduct(...data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
      getProductDetail();
    },
    [id.productID]
  );

  function handleDetail(e) {
    e.preventDefault();
    setProductInfo(1);
  }

  function handleComment(e) {
    e.preventDefault();
    setProductInfo(2);
  }

  if (loading) return <Spinner />;

  return (
    <>
      <BreadCrumb data={product} />
      <section className="md:px-24">
        <div className="md:px-24 flex">
          <div className="p-2">
            <img src={product?.imgURL} alt={product?.name} className="w-96" />
          </div>
          <div className="p-2">
            <h1>{product?.name}</h1>
          </div>
        </div>
        <div className="my-16">
          <div className="border-b border-solid border-blue-900 flex [&>button]:px-5 [&>button]:py-3 font-semibold">
            <button
              onClick={handleDetail}
              className={productInfo === 1 ? "bg-blue text-white" : "text-blue"}
            >
              Product Detail
            </button>
            <button
              onClick={handleComment}
              className={productInfo === 2 ? "bg-blue text-white" : "text-blue"}
            >
              Comments
            </button>
          </div>
          <div className="px-10">
            {productInfo === 1 ? (
              <ProductDetailCard />
            ) : (
              <ProductCommentCard setProductInfo={setProductInfo} />
            )}
          </div>
        </div>
      </section>
    </>
  );
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
}

export default ProductDetail;
