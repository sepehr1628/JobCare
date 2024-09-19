import { HiOutlineSearch } from "react-icons/hi";

function Home() {
  return (
    <section className="bg-gray w-full pt-24 px-3 md:px-24 flex flex-col items-center md:flex-row relative space-x-3">
      <div
        className="hidden lg:block rounded-full bg-blue-900 absolute w-2/3 h-[600px]] top-0 bottom-0 right-0 translate-x-1/3"
        style={{
          background:
            "radial-gradient(circle, rgba(147,184,235,1) 28%, rgba(198,210,210,1) 59%)",
        }}
      ></div>
      <div className="md:w-1/2 md:pt-20 flex flex-col md:justify-start md:items-start space-y-12">
        <div className="md:flex flex-col w-[30rem]">
          <h2 className="text-3xl md:text-5xl xlg:text-[4rem] leading-10 md:leading-tight font-medium text-center md:text-start mb-6 font-sans ">
            Find every job <br />
            in one{" "}
            <span className="text-blue-900 tracking-wider">Platform</span>
          </h2>

          <p className="text-gray-600 text-center md:text-start text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex justify-center md:justify-start items-center space-x-2">
          <input
            className="px-4 py-2 rounded-l-full rounded-r-none"
            placeholder="Job title"
          />
          <input className="px-4 py-2" placeholder="Location" />
          <button className="px-8 py-2 rounded-l-none rounded-r-full flex justify-center items-center bg-blue-900 text-white">
            <HiOutlineSearch className="me-2" />
            Search
          </button>
        </div>
      </div>
      <div className="hidden sm:w-1/2 xlg:flex xlg:justify-end xlg:items-end relative">
        <div className="w-1/3 relative h-[28rem]">
          <span className="hidden lg:flex justify-center items-center w-9 h-9 absolute rounded-full bg-white top-16 left-0">
            <img
              src="./../../assets/Images/linkedin-logo.png"
              alt="JobCare LinkedIn"
              className="h-3/5 w-3/5 rounded"
            />
          </span>

          <span className="hidden lg:flex justify-center items-center w-9 h-9 absolute rounded-full bg-white top-48 right-0">
            <img
              src="./../../assets/Images/telegram-logo.png"
              alt="JobCare Telegram"
              className="h-3/5 w-3/5 rounded"
            />
          </span>

          <span className="hidden lg:flex justify-center items-center w-9 h-9 absolute rounded-full bg-white top-80 inset-x-1/2">
            <img
              src="./../../assets/Images/github-logo.png"
              alt="JobCare Github"
              className="h-3/5 w-3/5 rounded"
            />
          </span>
        </div>
        <div className="w-2/3 flex justify-center">
          <img
            src="./../../assets/Images/image 14.png"
            alt="The guy finds job in JobCare"
            className="w-4/5"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
