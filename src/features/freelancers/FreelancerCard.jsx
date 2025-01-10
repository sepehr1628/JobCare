import { HiArrowNarrowRight } from "react-icons/hi";
import { handleRate } from "../../services/handleAverageRate";
function FreelancerCard({ item, freelancer }) {
  const { rateAverage, reviewNum } = handleRate(item?.rate || freelancer.rate);
  return (
    <div className="p-4 w-full">
      <div>
        <img
          src={item?.profile_image_url || freelancer.profile_image_url}
          alt={item?.name || freelancer.name}
          className="w-20 m-auto rounded-full h-20 object-contain"
        />
      </div>
      <div className="flex flex-col items-center my-2 dark:text-gray">
        <strong>{item?.name || freelancer.name}</strong>
        <p>Web Developer</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center text-xs">
        <span>
          <img
            src="/Images/star.svg"
            alt="star rating number"
            className="w-3"
          />
        </span>
        <span>{rateAverage.toFixed(1)}</span>
        <p className="text-[0.65rem]">({reviewNum} Reviews)</p>
      </div>
      <div className="flex items-center justify-center gap-2 my-2">
        <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
          Create
        </button>
        <button className="bg-blue-100 text-black text-sm md:m-0 px-3 py-1 md:px-4 rounded-full flex gap-2 items-center">
          Figma
        </button>
      </div>
      <div className="flex justify-between w-full flex-wrap border-t-2 mt-4 p-2 border-solid border-slate-300 dark:text-gray">
        <div className="flex flex-col">
          <b>Location:</b>
          <p>{item?.location_city || freelancer.location_city}</p>
        </div>
        <div className="flex flex-col">
          <b>Rate:</b>
          <p>$25 - $35 / hr</p>
        </div>
      </div>
      <button className="hover:bg-blue mx-auto hover:text-white mt-4 px-4 py-2 md:px-4 xl:px-10 rounded-full border border-blue border-solid bg-white text-blue transition-colors duration-300 flex gap-2 items-center text-xs md:text-sm dark:text-gray dark:bg-blue-900">
        View Profile <HiArrowNarrowRight />
      </button>
    </div>
  );
}

export default FreelancerCard;
