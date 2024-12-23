import { useState } from "react";
import StarRating from "@/components/UI/StarRating";
import ProductCardCommentForm from "@/components/forms/ProductCardCommentForm";

function ProductCommentCard() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isSubmitting) return "Loading...";
  return (
    <>
      <b className="my-6 text-lg block">Add Your Comment</b>
      <StarRating size="24" />
      <ProductCardCommentForm
        setSubmit={setIsSubmitting}
        isSubmitting={isSubmitting}
      />
    </>
  );
}

export default ProductCommentCard;
