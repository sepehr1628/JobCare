import { LiaShoppingBagSolid } from "react-icons/lia";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)

function ProductCard({ product }) {
  return (
    <div>
<<<<<<< HEAD
      <div>
        <img
          src={product.imgURL}
          className="rounded-t-md w-full h-48 border-b border-solid border-gray-400"
          alt={product.name}
        />
      </div>
<<<<<<< HEAD
      <div className="flex flex-col gap-2 p-2 md:p-4">
=======
      <div className="flex flex-col gap-2 md:gap-4 p-2 md:p-4">
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
        <div className="flex items-center justify-between text-sm">
          <b>${product.price}</b>
          <div className="flex gap-2 rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
=======
      <Link to={`/market/${product.id}`}>
        <div>
          <img
            src={product.imgURL}
            className="rounded-t-md w-full h-40 sm:h-48 border-b border-solid border-gray-400"
            alt={product.name}
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2 md:gap-4 p-2 md:p-4">
        <div className="flex items-center justify-between text-sm">
          <b>${product.price}</b>
          <div className="flex gap-1 items-center rounded-full bg-[#FAEAB9] text-xs p-1 text-[#C69709]">
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
            <img
              src="./../../assets/Images/star.svg"
              alt={`${product.name} rating number`}
              className="w-3"
            />
            {product.rate}
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <p className="text-lg w-auto whitespace-nowrap overflow-hidden text-ellipsis">
          {product.name}
        </p>
=======
        <p className="text-lg h-14">{product.name}</p>
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
        <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 md:px-10 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
=======
        <p className="text-lg h-14">{product.name}</p>
        <button className="bg-blue text-white transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 lg:py-2 rounded-full border w-4/5 m-auto border-blue border-solid hover:bg-white hover:text-blue flex items-center justify-center gap-2">
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
          Add To Cart <LiaShoppingBagSolid />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
