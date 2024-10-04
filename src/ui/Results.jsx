import ProductCard from "../features/products/ProductCard";

function Results({ setShowFilter, products }) {
  function handleClick() {
    setShowFilter((prev) => !prev);
  }

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
      <div className="flex flex-col items-center xlg:grid xlg:grid-cols-3 xlg:grid-rows-3 gap-5 [&>div]:border [&>div]:border-solid [&>div]:border-gray-400 [&>div]:w-full [&>div]:rounded-md">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.price} />
          ))}
        {/* {products.length === 0 &&
          "The products you're looking for is not available."} */}
      </div>
    </div>
  );
}

export default Results;

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
