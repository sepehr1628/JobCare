import { Link } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

function JobCategories() {
  return (
    <section className="px-4 py-12 md:px-24 mb-20">
      <div className="flex justify-between flex-wrap gap-4 items-center mb-12 sm:mb-24">
        <h2 className="text-4xl font-bold">Browser by job categories</h2>
        <Link to="/" className="flex items-center gap-2 text-blue">
          Browse all jobs <HiArrowNarrowRight />
        </Link>
      </div>
      <div className="flex flex-wrap justify-between [&>div]:py-5 [&>div]:px-10 [&>div]:gap-3 gap-2 [&>div]:rounded-lg [&>div]:border [&>div]:border-gray [&>div]:bg-[#77818117] [&>div]:text-center [&>div]:min-w-72">
        <div className="flex justify-center opacity-80 items-center flex-col basis-1 flex-grow">
          <img
            src="./../../assets/Images/web-design.svg"
            alt="web design projects in JobCare platform"
            className="w-10"
          />
          <h3 className="text-xl font-semibold">Ui/Ux Design</h3>
          <p>75+ Available Vacancy</p>
        </div>
        <div className="flex justify-center opacity-80 items-center flex-col basis-1 flex-grow">
          <img
            src="./../../assets/Images/web-development.svg"
            alt="web development projects in JobCare platform"
            className="w-10"
          />
          <h3 className="text-xl font-semibold">Ui/Ux Development</h3>
          <p>75+ Available Vacancy</p>
        </div>
        <div className="flex justify-center opacity-80 items-center flex-col basis-1 flex-grow">
          <img
            src="./../../assets/Images/online-advertising.svg"
            alt="digital marketing in JobCare platform"
            className="w-10"
          />
          <h3 className="text-xl font-semibold">Digital Marketing</h3>
          <p>75+ Available Vacancy</p>
        </div>
        <div className="flex justify-center opacity-80 items-center flex-col basis-1 flex-grow">
          <img
            src="./../../assets/Images/microphone.svg"
            alt="music and audio in JobCare platform"
            className="w-10"
          />
          <h3 className="text-xl font-semibold">Music & Audio</h3>
          <p className="text-center">75+ Available Vacancy</p>
        </div>
      </div>
    </section>
  );
}

export default JobCategories;
