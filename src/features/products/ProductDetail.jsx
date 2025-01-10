import { useEffect, useState } from "react";
import BreadCrumb from "@/components/UI/BreadCrumb";
import { useParams } from "react-router";
import ProductCommentCard from "./ProductCommentCard";
import ProductDetailCard from "./ProductDetailCard";
import { supabase } from "../../../supabase";

function ProductDetail() {
  const [loading, setLoading] = useState();
  const [product, setProduct] = useState();
  const [productInfo, setProductInfo] = useState(1);

  const { productID } = useParams();
  useEffect(
    function () {
      async function getProductDetail() {
        try {
          setLoading(true);
          let query = supabase
            .from("products")
            .select("*")
            .eq("id", productID)
            .single();
          const { data, error } = await query;
          setProduct(data);
          error && console.error(error);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
      getProductDetail();
    },
    [productID]
  );

  // HOC component

  function handleDetail(e) {
    e.preventDefault();
    setProductInfo(1);
  }

  function handleComment(e) {
    e.preventDefault();
    setProductInfo(2);
  }

  if (loading) return "Loading...";

  return (
    <>
      <BreadCrumb data={product} />
      <section className="md:px-24">
        <div className="md:px-24 gap-5 py-10 grid grid-cols-[1fr_1.5fr] gap-y-2">
          <div className="p-2 border border-solid border-black rounded-md flex items-center">
            <img
              src={product?.imgUrl}
              alt={product?.name}
              className="w-[35rem] object-contain"
            />
          </div>
          <div className="py-16 flex flex-col gap-10">
            <h1 className="text-4xl">{product?.name}</h1>
            <div>
              <p>Brand: {product?.brand.toUpperCase()}</p>
              <p>{product?.description}</p>
            </div>
            <b>Price: {product?.price}$</b>
            <p className="flex items-center gap-2">
              <span>
                <img
                  src="/Images/star.svg"
                  alt="rating star image"
                  className="w-5"
                />
              </span>
              {/* {product?.rate.toFixed(1)} from 5 */}
            </p>
          </div>
          <div className="bg-red-950 p-5"></div>
          <div className="flex justify-between items-center p-5">
            <b>${product?.price}</b>
            <button className="bg-blue text-white hover:bg-white hover:text-blue transition-all duration-300 mt-4 mb-2 px-10 py-1 lg:py-2 rounded-full border border-blue border-solid flex items-center justify-center gap-2">
              Add To Cart
            </button>
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
              <ProductDetailCard product={product} />
            ) : (
              <ProductCommentCard setProductInfo={setProductInfo} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
