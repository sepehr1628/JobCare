import SearchFilterForm from "@/components/forms/SearchFilterForm";

function Filter({ filterItems, showFilter, setShowFilter, isLoading }) {
  return (
    <aside
      className={`${
        showFilter
          ? "translate-x-0 fixed left-0 right-0 top-0 bottom-0 flex flex-col w-full h-screen"
          : "hidden -translate-x-full"
      } xlg:translate-x-0 xlg:block border h-fit w-1/5 bg-white border-solid z-40 border-slate-400 rounded-md p-4 [&>div]:my-4`}
    >
      <div className="flex justify-between items-center">
        <b className="text-lg">Filter</b>
        {showFilter && (
          <span
            className="text-[2rem]"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            &times;
          </span>
        )}
      </div>
      <SearchFilterForm
        isLoading={isLoading}
        filterItems={filterItems}
        setShowFilter={setShowFilter}
      />
    </aside>
  );
}
export default Filter;
