import React from "react";

const Value = (props) => {
  return (
    <div className="md:px-[155px] lg:px-[100px] flex flex-col justify-center items-center px-8 ">
      <div className="flex flex-col items-center">
        <h2 className="lg:text-center mb-16 mt-[120px] font-bold font-monospace text-[32px] leading-[32px] tracking-[-1.43px] text-[#495567]">
          {props.data.main_title}
        </h2>
        <img
          className="absolute xs:hidden md:hidden lg:left-[-380px] lg:top-[1200px] md:top-[0px] md:left-[-330px] -scale-y-1 overflow-x-hidden"
          src={"../src/images/big_blue_circle.png"}
          alt=""
        />
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-6 ">
          <div className="flex flex-col justify-center items-center mb-[56px]">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <img src={props.data.image1} alt="" />
                <div className="relative -top-12 font-monospace text-2xl text-[#495567] font-bold leading-[28px] tracking-[-1.07px] w-fit p-6 rounded-full bg-[#FCB72B]">
                  01
                </div>
              </div>
              <h4 className="mb-[27px] mt-8 font-bold font-monospace text-[24px] leading-[28px] tracking-[-1.07px] text-[#495567]">
                {props.data.second_title_1}
              </h4>
              <p className="mb- text-center font-monospace font-normal text-[15px] leading-[25px] text-[#939CAA]">
                {props.data.text_1}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mb-[56px]">
            <div className="flex flex-col items-center">
              <img src={props.data.image2} alt="" />
              <div className="relative -top-12 font-monospace text-2xl text-[#495567] font-bold leading-[28px] tracking-[-1.07px] w-fit p-6 rounded-full bg-[#FCB72B]">
                02
              </div>
            </div>{" "}
            <h4 className="mb-[27px] mt-8 font-bold font-monospace text-[24px] leading-[28px] tracking-[-1.07px] text-[#495567]">
              {props.data.second_title_2}
            </h4>
            <p className="mb- text-center font-monospace font-normal text-[15px] leading-[25px] text-[#939CAA]">
              {props.data.text_2}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-[56px]">
            <div className="flex flex-col items-center">
              <img src={props.data.image3} alt="" />
              <div className="relative -top-12 font-monospace text-2xl text-[#495567] font-bold leading-[28px] tracking-[-1.07px] w-fit p-6 rounded-full bg-[#FCB72B]">
                03
              </div>
            </div>
            <h4 className="mb-[27px] mt-8 font-bold font-monospace text-[24px] leading-[28px] tracking-[-1.07px] text-[#495567]">
              {props.data.second_title_3}
            </h4>
            <p className="mb- text-center font-monospace font-normal text-[15px] leading-[25px] text-[#939CAA]">
              {props.data.text_3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
