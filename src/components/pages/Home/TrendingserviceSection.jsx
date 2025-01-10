import { Link } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";

// BUG
import "swiper/css";

function TrendingserviceSection() {
  return (
    <section className="px-4 py-5 sm:py-12 md:px-24 md:pb-20 dark:bg-[#293034b0] ">
      <div className="flex justify-between flex-wrap gap-4 items-center mb-12 sm:mb-16">
        <h2 className="text-4xl font-bold dark:text-gray">Trending Services</h2>
        <Link
          to="/projects"
          className="flex items-center gap-2 text-blue dark:text-gray"
        >
          Browse All services <HiArrowNarrowRight />
        </Link>
      </div>

      <Swiper
        className="flex py-2"
        autoplay={true}
        spaceBetween={20}
        effect="Flip"
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="flex flex-col shadow-lg dark:bg-[#9a9a9a]">
          <div>
            <img src="/Images/course-poster.png" alt="course description" />
          </div>
          <div className="flex flex-col gap-3 py-2 px-3">
            <p className="text-slate-700 text-sm font-medium">
              Development & IT
            </p>
            <h3 className="leading-5">
              <strong>
                Web development, with HTML, CSS, JavaScript and PHP
              </strong>
            </h3>
            <div className="flex flex-wrap gap-2 items-center text-xs">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#eeee00"
                    width="25"
                    height="25"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span>4.5</span>
              </div>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex justify-between items-center p-2 border-t border-gray border-solid">
              <div className="flex items-center gap-2">
                <img
                  src="/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <b>25$</b>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg dark:bg-[#9a9a9a]">
          <div>
            <img src="/Images/course-poster.png" alt="course description" />
          </div>
          <div className="flex flex-col gap-3 py-2 px-3">
            <p className="text-slate-700 text-sm font-medium">
              Development & IT
            </p>
            <h3 className="leading-5">
              <strong>
                Web development, with HTML, CSS, JavaScript and PHP
              </strong>
            </h3>
            <div className="flex flex-wrap gap-2 items-center text-xs">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#eeee00"
                    width="25"
                    height="25"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span>4.5</span>
              </div>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex justify-between items-center p-2 border-t border-gray border-solid">
              <div className="flex items-center gap-2">
                <img
                  src="/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <b>25$</b>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg dark:bg-[#9a9a9a]">
          <div>
            <img src="/Images/course-poster.png" alt="course description" />
          </div>
          <div className="flex flex-col gap-3 py-2 px-3">
            <p className="text-slate-700 text-sm font-medium">
              Development & IT
            </p>
            <h3 className="leading-5">
              <strong>
                Web development, with HTML, CSS, JavaScript and PHP
              </strong>
            </h3>
            <div className="flex flex-wrap gap-2 items-center text-xs">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#eeee00"
                    width="25"
                    height="25"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span>4.5</span>
              </div>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex justify-between items-center p-2 border-t border-gray border-solid">
              <div className="flex items-center gap-2">
                <img
                  src="/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <b>25$</b>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg dark:bg-[#9a9a9a]">
          <div>
            <img src="/Images/course-poster.png" alt="course description" />
          </div>
          <div className="flex flex-col gap-3 py-2 px-3">
            <p className="text-slate-700 text-sm font-medium">
              Development & IT
            </p>
            <h3 className="leading-5">
              <strong>
                Web development, with HTML, CSS, JavaScript and PHP
              </strong>
            </h3>
            <div className="flex flex-wrap gap-2 items-center text-xs">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#eeee00"
                    width="25"
                    height="25"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span>4.5</span>
              </div>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex justify-between items-center p-2 border-t border-gray border-solid">
              <div className="flex items-center gap-2">
                <img
                  src="/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <b>25$</b>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg dark:bg-[#9a9a9a]">
          <div>
            <img src="/Images/course-poster.png" alt="course description" />
          </div>
          <div className="flex flex-col gap-3 py-2 px-3">
            <p className="text-slate-700 text-sm font-medium">
              Development & IT
            </p>
            <h3 className="leading-5">
              <strong>
                Web development, with HTML, CSS, JavaScript and PHP
              </strong>
            </h3>
            <div className="flex flex-wrap gap-2 items-center text-xs">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#eeee00"
                    width="25"
                    height="25"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span>4.5</span>
              </div>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex justify-between items-center p-2 border-t border-gray border-solid">
              <div className="flex items-center gap-2">
                <img
                  src="/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <b>25$</b>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default TrendingserviceSection;
