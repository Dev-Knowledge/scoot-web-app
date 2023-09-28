import React from "react";

const Hustle = () => {
  return (
    <div className="relative xl:justify-center xl:gap-56 md:px-[97px] lg:justify-start h-screen md:h-[810px] flex lg:flex-row flex-col items-center text-center gap-14 md:mb-[190px] xl:mb-[200px] xs:mb-[120px] lg:mb-0 overflow-x-hidden">
      <img
        className="md:w-[445px] lg:order-2"
        src={"../src/images/hustle.png"}
        alt=""
      />
      <div className="flex flex-col xl:w-2/5 lg:items-start items-center gap-8 px-8 ">
        <h3 className="lg:text-left md:text-[48px] md:leading-[48px] md:tracking-[-2.14px] font-monospace text-[32px] font-bold leading-8 tracking-[-1.43px] text-[#495567]">
          Zero hassle payments
        </h3>
        <p className="lg:text-left font-Lexend text-[15px] leading-[25px] font-normal text-[#939CAA]">
          Our payment is as easy as one two three. We accept most credit cards
          and debit cards. You can also link your PayPal account inside the app.
          Need to pay later? No worries! You can defer payment for up to a
          month.
        </p>
        <button className="bg-[#FCB72B] text-white px-7 py-2 font-monospace font-bold text-[15px] leading-[25px]">
          Learn More
        </button>
      </div>
      <img
        className="absolute xs:left-44 xl:left-[1150px] md:left-[440px] lg:top-[270px] lg:left-[800px] md:top-[70px]"
        src="../src/images/benefit_arrow.png"
        alt=""
      />
    </div>
  );
};

export default Hustle;
