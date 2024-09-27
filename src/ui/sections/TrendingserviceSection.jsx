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
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
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
