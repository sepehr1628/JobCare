import Filter from "../features/products/Filter";
import BreadCrumb from "../ui/BreadCrumb";
import Results from "../ui/Results";

function Market() {
  return (
    <section>
      <BreadCrumb />
      <div className="grid grid-cols-5 gap-5 px-4 md:px-24 my-24">
        <Filter />
        <Results />
      </div>
    </section>
  );
}

export default Market;
