import React from "react";

const City = () => {
  return (
    <div className="relative md:px-[97px] xl:gap-60 xl:justify-center h-screen flex lg:flex-row flex-col items-center text-center gap-14 md:mb-[190px] mb-[120px] lg:mb-0">
      <img
        className="xl:w-[400px] lg:w-[800px] md:w-[445px]"
        src={"../src/images/city.png"}
        alt=""
      />
      <div className="flex flex-col xl:w-2/5 lg:px-0 lg:items-start items-center gap-8 px-8">
        <h3 className="lg:text-left md:text-[48px] md:leading-[48px] md:tracking-[-2.14px] font-monospace text-[32px] font-bold leading-8 tracking-[-1.43px] text-[#495567]">
          Coming to a city near you
        </h3>
        <p className="lg:text-left font-Lexend text-[15px] leading-[25px] font-normal text-[#939CAA]">
          Scoot is available in 4 major cities so far. We’re expanding rapidly,
          so be sure to let us know if you want to see us in your hometown.
          We’re aiming to let our scooters loose on 23 cities over the coming
          year.
        </p>
        <button className="bg-[#FCB72B] text-white px-9 py-3 font-monospace font-bold text-[15px] leading-[25px]">
          Learn More
        </button>
      </div>
      <img
        className="-scale-x-1 absolute lg:top-40 xl:left-[-450px] lg:left-[-520px] xs:left-[-90px] md:-left-[410px] overflow-x-hidden"
        src="../src/images/benefit_arrow.png"
        alt=""
      />
    </div>
  );
};

export default City;
