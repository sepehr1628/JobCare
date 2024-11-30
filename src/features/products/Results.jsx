import ProductCard from "./ProductCard";
import Spinner from "./../../ui/Spinner";
import ResultsHeader from "./ResultsHeader";

function Results({
  setShowFilter,
  products,
  setPage,
  page,
  loading,
  onConfirm,
  errorMessage,
}) {
  if (loading)
    return (
      <div className="flex flex-col w-full col-span-4">
        <ResultsHeader setShowFilter={setShowFilter} products={products} />
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col w-full col-span-4">
      <ResultsHeader setShowFilter={setShowFilter} products={products} />
      <div className="flex flex-wrap justify-evenly xl:grid xl:grid-cols-3 xl:grid-rows-3 gap-5 items-center [&>div]:max-w-72 [&>div]:border xl:[&>div]:max-w-none [&>div]:border-solid [&>div]:border-gray-400 [&>div]:w-full [&>div]:rounded-md">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        {products?.length === 0 &&
          "The products you're looking for is not available."}

        {errorMessage && errorMessage.message}
      </div>
      <div className="flex justify-center gap-8 my-4">
        <button
          onClick={() => {
            setPage((prev) => --prev);
            onConfirm({ page });
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage((prev) => ++prev);
            onConfirm({ page });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Results;
