import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-gray-900 relative">
      <div className="absolute right-1/2 translate-x-1/2 flex flex-col justify-center items-center gap-3">
        <img
          className="w-80 md:w-1/2"
          src="/public/Images/error-404 (2).png"
          alt="Page not found"
        />
        <p className="text-white sm:text-lg md:text-2xl font-semibold">
          The page your are trying to access does not exist.
        </p>
        <button
          className="border-4 text-white border-blue-900 px-5 py-2"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
