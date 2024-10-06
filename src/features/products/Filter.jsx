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
        <div>
          <p className="mb-2 font-medium">Type</p>
          <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-2">
            <li>
              <input
                type="radio"
                onChange={(e) => {
                  emptyFilter();
                  setType(e.target.value);
                }}
                name="type"
                value="technology"
                checked={type === "technology" ? true : false}
              />
              <label>Technology</label>
            </li>
            <li>
              <input
                type="radio"
                onChange={(e) => {
                  emptyFilter();
                  setType(e.target.value);
                }}
                name="type"
                value="clothing"
                checked={type === "clothing" ? true : false}
              />
              <label>Clothing</label>
            </li>
          </ul>
        </div>
        {type === "technology" && (
          <>
            <div>
              <p className="mb-2 font-medium">Category</p>
              <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-2">
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    value="mobile"
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
            <div>
              <p className="mb-2 font-medium">Brand</p>
              <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-2">
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    name="brand"
                    value="Apple"
                  />
                  <label htmlFor="apple">Apple</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    name="brand"
                    value="asus"
                  />
                  <label htmlFor="asus">Asus</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    name="brand"
                    value="hp"
                  />
                  <label htmlFor="Hp">Hp</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    value="acer"
                    name="brand"
                  />
                  <label htmlFor="acer">Acer</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    name="brand"
                    value="lenovo"
                  />
                  <label htmlFor="lenovo">Lenovo</label>
                </li>
              </ul>
            </div>
          </>
        )}
        {type === "clothing" && (
          <>
            <div>
              <p className="mb-2 font-medium">Category</p>
              <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-2">
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    value="dress"
                  />
                  <label>Dress</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    value="sport"
                  />
                  <label>Sport Wear</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    value="hangbag"
                  />
                  <label>Hangbag</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    value="shoes"
                  />
                  <label>Shoes</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    value="hat"
                  />
                  <label>Hat</label>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-medium">Brand</p>
              <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-2">
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    name="brand"
                    value="louisVuitton"
                  />
                  <label htmlFor="apple">Louis Vuitton</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    name="brand"
                    value="gucci"
                  />
                  <label htmlFor="asus">Gucci</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    name="brand"
                    value="dolceGabanna"
                  />
                  <label htmlFor="Hp">Dolce & Gabanna</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    name="brand"
                    value="adidas"
                  />
                  <label htmlFor="acer">Adidas</label>
                </li>
                <li>
                  <input
                    type="radio"
                    onChange={(e) => setBrand(e.target.value)}
                    name="brand"
                    value="nike"
                  />
                  <label htmlFor="lenovo">Nike</label>
                </li>
              </ul>
            </div>
          </>
        )}
        {/* Price range */}
        <div>
          <p className="mb-2 font-medium">Price Range</p>
          <input
            onChange={(e) => setPriceRange(e.target.value)}
            type="range"
            name="price-range"
            className="w-full  h-[0.35rem]"
            min="0"
            max="10000"
          />
        </div>
        <div className="flex justify-evenly">
          <button type="button" onClick={handleDelete}>
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
