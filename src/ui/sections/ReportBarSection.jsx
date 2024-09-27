function ReportBarSection() {
  return (
    <section className="bg-gray-900 flex flex-col gap-6 md:gap-0 md:flex-row items-center px-4 py-9 md:px-24">
      <h4 className="basis-1/3 text-3xl text-white p-4">
        People productivity performance
      </h4>
      <div className="flex justify-between flex-col gap-8 items-center basis-2/3 w-full sm:gap-0 sm:flex-row [&>div]:flex [&>div]:gap-4 [&>div]:flex-col [&>div]:items-center">
        <div className="flex-grow">
          <span className="text-gray text-xs">JOBS</span>
          <span className="text-white text-3xl">+278K</span>
        </div>
        <div className="flex-grow">
          <span className="text-gray text-xs">STARTUPS</span>
          <span className="text-white text-3xl">+60K</span>
        </div>
        <div className="flex-grow">
          <span className="text-gray text-xs">TALENTS</span>
          <span className="text-white text-3xl">+678K</span>
        </div>
      </div>
    </section>
  );
}

export default ReportBarSection;
