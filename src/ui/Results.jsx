import { useEffect, useState } from "react";

function Results() {
  const [sort, setSort] = useState();
  const [render, setRender] = useState();

  useEffect(
    function () {
      async function sortSystem() {
        try {
          const res = await fetch(`db-endpoint/${sort}`);
          const data = await res.json();
          setRender(data);
        } catch (error) {
          console.log(error);
        }
      }
      sortSystem();
    },
    [sort]
  );

  return (
    <div className="flex flex-col  col-span-4">
      <header className="flex justify-between mb-5">
        <p>670 Results from "Asus"</p>
        <select
          className="border-slate-300 border border-solid p-2 w-60 rounded-md"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort By (Default)</option>
          <option value="high-price">Highest Price</option>
          <option value="lowest-price">Lowest Price</option>
          <option value="CPU">CPU</option>
          <option value="GPU">GPU</option>
        </select>
      </header>
      <div className="grid grid-cols-3 grid-rows-3 gap-5">
        {/* {render.forEach((item) => (
          <ProductCard />
        ))} */}
        <div className="p-5 bg-blue">product</div>
        <div className="p-5 bg-blue">product</div>
        <div className="p-5 bg-blue">product</div>
        <div className="p-5 bg-blue">product</div>
        <div className="p-5 bg-blue">product</div>
        <div className="p-5 bg-blue">product</div>
        <div className="p-5 bg-blue">product</div>
        <div className="p-5 bg-blue">product</div>
        <div className="p-5 bg-blue">product</div>
      </div>
    </div>
  );
}

export default Results;
