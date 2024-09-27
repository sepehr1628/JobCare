import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowNarrowRight } from "react-icons/hi";

// BUG
import "swiper/css";

function HighestFreelancerSection() {
  return (
    <section className="px-4 md:px-24 my-20">
      <div className="flex flex-col mb-10">
        <h2 className="text-4xl text-center">Highest Rated Freelancers</h2>
      </div>
      <div>
        <Swiper
          className="flex py-2"
          navigation={true}
          modules={[Navigation]}
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
          <SwiperSlide className="flex flex-col gap-4 border border-solid border-slate-400 rounded-md items-center p-5">
            <div>
              <img
                src="./../../assets/Images/teacher-picture.png"
                alt="freelancer picture"
                className="w-16"
              />
            </div>
            <div className="flex flex-col items-center">
              <strong>Martin Dias</strong>
              <p>Web Developer</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Create
              </button>
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Figma
              </button>
            </div>
            <div className="flex justify-between w-full flex-wrap border-t-2 mt-4 p-2 border-solid border-slate-300">
              <div className="flex flex-col">
                <b>Location:</b>
                <p>London</p>
              </div>
              <div className="flex flex-col">
                <b>Rate:</b>
                <p className="text-gray-900">$25 - $35 / hr</p>
              </div>
            </div>
            <button className="hover:bg-blue hover:text-white mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid bg-white text-blue transition-colors duration-300 flex gap-2 items-center">
              View Profile <HiArrowNarrowRight />
            </button>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-4 border border-solid border-slate-400 rounded-md items-center p-5">
            <div>
              <img
                src="./../../assets/Images/teacher-picture.png"
                alt="freelancer picture"
                className="w-16"
              />
            </div>
            <div className="flex flex-col items-center">
              <strong>Martin Dias</strong>
              <p>Web Developer</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Create
              </button>
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Figma
              </button>
            </div>
            <div className="flex justify-between w-full flex-wrap border-t-2 mt-4 p-2 border-solid border-slate-300">
              <div className="flex flex-col">
                <b>Location:</b>
                <p>London</p>
              </div>
              <div className="flex flex-col">
                <b>Rate:</b>
                <p className="text-gray-900">$25 - $35 / hr</p>
              </div>
            </div>
            <button className="hover:bg-blue hover:text-white mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid bg-white text-blue transition-colors duration-300 flex gap-2 items-center">
              View Profile <HiArrowNarrowRight />
            </button>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-4 border border-solid border-slate-400 rounded-md items-center p-5">
            <div>
              <img
                src="./../../assets/Images/teacher-picture.png"
                alt="freelancer picture"
                className="w-16"
              />
            </div>
            <div className="flex flex-col items-center">
              <strong>Martin Dias</strong>
              <p>Web Developer</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Create
              </button>
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Figma
              </button>
            </div>
            <div className="flex justify-between w-full flex-wrap border-t-2 mt-4 p-2 border-solid border-slate-300">
              <div className="flex flex-col">
                <b>Location:</b>
                <p>London</p>
              </div>
              <div className="flex flex-col">
                <b>Rate:</b>
                <p className="text-gray-900">$25 - $35 / hr</p>
              </div>
            </div>
            <button className="hover:bg-blue hover:text-white mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid bg-white text-blue transition-colors duration-300 flex gap-2 items-center">
              View Profile <HiArrowNarrowRight />
            </button>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-4 border border-solid border-slate-400 rounded-md items-center p-5">
            <div>
              <img
                src="./../../assets/Images/teacher-picture.png"
                alt="freelancer picture"
                className="w-16"
              />
            </div>
            <div className="flex flex-col items-center">
              <strong>Martin Dias</strong>
              <p>Web Developer</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Create
              </button>
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Figma
              </button>
            </div>
            <div className="flex justify-between w-full flex-wrap border-t-2 mt-4 p-2 border-solid border-slate-300">
              <div className="flex flex-col">
                <b>Location:</b>
                <p>London</p>
              </div>
              <div className="flex flex-col">
                <b>Rate:</b>
                <p className="text-gray-900">$25 - $35 / hr</p>
              </div>
            </div>
            <button className="hover:bg-blue hover:text-white mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid bg-white text-blue transition-colors duration-300 flex gap-2 items-center">
              View Profile <HiArrowNarrowRight />
            </button>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-4 border border-solid border-slate-400 rounded-md items-center p-5">
            <div>
              <img
                src="./../../assets/Images/teacher-picture.png"
                alt="freelancer picture"
                className="w-16"
              />
            </div>
            <div className="flex flex-col items-center">
              <strong>Martin Dias</strong>
              <p>Web Developer</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Create
              </button>
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Figma
              </button>
            </div>
            <div className="flex justify-between w-full flex-wrap border-t-2 mt-4 p-2 border-solid border-slate-300">
              <div className="flex flex-col">
                <b>Location:</b>
                <p>London</p>
              </div>
              <div className="flex flex-col">
                <b>Rate:</b>
                <p className="text-gray-900">$25 - $35 / hr</p>
              </div>
            </div>
            <button className="hover:bg-blue hover:text-white mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid bg-white text-blue transition-colors duration-300 flex gap-2 items-center">
              View Profile <HiArrowNarrowRight />
            </button>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-4 border border-solid border-slate-400 rounded-md items-center p-5">
            <div>
              <img
                src="./../../assets/Images/teacher-picture.png"
                alt="freelancer picture"
                className="w-16"
              />
            </div>
            <div className="flex flex-col items-center">
              <strong>Martin Dias</strong>
              <p>Web Developer</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Create
              </button>
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Figma
              </button>
            </div>
            <div className="flex justify-between w-full flex-wrap border-t-2 mt-4 p-2 border-solid border-slate-300">
              <div className="flex flex-col">
                <b>Location:</b>
                <p>London</p>
              </div>
              <div className="flex flex-col">
                <b>Rate:</b>
                <p className="text-gray-900">$25 - $35 / hr</p>
              </div>
            </div>
            <button className="hover:bg-blue hover:text-white mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid bg-white text-blue transition-colors duration-300 flex gap-2 items-center">
              View Profile <HiArrowNarrowRight />
            </button>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-4 border border-solid border-slate-400 rounded-md items-center p-5">
            <div>
              <img
                src="./../../assets/Images/teacher-picture.png"
                alt="freelancer picture"
                className="w-16"
              />
            </div>
            <div className="flex flex-col items-center">
              <strong>Martin Dias</strong>
              <p>Web Developer</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Create
              </button>
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Figma
              </button>
            </div>
            <div className="flex justify-between w-full flex-wrap border-t-2 mt-4 p-2 border-solid border-slate-300">
              <div className="flex flex-col">
                <b>Location:</b>
                <p>London</p>
              </div>
              <div className="flex flex-col">
                <b>Rate:</b>
                <p className="text-gray-900">$25 - $35 / hr</p>
              </div>
            </div>
            <button className="hover:bg-blue hover:text-white mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid bg-white text-blue transition-colors duration-300 flex gap-2 items-center">
              View Profile <HiArrowNarrowRight />
            </button>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col gap-4 border border-solid border-slate-400 rounded-md items-center p-5">
            <div>
              <img
                src="./../../assets/Images/teacher-picture.png"
                alt="freelancer picture"
                className="w-16"
              />
            </div>
            <div className="flex flex-col items-center">
              <strong>Martin Dias</strong>
              <p>Web Developer</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <p>Star Component</p>
              <span>4.5</span>
              <p className="text-[0.65rem]">(2 Reviews)</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Create
              </button>
              <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
                Figma
              </button>
            </div>
            <div className="flex justify-between w-full flex-wrap border-t-2 mt-4 p-2 border-solid border-slate-300">
              <div className="flex flex-col">
                <b>Location:</b>
                <p>London</p>
              </div>
              <div className="flex flex-col">
                <b>Rate:</b>
                <p className="text-gray-900">$25 - $35 / hr</p>
              </div>
            </div>
            <button className="hover:bg-blue hover:text-white mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid bg-white text-blue transition-colors duration-300 flex gap-2 items-center">
              View Profile <HiArrowNarrowRight />
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HighestFreelancerSection;
