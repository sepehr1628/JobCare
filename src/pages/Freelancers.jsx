import Filter from "../features/products/Filter";
import Results from "../features/products/Results";
import BreadCrumb from "../ui/BreadCrumb";

function Freelancers() {
  return (
    <section>
      <BreadCrumb />
      <div className="flex xlg:grid xlg:grid-cols-5 xlg:gap-5 px-8 md:px-24 my-10 md:my-24">
        <Filter />
        <Results />
      </div>
    </section>
  );
}

export default Freelancers;
