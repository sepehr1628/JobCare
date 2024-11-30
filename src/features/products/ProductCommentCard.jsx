import { useState } from "react";
import StarRating from "../../ui/StarRating";
import Spinner from "../../ui/Spinner";

function ProductCommentCard() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await simulateFormSubmission();
      setDescription();
      setTitle();
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const simulateFormSubmission = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  if (isSubmitting) return <Spinner fullPage={true} />;
  return (
    <>
      <b className="my-6 text-lg block">Add Your Comment</b>
      <StarRating size="24" />
      <form
        onSubmit={handleSubmit}
        className="flex items-end flex-col gap-4 my-3 [&>*]:active:border-stone-400 [&>*]:border [&>*]:border-stone-400 [&>*]:border-solid"
      >
        <input
          className="w-full py-1 px-3 rounded-sm"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full py-1 px-3 rounded-sm"
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          disabled={isSubmitting}
          className=" bg-green-800 px-6 py-2 rounded-full text-stone-200"
        >
          Send Comment
        </button>
        {isSubmitting && <Spinner fullPage={true} />}
      </form>
    </>
  );
}

export default ProductCommentCard;
