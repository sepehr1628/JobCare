import { Link } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";
import useObserver from "@/services/useObserver";

function JobCategories() {
  const [ref, isObserved] = useObserver(0.1);
  const [ref1, isObserved1] = useObserver(0.1);
  const [ref2, isObserved2] = useObserver(0.1);
  const [ref3, isObserved3] = useObserver(0.1);
  return (
    <section className="px-4 py-20 md:px-24 dark:bg-[#293034b0]">
      <div className="flex justify-between flex-wrap gap-4 items-center mb-12 sm:mb-24">
        <h2 className="text-3xl lg:text[2rem] xl:text-[2.3rem] font-bold dark:text-gray">
          Browser by job categories
        </h2>
        <Link to="/" className="flex items-center gap-2 text-blue">
          Browse all jobs <HiArrowNarrowRight />
        </Link>
      </div>
      <div className="flex flex-wrap justify-between [&>div]:py-5 [&>div]:px-10 [&>div]:gap-3 gap-2 [&>div]:rounded-lg [&>div]:border [&>div]:border-gray [&>div]:bg-[#77818117] [&>div]:text-center [&>div]:min-w-72 dark:[&>*]:text-gray dark:[&>div]:border-gray-900 dark:[&>div]:bg-zinc-800">
        <div
          ref={ref}
          className={`flex justify-center opacity-80 items-center flex-col basis-1 flex-grow  animate__animated ${
            isObserved ? "animate__backInUp" : ""
          }`}
        >
          <img
            src="/Images/web-design.svg"
            alt="web design projects in JobCare platform"
            className="w-10"
          />
          <h3 className="text-xl font-semibold">Ui/Ux Design</h3>
          <p>75+ Available Vacancy</p>
        </div>
        <div
          ref={ref1}
          className={`flex justify-center opacity-80 items-center flex-col basis-1 flex-grow  animate__animated ${
            isObserved1 ? "animate__backInUp animate__delay-2s" : ""
          }`}
        >
          <img
            src="/Images/web-development.svg"
            alt="web development projects in JobCare platform"
            className="w-10"
          />
          <h3 className="text-xl font-semibold">Ui/Ux Development</h3>
          <p>75+ Available Vacancy</p>
        </div>
        <div
          ref={ref2}
          className={`flex justify-center opacity-80 items-center flex-col basis-1 flex-grow  animate__animated ${
            isObserved2 ? "animate__backInUp animate__delay-3s" : ""
          }`}
        >
          <img
            src="/Images/online-advertising.svg"
            alt="digital marketing in JobCare platform"
            className="w-10"
          />
          <h3 className="text-xl font-semibold">Digital Marketing</h3>
          <p>75+ Available Vacancy</p>
        </div>
        <div
          ref={ref3}
          className={`flex justify-center opacity-80 items-center flex-col basis-1 flex-grow  animate__animated ${
            isObserved3 ? "animate__backInUp animate__delay-4s" : ""
          }`}
        >
          <img
            src="/Images/microphone.svg"
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
