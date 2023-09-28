import React from "react";

const Main_button = (props) => {
  return (
    <div className="flex lg:justify-start  justify-center">
      <button className="hover:bg-white border-2 border-[#FCB72B] hover:text-[#FCB72B] px-4 py-3 font-monospace text-[15px] leading-[25px] text-center text-white bg-[#FCB72B]">
        {props.title}
      </button>
    </div>
  );
};

export default Main_button;
