import ProductCard from "../features/products/ProductCard";
import Spinner from "./Spinner";

function Results({
  setPage,
  setShowFilter,
  page,
  products,
  loading,
  onConfirm,
}) {
  function handleClick() {
    setShowFilter((prev) => !prev);
  }

  function handleNextPage() {
    setPage((prev) => ++prev);
    onConfirm({ page });
  }

  function handlePrevPage() {
    setPage((prev) => prev - 1);
    onConfirm({});
  }

  return (
    <div className="flex flex-col w-full col-span-4">
      <header className="flex flex-col gap-4 sm:flex-row justify-start items-start sm:justify-between mb-5">
        <p>{`${products?.length} products found`}</p>
        <div className="flex flex-row-reverse sm:flex-row gap-4 xlg:gap-0 items-center">
          <select className="border-slate-300 border border-solid p-2 text-sm w-40 md:w-60 rounded-md focus:outline-none">
            <option value="default">Sort By (Default)</option>
            <option value="high-price">Highest Price</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="CPU">CPU</option>
            <option value="GPU">GPU</option>
          </select>
          <span className="xlg:hidden">
            <img
              src="./../../assets/Images/filter-mobile.png"
              alt="filter search"
              className="rotate-90"
              onClick={handleClick}
            />
          </span>
        </div>
      </header>
      <div className="flex flex-col items-center xlg:grid xlg:grid-cols-3 xlg:grid-rows-4 gap-5 [&>div]:border [&>div]:border-solid [&>div]:border-gray-400 [&>div]:w-full [&>div]:rounded-md">
        {loading && <Spinner />}
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.price} />
          ))}
        {products?.length === 0 &&
          "The products you're looking for is not available."}
      </div>
      {products?.length !== 0 && (
        <div className="flex justify-center items-center gap-2 p-3 [&>button]:bg-white [&>button]:text-blue [&>button]:transition-all [&>button]:duration-300 [&>button]:md:m-0 [&>button]:px-3 [&>button]:py-1 [&>button]:md:px-10 [&>button]:lg:py-2 [&>button]:rounded-full [&>button]:border [&>button]:m-auto [&>button]:border-blue [&>button]:border-solid [&>button]:flex [&>button]:items-center [&>button]:justify-center">
          <button
            className="hover:bg-blue hover:text-white"
            onClick={handlePrevPage}
          >
            Previous
          </button>
          <button
            className="hover:bg-blue hover:text-white"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Results;
