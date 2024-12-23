import { Link } from "react-router-dom";
import { handleRate } from "../../services/handleAverageRate";

function ProductCard({ item }) {
  const { rateAverage } = handleRate(item.rate);

  return (
    <div className="">
      <Link to={`/market/${item.id}`}>
        <div>
          <img
            src={item.imgUrl}
            className="rounded-t-md w-full h-40 sm:h-48 border-b border-solid border-gray-400 object-contain"
            alt={item.name}
          />
        </div>
      </Link>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between text-sm">
          <b>${item.price}</b>
          <div className="flex gap-2 rounded-full bg-[#FAEAB9] flex-shrink-0 flex-grow-0 text-xs p-1 text-[#C69709]">
            <img
              src="./../../assets/Images/star.svg"
              alt={`${item.name} rating number`}
              className="w-3"
            />
            {rateAverage.toFixed(1)}
          </div>
        </div>

        <p className="text-lg w-auto whitespace-nowrap overflow-hidden text-ellipsis">
          {item.name}
        </p>

        <p className="truncated_text">{item.description}</p>

        <button
          // disabled={!availablity}
          className={`${
            item.isAvailable === true
              ? "bg-blue text-white hover:bg-white hover:text-blue"
              : "bg-white"
          } transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid flex items-center justify-center gap-2`}
        >
          {item.isAvailable === true ? "Add To Cart" : "Out of stock"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
