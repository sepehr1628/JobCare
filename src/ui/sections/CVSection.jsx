import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function CVSection() {
  const [cvTextCollapse, setCVTextCollapse] = useState(false);

  useEffect(
    function () {
      if (screen.width > 1024) setCVTextCollapse(true);
    },
    [setCVTextCollapse]
  );

  return (
    <section className="px-4 py-12 sm:py-16 md:px-24 md:py-24 flex items-center flex-wrap md:flex-nowrap">
      <div className="p-4 md:p-2 xlg:w-5/12 flex-grow flex justify-center">
        <img
          src="./../../assets/Images/cv-great-employers.png"
          alt="put your CV in front of the great
            for employers to see"
          className="w-full max-w-96 md:max-w-none"
        />
      </div>
      <div className="md:p-8 flex flex-col justify-evenly items-start gap-2 lg:gap-5 xlg:w-7/12">
        <h2 className="text-2xl md:3xl lg:text-[2.7rem] font-medium leading-tight text-start">
          put your CV in front of the great for employers to see
        </h2>
        <p className="text-justify">
          {cvTextCollapse
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam qui."
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem "}
          {!cvTextCollapse && (
            <span
              onClick={() => setCVTextCollapse((cv) => !cv)}
              className="text-blue-900 font-bold"
            >
              ...More
            </span>
          )}
        </p>
        <button className="bg-blue text-white transition-all duration-300 hover:px-12 mt-4 md:m-0 px-3 py-1 md:px-10 lg:py-2 rounded-full border border-blue border-solid hover:bg-white hover:text-blue  flex gap-2 items-center">
          Create Your CV <HiArrowNarrowRight />
        </button>
      </div>
    </section>
  );
}

export default CVSection;
