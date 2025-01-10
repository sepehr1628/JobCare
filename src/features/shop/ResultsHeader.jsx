import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function ResultsHeader({ setShowFilter, data }) {
  const [_, setSorting] = useState("default");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSorting(value) {
    if (value === "default") searchParams.delete("sort");
    else {
      searchParams.set("sort", value);
    }
    setSearchParams(searchParams);
  }

  function handleClick() {
    setShowFilter((prev) => !prev);
  }
  return (
    <header className="flex flex-col gap-4 sm:flex-row justify-start items-start sm:justify-between mb-5">
      <p>{`${data?.length ?? 0} products found`}</p>
      <div className="flex flex-row-reverse sm:flex-row gap-4 xlg:gap-0 items-center">
        <select
          className="border-slate-300 border border-solid p-2 text-sm w-40 md:w-60 rounded-md focus:outline-none"
          value={searchParams.get("sort") || "default"}
          onChange={(e) => {
            const value = e.target.value;
            setSorting(value);
            handleSorting(value);
          }}
        >
          <option value="default">Sort By (Default)</option>
          <option value="a-z">A-Z</option>
          <option value="high-price">High Price</option>
          <option value="low-price">Low Price</option>
        </select>
        <span className="xlg:hidden">
          <img
            src="/Images/filter-mobile.png"
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
