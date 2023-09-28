import React from "react";

const Benefits = () => {
  return (
    <div className="relative md:px-[97px] h-screen flex lg:flex-row xl:justify-center flex-col items-center text-center xl:gap-60 gap-14 md:mb-[190px] mb-[120px] lg:mb-0 overflow-x-hidden">
      <img
        className="absolute xl:left-[740px] xl:top-[400px] top-44 lg:top-96 lg:left-[450px] "
        src="../src/images/big_arrow.png"
        alt=""
      />
      <img
        className="xl:w-[400px] lg:w-[800px] md:w-[445px] lg:order-2"
        src={"../src/images/benefit_person.png"}
        alt=""
      />
      <div className="flex flex-col xl:w-2/5 lg:px-0 lg:items-start items-center gap-8 px-8">
        <h3 className="lg:text-left md:text-[48px] md:leading-[48px] md:tracking-[-2.14px] font-monospace text-[32px] font-bold leading-8 tracking-[-1.43px] text-[#495567]">
          Easy to use riding telemetry
        </h3>
        <p className="lg:text-left font-Lexend text-[15px] leading-[25px] font-normal text-[#939CAA]">
          The Scoot app is available with riding telemetry. This means it can
          show you your average speed, how long you've been using the scooter,
          your traveling distance, and many more things all in an easy to use
          app.
        </p>
        <button className="bg-[#FCB72B] text-white px-9 py-3 font-monospace font-bold text-[15px] leading-[25px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Benefits;
