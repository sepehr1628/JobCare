import { HiArrowNarrowRight } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)

function MarketplaceSection() {
  return (
    <section className="px-4 flex flex-wrap items-center justify-center md:px-24 min-w-96">
      <div className="hidden xlg:w-1/2 xlg:flex xlg:justify-center">
        <img
          className="xlg:h-[400px]"
          src="./../../assets/Images/image 26.png"
          alt="Join World's Best Marketplace for Workers"
        />
      </div>
      <div className="xlg:w-1/2 p-4 flex flex-col gap-7 xlg:gap-0 justify-between min-w-96 xlg:h-[400px]">
        <h2 className="text-4xl font-semibold">
          {/* BUG */}
          {"Join World's Best Marketplace for Workers"}
        </h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <ul className="flex flex-col gap-2 list-none [&>li]:flex [&>li]:gap-2 [&>li]:items-center">
          <li>
            <FaCheck className="text-blue" />
            Last Education of Bachelor Degree
          </li>
          <li>
            <FaCheck className="text-blue" />
            More Than 15 Years Experience
          </li>
          <li>
            <FaCheck className="text-blue" />
            12 Education Award Winning
          </li>
        </ul>
<<<<<<< HEAD
        <button className="bg-blue text-white mt-4 md:m-0 px-3 py-1 w-fit md:px-10 lg:py-2 rounded-full flex gap-2 items-center border border-blue border-solid hover:bg-white hover:text-blue transition-colors duration-300">
          See Products <HiArrowNarrowRight />
        </button>
=======
        <Link
          to="./market"
          className="bg-blue text-white mt-4 md:m-0 px-3 py-1 w-fit md:px-10 lg:py-2 rounded-full flex gap-2 items-center border border-blue border-solid hover:bg-white hover:text-blue transition-colors duration-300"
        >
          See Products <HiArrowNarrowRight />
        </Link>
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
      </div>
    </section>
  );
}

export default MarketplaceSection;
