import FilterListItem from "./FilterListItem";

function Filter({
  type,
  setType,
  brand,
  setBrand,
  category,
  setCategory,
  priceRange,
  setPriceRange,
  loading,
  showFilter,
  onConfirm,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(priceRange);
    onConfirm({
      brand,
      category,
      type,
      priceRange,
    });
  }

  function emptyFilter() {
    setBrand("");
    setCategory("");
    setPriceRange(null);
  }

  function handleDelete(e) {
    e.preventDefault();
    emptyFilter();
    setType("");
    onConfirm({});
  }

  return (
    <aside
      className={`${
        showFilter
          ? "translate-x-0 fixed left-0 right-0 top-0 bottom-0 flex flex-col w-full"
          : "hidden -translate-x-full"
      } xlg:translate-x-0 xlg:block border h-fit bg-white border-solid z-40 border-slate-400 rounded-md p-4 [&>div]:my-4`}
    >
      <b className="text-lg">Filter</b>

      <form onSubmit={handleSubmit}>
        {/* Brand */}
        <div>
          <p className="mb-2 font-medium">Brand</p>
          <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-4">
            <FilterListItem name="brand" value="Apple" setBrand={setBrand}>
              Apple
            </FilterListItem>
            <FilterListItem name="brand" value="asus" setBrand={setBrand}>
              Asus
            </FilterListItem>
            <FilterListItem name="brand" value="hp" setBrand={setBrand}>
              Hp
            </FilterListItem>
            <FilterListItem name="brand" value="acer" setBrand={setBrand}>
              Acer
            </FilterListItem>
            <FilterListItem name="brand" value="lenovo" setBrand={setBrand}>
              Lenovo
            </FilterListItem>
          </ul>
        </div>
        <div>
          <p className="mb-2 font-medium">Category</p>
          <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-4">
            <li>
              <input
                type="radio"
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                value={category}
              />
              <label>mobile</label>
            </li>
            <li>
              <input
                type="radio"
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                value="laptop"
              />
              <label>laptop</label>
            </li>
          </ul>
        </div>

        {/* Price range */}
        <div>
          <p className="mb-2 font-medium">Price Range</p>
          <input
            onChange={(e) => setPriceRange(e.target.value)}
            type="range"
            name="price-range"
            className="w-full outline-none h-[0.35rem]"
            min="0"
            max="5000"
          />
        </div>
        <div className="flex justify-evenly">
          <button type="reset" onClick={handleDelete}>
            Delete
          </button>
          <button type="submit" disabled={loading}>
            Filter
          </button>
        </div>
      </form>
    </aside>
  );
}
export default Filter;
