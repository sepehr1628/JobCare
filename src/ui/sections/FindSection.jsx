import { HiOutlineSearch } from "react-icons/hi";

function HeroSection() {
  return (
    <section className="bg-gray w-full pt-24 px-4 md:px-24 flex flex-col items-end md:flex-row relative md:space-x-3">
      <div
        className="hidden lg:block rounded-full bg-blue-900 absolute w-2/3 h-[600px]] top-0 bottom-0 right-0 translate-x-1/3"
        style={{
          background:
            "radial-gradient(circle, rgba(147,184,235,1) 28%, rgba(198,210,210,1) 59%)",
        }}
      ></div>
      <div className="md:w-1/2 md:pt-20 flex flex-col md:justify-start md:items-start z-[1]">
        <div className="md:flex md:flex-col md:w-[30rem]">
          <h2 className="text-5xl xlg:text-[4rem] leading-tight md:leading-tight font-medium text-center md:text-start mb-6 font-sans ">
            Find every job <br />
            in one{" "}
            <span className="text-blue-900 tracking-wider">Platform</span>
          </h2>

          <p className="text-gray-600 text-center md:text-start text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-center md:justify-start items-center sm:items-end sm:space-x-2 my-12">
          <span className="flex flex-col sm:items-end sm:flex-row sm:space-x-2 space-y-4 w-full">
            <input
              className="px-4 py-2 rounded-full sm:rounded-l-full sm:rounded-r-none basis-1 flex-grow"
              placeholder="Job title"
            />
            <input
              className="px-4 py-2 rounded-full sm:rounded-none"
              placeholder="Location"
            />
          </span>
          <button className="px-4 md:px-6 py-2 sm:w-auto rounded-full sm:rounded-l-none sm:rounded-r-full flex max-w-52 w-52 justify-center items-center bg-blue-900 text-white">
            <HiOutlineSearch className="me-2" />
            Search
          </button>
        </div>
      </div>

      <div className="hidden sm:w-1/2 xlg:flex xlg:justify-end xlg:items-end relative">
        <div className="w-1/3 relative h-[28rem]">
          <a
            href="https://www.linkedin.com/in/sepehr-mohammadpour/"
            className="hidden lg:flex justify-center items-center w-9 h-9 absolute rounded-full bg-white top-16 left-0"
          >
            <img
              src="./../../assets/Images/linkedin-logo.png"
              alt="JobCare LinkedIn"
              className="h-3/5 w-3/5 rounded"
            />
          </a>

          <a
            href="https://t.me/sergraay"
            className="hidden lg:flex justify-center items-center w-9 h-9 absolute rounded-full bg-white top-48 right-0"
          >
            <img
              src="./../../assets/Images/telegram-logo.png"
              alt="JobCare Telegram"
              className="h-3/5 w-3/5 rounded"
            />
          </a>

          <a
            href="https://github.com/sepehr1628"
            className="hidden lg:flex justify-center items-center w-9 h-9 absolute rounded-full bg-white top-80 inset-x-1/2"
          >
            <img
              src="./../../assets/Images/github-logo.png"
              alt="JobCare Github"
              className="h-3/5 w-3/5 rounded"
            />
          </a>
        </div>
        <div className="w-2/3 flex justify-center">
          <img
            src="./../../assets/Images/image 14.png"
            alt="The guy finds job in JobCare"
            className="xl:w-4/5"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
