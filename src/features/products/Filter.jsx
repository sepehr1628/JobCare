<<<<<<< HEAD
import FilterListItem from "./FilterListItem";

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/master
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

<<<<<<< HEAD
=======
=======
import { useState } from "react";
import { useNavigate } from "react-router";

function Filter({ showFilter, filters, setFilters, setGetURL }) {
  const [priceRange, setPriceRange] = useState();
  const navigate = useNavigate();

  const handleBrandChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      brand: {
        ...prevFilters.brand,
        [e.target.name]: e.target.checked,
      },
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    let searchParams = new URLSearchParams();
    if (priceRange) searchParams.append("price", `${priceRange}`);
    if (filters.brand.apple) searchParams.append("brand", "apple");
    if (filters.brand.asus) searchParams.append("brand", "asus");
    if (filters.brand.acer) searchParams.append("brand", "acer");
    if (filters.brand.hp) searchParams.append("brand", "hp");
    if (filters.brand.lenovo) searchParams.append("brand", "lenovo");
    const url = `?${searchParams.toString()}`;
    console.log(url);
    setGetURL(url);
    if (url !== window.location.search) navigate(url);
  }
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
=======
import { useState } from "react";
import FilterListItem from "./FilterListItem";

function Filter({ setShowFilter, showFilter, onConfirm, loading }) {
  const [priceRange, setPriceRange] = useState();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onConfirm({
      brand,
      category,
    });
  }

  function clearFilter() {
    setCategory("");
    setBrand("");
  }

  function handleDelete() {
    // e.preventDefault();
    clearFilter();
    onConfirm({});
  }

>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
  return (
    <aside
      className={`${
        showFilter
          ? "translate-x-0 fixed left-0 right-0 top-0 bottom-0 flex flex-col w-full"
          : "hidden -translate-x-full"
<<<<<<< HEAD
      } xlg:translate-x-0 xlg:block border h-fit bg-white border-solid z-40 border-slate-400 rounded-md p-4 [&>div]:my-4`}
    >
      <b className="text-lg">Filter</b>

=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      } xlg:translate-x-0 xlg:block border bg-white border-solid z-40 border-slate-400 rounded-md p-4 [&>div]:my-4`}
    >
      <b className="text-lg">Filter</b>
=======
      } xlg:translate-x-0 xlg:block border bg-white border-solid z-40 border-slate-400 h-fit rounded-md p-8`}
    >
      <div className="flex items-center justify-between">
        <b className="text-lg">Filter</b>
        <span
          onClick={() => setShowFilter(false)}
          className="text-4xl block xlg:hidden cursor-pointer"
        >
          &times;
        </span>
      </div>
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
      <form onSubmit={handleSubmit}>
        {/* Brand */}
        <div>
          <p className="mb-2 font-medium">Brand</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-2">
            <li>
              <input
                onChange={handleBrandChange}
                defaultChecked={filters.brand.apple}
                type="checkbox"
                id="apple"
                name="apple"
              />
              <label htmlFor="apple">Apple</label>
            </li>
            <li>
              <input
                onChange={handleBrandChange}
                defaultChecked={filters.brand.asus}
                type="checkbox"
                id="asus"
                name="asus"
              />
              <label htmlFor="asus">Asus</label>
            </li>
            <li>
              <input
                onChange={handleBrandChange}
                defaultChecked={filters.brand.asus}
                type="checkbox"
                id="Hp"
                name="hp"
              />
              <label htmlFor="Hp">Hp</label>
            </li>
            <li>
              <input
                onChange={handleBrandChange}
                defaultChecked={filters.brand.asus}
                type="checkbox"
                id="acer"
                name="acer"
              />
              <label htmlFor="acer">Acer</label>
            </li>
            <li>
              <input
                onChange={handleBrandChange}
                defaultChecked={filters.brand.asus}
                type="checkbox"
                id="lenovo"
                name="lenovo"
              />
              <label htmlFor="lenovo">Lenovo</label>
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
                value={category}
=======
                value="mobile"
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
            </li>
          </ul>
        </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
=======
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
        {/* Price range */}
        <div>
          <p className="mb-2 font-medium">Price Range</p>
          <input
            onChange={(e) => setPriceRange(e.target.value)}
            type="range"
            name="price-range"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
            className="w-full outline-none h-[0.35rem]"
            min="0"
            max="5000"
          />
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="flex justify-evenly">
          <button type="button">Delete</button>
          <button type="submit">Filter</button>
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
=======

>>>>>>> origin/master
        <div className="flex justify-evenly">
          <button type="reset" onClick={handleDelete}>
            Delete
          </button>
          <button type="submit" disabled={loading}>
            Filter
          </button>
<<<<<<< HEAD
=======
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
        </div>
      </form>
    </aside>
  );
}
<<<<<<< HEAD
=======

>>>>>>> origin/master
export default Filter;
