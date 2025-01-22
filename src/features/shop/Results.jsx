import useAuthStore from "@/stores/useAuthStore";
import ProductCardSkeleton from "../products/ProductCardSkeleon";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

function Results({ data, error, card, isLoading }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { accessToken } = useAuthStore();
  const CardComponent = card;

  const cardButtonActions = {
    "/market": handleAddToCart,
    "/freelancers": handleViewProfile,
    // "/projects" : "no"
  };

  function handleAddToCart() {
    if (!accessToken) {
      toast.error("Log in first to complete your purchase");
      navigate("/login");
    }
    toast.success("You can't buy lol :)");
  }

  function handleViewProfile() {}
  return (
    <>
      <div className="flex flex-wrap justify-evenly xl:grid xl:grid-cols-3 xl:grid-rows-3 gap-5 items-center [&>div]:max-w-96 [&>div]:sm:max-w-72 [&>div]:border xl:[&>div]:max-w-none [&>div]:border-solid [&>div]:border-gray-400 [&>div]:w-full [&>div]:rounded-md">
        {isLoading && (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        )}
        {data
          ? data.map((item) => (
              <CardComponent
                fn={cardButtonActions[location.pathname]}
                item={item}
                key={item.id}
              />
            ))
          : error
          ? "Something went wrong please try again."
          : "This item is not available"}
      </div>
      <div className="flex justify-center gap-8 my-4">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </>
  );
}

export default Results;
