import useObserver from "@/services/useObserver";

function ReportBarSection() {
  const [ref, isObserved] = useObserver(0.9);
  return (
    <section className="bg-gray-900 dark:bg-[#bfbfbf] flex flex-col gap-6 md:gap-0 md:flex-row items-center px-4 py-9 md:px-24 dark:[&>*]:text-gray-900">
      <h4
        ref={ref}
        className={`basis-1/3 text-3xl lg-[2rem] leading-10 md:leading-[2.7rem] xl:text-[2.3rem] text-white p-4 animate__animated ${
          isObserved ? "animate__backInLeft" : ""
        }`}
      >
        People productivity performance
      </h4>
      <div className="flex justify-between flex-col gap-8 items-center basis-2/3 w-full sm:gap-0 sm:flex-row [&>div]:flex [&>div]:gap-4 [&>div]:flex-col [&>div]:items-center dark:[&>*]:text-gray-900">
        <div
          // ref={ref1}
          className={`flex-grow animate__animated ${
            isObserved ? "animate__backInRight animate__delay-3s" : ""
          }`}
        >
          <span className="text-gray text-xs">JOBS</span>
          <span className="text-white text-3xl">+278K</span>
        </div>
        <div
          // ref={ref2}
          className={`flex-grow animate__animated ${
            isObserved ? "animate__backInRight animate__delay-4s" : ""
          }`}
        >
          <span className="text-gray text-xs">STARTUPS</span>
          <span className="text-white text-3xl">+60K</span>
        </div>
        <div
          // ref={ref3}
          className={`flex-grow animate__animated ${
            isObserved ? "animate__backInRight animate__delay-5s" : ""
          }`}
        >
          <span className="text-gray text-xs">TALENTS</span>
          <span className="text-white text-3xl">+678K</span>
        </div>
      </div>
    </section>
  );
}

export default ReportBarSection;
