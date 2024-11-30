<<<<<<< HEAD
import { FaCheck } from "react-icons/fa";

function ProductDetailCard({ product }) {
  return (
    <div className="my-10">
      <p>{product?.description}</p>
      <ul className="flex flex-col gap-2 list-none [&>li]:flex [&>li]:gap-2 [&>li]:items-center my-5">
        {product?.details.split(".").map((detail, i) => (
          <li key={product?.id + i}>
            <FaCheck className="text-blue" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
=======
function ProductDetailCard() {
  return <div>Product Detail</div>;
>>>>>>> origin/master
}

export default ProductDetailCard;
