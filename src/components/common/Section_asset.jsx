import React from "react";

const Section_asset = (props) => {
  return (
    <div className="text-center mb-8">
      <div className="flex lg:flex-row lg:gap-[100px] xl:justify-between xl:px-[165px] lg:justify-center items-center flex-col px-8 gap-8">
        <img
          className={`xl:w-2/5 lg:px-0 md:px-32 mb-[34px] lg:${props.order}`}
          src={props.image}
          alt=""
        />
        <div className="lg:text-left lg:flex lg:flex-col lg:gap-6 lg:w-[445px]">
          <h2 className="md:text-[48px] md:leading-[48px] md:tracking-[-2.14px] lg:px-0 md:px-24 font-bold font-monospace text-[32px] leading-[32px] tracking-[-1.43px] text-[#495567]">
            {props.title}
          </h2>
          <p className="lg:px-0 md:px-24 font-normal font-Lexend text-[15px] leading-[25px] text-[#939CAA]">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_asset;
