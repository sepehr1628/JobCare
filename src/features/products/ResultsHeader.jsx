<<<<<<< HEAD
import { useState } from "react";

function ResultsHeader({ setShowFilter, products }) {
  const [sorting, setSorting] = useState();

=======
function ResultsHeader({ setShowFilter, products }) {
>>>>>>> origin/master
  function handleClick() {
    setShowFilter((prev) => !prev);
  }
  return (
    <header className="flex flex-col gap-4 sm:flex-row justify-start items-start sm:justify-between mb-5">
      <p>{`${products?.length ?? 0} products found`}</p>
      <div className="flex flex-row-reverse sm:flex-row gap-4 xlg:gap-0 items-center">
<<<<<<< HEAD
        <select
          className="border-slate-300 border border-solid p-2 text-sm w-40 md:w-60 rounded-md focus:outline-none"
          value={sorting}
          onChange={(e) => {
            setSorting(e.target.value);
          }}
        >
          <option value="default">Sort By (Default)</option>
          <option value="a-z">A-Z</option>
          <option value="high-price">High Price</option>
          <option value="lowest-price">Low Price</option>
=======
        <select className="border-slate-300 border border-solid p-2 text-sm w-40 md:w-60 rounded-md focus:outline-none">
          <option value="default">Sort By (Default)</option>
          <option value="high-price">Highest Price</option>
          <option value="lowest-price">Lowest Price</option>
          <option value="CPU">CPU</option>
          <option value="GPU">GPU</option>
>>>>>>> origin/master
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
  );
}

export default ResultsHeader;
