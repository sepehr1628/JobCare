function Home() {
  return (
    <div>
      <section
        className="bg-[#C6D2D26B] w-full pt-24 px-3 md:px-24 flex flex-col md:flex-row"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(198,210,210,1) 0%, rgba(198,210,210,1) 66%, rgba(147,184,235,1) 100%)",
        }}
      >
        <div className="md:w-1/2 md:pt-16">
          <h2 className="text-3xl md:text-6xl leading-10 md:leading-normal font-medium text-center md:text-start mb-6 font-sans">
            Find every job in one{" "}
            <span className="text-[#1F69DC] tracking-wider">Platform</span>
          </h2>

          <p className="text-gray-600 text-center text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="hidden md:w-1/2 md:flex md:justify-end md:items-end">
          <img
            src="./../../assets/Images/image 14.png"
            alt="The guy finds job in JobCare"
            className="h-5/6"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
