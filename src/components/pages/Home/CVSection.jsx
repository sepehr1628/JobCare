import { HiArrowNarrowRight } from "react-icons/hi";

function CVSection() {
  return (
    <section className="px-4 py-6 sm:py-16 md:px-24 md:p-24 gap-4 flex items-center flex-wrap lg:flex-nowrap dark:bg-[#293034b0]">
      <div className="md:p-2 xlg:w-5/12 flex-grow flex justify-center">
        <img
          src="/Images/cv-great-employers.png"
          alt="put your CV in front of the great
            for employers to see"
          className="w-96 md:max-w-none"
        />
      </div>
      <div className="md:px-8 flex flex-col justify-evenly items-start gap-2 lg:gap-3 xl:gap-9">
        <h2 className="text-3xl font-bold leading-snug lg:text-[2rem] xl:text-[2.3rem] flex-wrap text-start dark:text-white">
          Put your CV in front of the great for employers to see
        </h2>
        <p className="text-justify dark:text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
          vitae congue mauris rhoncus aenean vel elit scelerisque.
        </p>
        <button className="bg-blue text-white transition-all duration-300 mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid md:hover:bg-white md:hover:text-blue md:hover:px-12 flex gap-2 items-center">
          Create Your CV <HiArrowNarrowRight />
        </button>
      </div>
    </section>
  );
}

export default CVSection;
