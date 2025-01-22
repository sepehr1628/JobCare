import FilterListItem from "@/features/shop/FilterListItem";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

function SearchFilterForm({ filterItems, isLoading, setShowFilter }) {
  const [_, setSearchParams] = useSearchParams();
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
    setShowFilter(false);

    const firstFilterPart = formData.getAll(keys[0]);
    const secondFilterPart = formData.getAll(keys[1]);

    const queryParts = [];
    if (firstFilterPart.length > 0) {
      queryParts.push(
        `${keys[0].toLowerCase()}=${firstFilterPart
          .map((el) => el.toLowerCase())
          .join(",")}`
      );
    }
    if (secondFilterPart.length > 0) {
      queryParts.push(
        `${keys[1].toLowerCase()}=${secondFilterPart
          .map((el) => el.toLowerCase())
          .join(",")}`
      );
    }

    const rawQueryString = queryParts.join("&");
    const newUrl = `${window.location.pathname}?${rawQueryString}`;
    if (!rawQueryString) return;
    window.history.replaceState({}, "", newUrl);
    setSearchParams(new URLSearchParams(rawQueryString)); // Notify React Router.
  }

  function handleDeleteFilterForm() {
    setSearchParams("");
  }

  return (
    <form ref={formRef} onSubmit={handleSubmitFilterForm}>
      <div>
        <p className="mt-4 mb-2 font-medium">{keys[0]}</p>
        <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-4">
          {values[0].map((el, i) => (
            <FilterListItem key={i} name={keys[0]} inputLabel={el} />
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

      <div className="my-4 [&>button]:border [&>button]:border-slate-500 [&>button]:border-solid [&>button]:px-4 [&>button]:py-1 [&>button]:rounded-full flex flex-wrap justify-evenly gap-2">
        <button type="submit" disabled={isLoading}>
          Filter
        </button>
        <button onClick={handleDeleteFilterForm}>Delete</button>
      </div>
    </form>
  );
}

export default SearchFilterForm;
