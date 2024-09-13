function Home() {
  return (
    <div>
      <section
        className="bg-[#C6D2D26B] w-full pt-20 px-3 md:px-16 md:flex"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(198,210,210,1) 0%, rgba(198,210,210,1) 66%, rgba(147,184,235,1) 100%)",
        }}
      >
        <div className="w-1/2">
          <h2 className="text-3xl md:text-6xl leading-10 md:leading-normal font-medium text-center md:text-start mb-6 font-sans">
            Find every job <br /> in one{" "}
            <span className="text-[#1F69DC] tracking-wider">Platform</span>
          </h2>

          <p className="text-gray-600 text-center text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <div className="w-1/2"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
