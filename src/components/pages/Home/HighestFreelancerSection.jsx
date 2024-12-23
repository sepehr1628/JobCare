import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// BUG
import "swiper/css";
import FreelancerCard from "@/features/freelancers/FreelancerCard";

function HighestFreelancerSection({ freelancers, error }) {
  return (
    <section className="px-4 md:px-24 py-20 dark:bg-[#293034b0]">
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
          {freelancers?.map((freelancer, i) => (
            <SwiperSlide
              className="flex flex-col gap-4 border border-solid border-slate-400 rounded-md items-center p-5 dark:bg-gray-900 max-w-[20rem]"
              key={i}
            >
              <FreelancerCard freelancer={freelancer} />
            </SwiperSlide>
          ))}
        </Swiper>
        {error && error.message}
      </div>
    </section>
  );
}

export default HighestFreelancerSection;
