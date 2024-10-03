import { useLocation, useNavigate } from "react-router";

function Filter({ showFilter, filters, setFilters }) {
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

  let searchParams = new URLSearchParams();
  function handleSubmit(e) {
    e.preventDefault();
    if (filters.apple) searchParams.append("brand", "apple");
    if (filters.asus) searchParams.append("brand", "asus");
    if (filters.acer) searchParams.append("brand", "acer");
    if (filters.hp) searchParams.append("brand", "hp");
    if (filters.lenovo) searchParams.append("brand", "lenovo");
    navigate({
      pathname: window.location.pathname,
      search: searchParams.toString(),
    });
    console.log(searchParams);
  }
  return (
    <aside
      className={`${
        showFilter
          ? "translate-x-0 fixed left-0 right-0 top-0 bottom-0 flex flex-col w-full"
          : "hidden -translate-x-full"
      } xlg:translate-x-0 xlg:block border bg-white border-solid z-40 border-slate-400 rounded-md p-4 [&>div]:my-4`}
    >
      <b className="text-lg">Filter</b>
      <form onSubmit={handleSubmit}>
        {/* Brand */}
        <div>
          <p className="mb-2 font-medium">Brand</p>
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
            </li>
          </ul>
        </div>

        {/* Proccessor */}
        {/* <div>
        <p className="mb-2 font-medium">Proccessor</p>
        <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-2">
          <li>
            <input type="checkbox" id="apple" />
            <label htmlFor="apple">Apple</label>
          </li>
          <li>
            <input type="checkbox" id="asus" />
            <label htmlFor="asus">Asus</label>
          </li>
          <li>
            <input type="checkbox" id="Hp" />
            <label htmlFor="Hp">Hp</label>
          </li>
          <li>
            <input type="checkbox" id="acer" />
            <label htmlFor="acer">Acer</label>
          </li>
          <li>
            <input type="checkbox" id="lenovo" />
            <label htmlFor="lenovo">Lenovo</label>
          </li>
        </ul>
      </div> */}

        {/* Type */}
        {/* <div>
        <p className="mb-2 font-medium">Type</p>
        <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-2">
          <li>
            <input type="checkbox" id="apple" />
            <label htmlFor="apple">Apple</label>
          </li>
          <li>
            <input type="checkbox" id="asus" />
            <label htmlFor="asus">Asus</label>
          </li>
          <li>
            <input type="checkbox" id="Hp" />
            <label htmlFor="Hp">Hp</label>
          </li>
          <li>
            <input type="checkbox" id="acer" />
            <label htmlFor="acer">Acer</label>
          </li>
          <li>
            <input type="checkbox" id="lenovo" />
            <label htmlFor="lenovo">Lenovo</label>
          </li>
        </ul>
      </div> */}

        {/* Price range */}
        <div>
          <p className="mb-2 font-medium">Price Range</p>
          <input
            type="range"
            name="price-range"
            className="w-full outline-none h-[0.35rem]"
            min="0"
            max="5000"
          />
        </div>
        <div className="flex justify-evenly">
          <button type="button">Delete</button>
        </div>
        <button type="submit">Filter</button>
      </form>
    </aside>
  );
}

export default Filter;

// const [brands, setBrands] = useState({
//   apple: false,
//   lenovo: false,
//   hp: false,
//   asus: false,
//   acer: false,
// });
// const handleBrandChange = (event) => {
//   setBrands((prevBrands) => ({
//     ...prevBrands,
//     [event.target.name]: event.target.checked,
//   }));
// };

// const filterProducts = () => {
//   data.filter((product) => product.brand === brands.apple);
// };

// function handleDelete() {
//   setFilteredProducts(null);
// }
