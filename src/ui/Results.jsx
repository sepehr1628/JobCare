import ProductCard from "../features/products/ProductCard";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
import Spinner from "./Spinner";

function Results({
  type,
  category,
  brand,
  setPage,
  setShowFilter,
  page,
  products,
  loading,
  onConfirm,
}) {
<<<<<<< HEAD
=======
=======

function Results({ setShowFilter, products }) {
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
>>>>>>> origin/master
  function handleClick() {
    setShowFilter((prev) => !prev);
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
  function handleNextPage() {
    setPage((cur) => cur + 1);
    onConfirm({ page: page + 1, type, category, brand });
  }

  function handlePrevPage() {
    setPage((cur) => cur--);
    onConfirm({ page: page - 1, type, category, brand });
  }

  return (
    <div className="flex flex-col w-full col-span-4">
      <header className="flex flex-col gap-4 sm:flex-row justify-start items-start sm:justify-between mb-5">
        <p>{`${products?.length} products found`}</p>
        <div className="flex flex-row-reverse sm:flex-row gap-4 xlg:gap-0 items-center">
          <select className="border-slate-300 border border-solid p-2 text-sm w-40 md:w-60 rounded-md focus:outline-none">
<<<<<<< HEAD
=======
=======
  return (
    <div className="flex flex-col w-full col-span-4">
      <header className="flex flex-col gap-4 sm:flex-row justify-start items-start sm:justify-between mb-5">
        {/* <p>{`${products.length} products found`}</p> */}
        <p>1</p>
        <div className="flex flex-row-reverse sm:flex-row gap-4 xlg:gap-0 items-center">
          <select
            className="border-slate-300 border border-solid p-2 text-sm w-40 md:w-60 rounded-md focus:outline-none"
            // onChange={(e) => {
            //   setSort(e.target.value);
            //   console.log(`Sorting for ${e.target.value}`);
            // }}
          >
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
      {loading && <Spinner />}
      {products && (
        <div className="flex flex-wrap items-center xlg:grid xlg:grid-cols-3 xlg:grid-rows-4 gap-5 [&>div]:border [&>div]:border-solid [&>div]:border-gray-400 [&>div]:w-full [&>div]:rounded-md">
          {products.map((product) => (
            <ProductCard product={product} key={product.price} />
          ))}
        </div>
      )}
      {products?.length === 0 &&
        "The products you're looking for is not available."}
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
<<<<<<< HEAD
=======
=======
      <div className="flex flex-col items-center xlg:grid xlg:grid-cols-3 xlg:grid-rows-3 gap-5 [&>div]:border [&>div]:border-solid [&>div]:border-gray-400 [&>div]:w-full [&>div]:rounded-md">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.price} />
          ))}
        {/* {products.length === 0 &&
          "The products you're looking for is not available."} */}
      </div>
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
>>>>>>> origin/master
    </div>
  );
}

export default Results;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

{
  /* <div>
          <div>
            <img
              src="./../assets/Images/product-image.webp"
              className="rounded-t-md"
              alt={`JobCare`}
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 p-2 md:p-4">
            <div className="flex items-center justify-between text-sm">
              <b>$29.56</b>
              <div className="rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
                star 4.5
              </div>
            </div>
            <p className="text-lg">
              zenbook pro 14 due oled (ux8402,11th gen intel)
            </p>
            <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
              Add To Cart <LiaShoppingBagSolid />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src="./../assets/Images/product-image.webp"
              className="rounded-t-md"
              alt={`JobCare`}
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 p-4">
            <div className="flex items-center justify-between text-sm">
              <b>$29.56</b>
              <div className="rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
                star 4.5
              </div>
            </div>
            <p className="text-lg">
              zenbook pro 14 due oled (ux8402,11th gen intel)
            </p>
            <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
              Add To Cart <LiaShoppingBagSolid />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src="./../assets/Images/product-image.webp"
              className="rounded-t-md"
              alt={`JobCare`}
            />
          </div>
          <div className="flex flex-col md:gap-4 p-2 md:p-4">
            <div className="flex items-center justify-between text-sm">
              <b>$29.56</b>
              <div className="rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
                star 4.5
              </div>
            </div>
            <p className="text-lg">
              zenbook pro 14 due oled (ux8402,11th gen intel)
            </p>
            <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
              Add To Cart <LiaShoppingBagSolid />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src="./../assets/Images/product-image.webp"
              className="rounded-t-md"
              alt={`JobCare`}
            />
          </div>
          <div className="flex flex-col md:gap-4 p-2 md:p-4">
            <div className="flex items-center justify-between text-sm">
              <b>$29.56</b>
              <div className="rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
                star 4.5
              </div>
            </div>
            <p className="text-lg">
              zenbook pro 14 due oled (ux8402,11th gen intel)
            </p>
            <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
              Add To Cart <LiaShoppingBagSolid />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src="./../assets/Images/product-image.webp"
              className="rounded-t-md"
              alt={`JobCare`}
            />
          </div>
          <div className="flex flex-col md:gap-4 p-2 md:p-4">
            <div className="flex items-center justify-between text-sm">
              <b>$29.56</b>
              <div className="rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
                star 4.5
              </div>
            </div>
            <p className="text-lg">
              zenbook pro 14 due oled (ux8402,11th gen intel)
            </p>
            <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
              Add To Cart <LiaShoppingBagSolid />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src="./../assets/Images/product-image.webp"
              className="rounded-t-md"
              alt={`JobCare`}
            />
          </div>
          <div className="flex flex-col md:gap-4 p-2 md:p-4">
            <div className="flex items-center justify-between text-sm">
              <b>$29.56</b>
              <div className="rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
                star 4.5
              </div>
            </div>
            <p className="text-lg">
              zenbook pro 14 due oled (ux8402,11th gen intel)
            </p>
            <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
              Add To Cart <LiaShoppingBagSolid />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src="./../assets/Images/product-image.webp"
              className="rounded-t-md"
              alt={`JobCare`}
            />
          </div>
          <div className="flex flex-col md:gap-4 p-2 md:p-4">
            <div className="flex items-center justify-between text-sm">
              <b>$29.56</b>
              <div className="rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
                star 4.5
              </div>
            </div>
            <p className="text-lg">
              zenbook pro 14 due oled (ux8402,11th gen intel)
            </p>
            <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
              Add To Cart <LiaShoppingBagSolid />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src="./../assets/Images/product-image.webp"
              className="rounded-t-md"
              alt={`JobCare`}
            />
          </div>
          <div className="flex flex-col md:gap-4 p-2 md:p-4">
            <div className="flex items-center justify-between text-sm">
              <b>$29.56</b>
              <div className="rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
                star 4.5
              </div>
            </div>
            <p className="text-lg">
              zenbook pro 14 due oled (ux8402,11th gen intel)
            </p>
            <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
              Add To Cart <LiaShoppingBagSolid />
            </button>
          </div>
        </div>
        <div>
          <div>
            <img
              src="./../assets/Images/product-image.webp"
              className="rounded-t-md"
              alt={`JobCare`}
            />
          </div>
          <div className="flex flex-col md:gap-4 p-2 md:p-4">
            <div className="flex items-center justify-between text-sm">
              <b>$29.56</b>
              <div className="rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
                star 4.5
              </div>
            </div>
            <p className="text-lg">
              zenbook pro 14 due oled (ux8402,11th gen intel)
            </p>
            <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
              Add To Cart <LiaShoppingBagSolid />
            </button>
          </div>
        </div> */
}
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
>>>>>>> origin/master
