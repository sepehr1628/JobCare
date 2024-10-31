import { Link } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";

// BUG
import "swiper/css";

function TrendingserviceSection() {
  return (
    <section className="px-4 py-12 md:px-24 mb-20">
      <div className="flex justify-between flex-wrap gap-4 items-center mb-12 sm:mb-16">
        <h2 className="text-4xl font-bold">Trending Services</h2>
        <Link to="/" className="flex items-center gap-2 text-blue">
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
        <SwiperSlide className="flex flex-col shadow-lg">
          <div>
            <img
              src="./../../assets/Images/course-poster.png"
              alt="course description"
            />
          </div>
<<<<<<< HEAD
          <div className="flex p-2 flex-col">
            <p>Development & IT</p>
            <h3>Web development, with HTML, CSS, JavaScript and PHP</h3>
            <div className="flex gap-2">
              <p>Star Component</p>
              <span>4.5</span>
              <p>(2 Reviews)</p>
=======
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
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
            </div>
            <div className="flex justify-between items-center p-2 border-t border-gray border-solid">
              <div className="flex items-center gap-2">
                <img
                  src="./../../assets/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
<<<<<<< HEAD
              <p>25$</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg">
          <div>
            <img
              src="./../../assets/Images/course-poster.png"
              alt="course description"
            />
          </div>
          <div className="flex flex-col p-2">
            <p>Development & IT</p>
            <h3>Web development, with HTML, CSS, JavaScript and PHP</h3>
            <div className="flex gap-2">
              <p>Star Component</p>
              <span>4.5</span>
              <p>(2 Reviews)</p>
            </div>
            <div className="flex justify-between items-center p-2 border-t border-gray border-solid">
              <div className="flex items-center gap-2">
                <img
                  src="./../../assets/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <p>25$</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg">
          <div>
            <img
              src="./../../assets/Images/course-poster.png"
              alt="course description"
            />
          </div>
          <div className="flex p-2 flex-col">
            <p>Development & IT</p>
            <h3>Web development, with HTML, CSS, JavaScript and PHP</h3>
            <div className="flex gap-2">
              <p>Star Component</p>
              <span>4.5</span>
              <p>(2 Reviews)</p>
            </div>
            <div className="flex justify-between items-center p-2 border-t border-gray border-solid">
              <div className="flex items-center gap-2">
                <img
                  src="./../../assets/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <p>25$</p>
=======
              <b>25$</b>
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg">
          <div>
            <img
              src="./../../assets/Images/course-poster.png"
              alt="course description"
            />
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
<<<<<<< HEAD
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
=======
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
                  src="./../../assets/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <b>25$</b>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg">
          <div>
            <img
              src="./../../assets/Images/course-poster.png"
              alt="course description"
            />
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
                  src="./../../assets/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <b>25$</b>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg">
          <div>
            <img
              src="./../../assets/Images/course-poster.png"
              alt="course description"
            />
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
                  src="./../../assets/Images/teacher-picture.png"
                  alt="course teacher picture"
                  className="w-10"
                />
                <p>Martin Dias</p>
              </div>
              <b>25$</b>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col shadow-lg">
          <div>
            <img
              src="./../../assets/Images/course-poster.png"
              alt="course description"
            />
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
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex justify-between items-center p-2 border-t border-gray border-solid">
              <div className="flex items-center gap-2">
                <img
                  src="./../../assets/Images/teacher-picture.png"
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
