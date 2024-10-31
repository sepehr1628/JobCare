<<<<<<< HEAD
function Spinner() {
  return (
    <div className="flex justify-center items-center h-full w-full border-none">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-blue"
=======
function Spinner({ fullPage = false }) {
  return (
    <div
      className={`flex justify-center items-center h-full my-36 w-full border-none ${
        fullPage &&
        "absolute top-0 bottom-0 right-0 left-0 z-[10000] backdrop-blur-sm"
      }`}
    >
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] bg-white text-blue"
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
        role="status"
      >
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-rect(0,0,0,0)">
          Loading...
        </span>
      </div>
    </div>
  );
}

export default Spinner;
