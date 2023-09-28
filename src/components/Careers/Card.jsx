import React from "react";

const Card = ({ title, location }) => {
  return (
    <div className="px-8 py-4">
      <div className="p-8 bg-[#F2F5F9] flex md:flex-row md:justify-between xs:flex-col items-center">
        <div className="">
          <p className="md:text-2xl md:leading-7 font-monospace font-bold text-lg leading-6 tracking-[-0.8px] text-[#495567] mb-1">
            {title}
          </p>
          <p className="font-Lexend font-normal text-[15px] leading-[25px] text-[#495567] mb-4">
            {location}
          </p>
        </div>
        <button className="bg-[#FCB72B] px-20 py-3 font-Lexend font-normal text-[15px] leading-[25px] text-white mb-4">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Card;
