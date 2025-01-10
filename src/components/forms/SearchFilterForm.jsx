import FilterListItem from "@/features/shop/FilterListItem";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

function SearchFilterForm({ filterItems, isLoading }) {
  const [_, setFilterURL] = useSearchParams();
  const location = useLocation();
  const formRef = useRef(null);

  const keys = Object.keys(filterItems);
  const values = Object.values(filterItems);

  useEffect(
    function () {
      formRef?.current?.reset();
    },
    [location.pathname]
  );

  function handleSubmitFilterForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const firstFilterPart = formData.getAll(keys[0]);
    const secondFilterPart = formData.getAll(keys[1]);
    const priceRange = formData.get("price-range");

    const queryParts = [];
    queryParts.push(`price-range=${priceRange}`);
    if (firstFilterPart.length > 0) {
      queryParts.push(`${keys[0]}=${firstFilterPart.join(",")}`);
    }
    if (secondFilterPart.length > 0) {
      queryParts.push(`${keys[1]}=${secondFilterPart.join(",")}`);
    }

    const rawQueryString = queryParts.join("&");
    const newUrl = `${window.location.pathname}?${rawQueryString}`;

    window.history.replaceState({}, "", newUrl);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmitFilterForm}>
      <div>
        <p className="mt-4 mb-2 font-medium">{keys[0]}</p>
        <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-4">
          {values[0].map((el, i) => (
            <FilterListItem key={i} name={keys[0]} inputLabel={el} value={el} />
          ))}
        </ul>
      </div>
      <div>
        <p className="mt-4 mb-2 font-medium">{keys[1]}</p>
        <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-4">
          {values[1].map((el, i) => (
            <FilterListItem key={i} name={keys[1]} inputLabel={el} value={el} />
          ))}
        </ul>
      </div>

      <div>
        <p className="mt-4 mb-2 font-medium">Price Range</p>
        <input
          type="range"
          name="price-range"
          className="w-full outline-none h-[0.35rem]"
          min="0"
          max="5000"
        />
      </div>
      <div className="my-4 [&>button]:border [&>button]:border-slate-500 [&>button]:border-solid [&>button]:px-4 [&>button]:py-1 [&>button]:rounded-full flex justify-evenly">
        <button type="reset" onClick={() => console.log(1)}>
          Delete
        </button>
        <button type="submit" disabled={isLoading}>
          Filter
        </button>
      </div>
    </form>
  );
}

export default SearchFilterForm;
