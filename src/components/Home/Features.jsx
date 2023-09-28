import React from "react";

export default function Features() {
  const list_pic = [
    "../src/images/s1.png",
    "../src/images/s1.png",
    "../src/images/s1.png",
  ];
  const list_title = ["Locate with app", "Pick your scooter", "Enjoy the ride"];
  const list_text = [
    "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
    "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
    "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
  ];

  const items = list_pic.map((item, index) => {
    return (
      <div
        key={index}
        className="lg:px-0 md:px-20 md:mt-[122px] flex flex-col items-center gap-6 mt-8 "
      >
        <div className="flex md:flex-row lg:flex-col md:items-start md:gap-[79px] flex-col xs:items-center gap-6 mt-8 ">
          <img className="md:w-24 md:h-24 w-14 h-14 z-10" src={item} alt="" />
          <div className="xl:flex xl:flex-col gap-[27px] md:text-left">
            <h3 className="font-bold font-monospace text-xl leading-7 tracking-wide text-[#495567]">
              {list_title[index]}
            </h3>
            <p className=" font-Lexend font-normal leading-[25px] text-sm text-[#939CAA]">
              {list_text[index]}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="xs:hidden md:block absolute xl:top-[310px] xl:left-[400px] xl:h-[1200px] lg:top-[520px] lg:left-[350px] lg:rotate-90 w-3 left-[154px] z-10 lg:h-[770px] h-[670px] bg-[#F2F2F2]"></div>
      <div className="xl:mb-[216px] lg:mb-0 mb-[145px] bg-white flex lg:flex-row lg:gap-8 flex-col justify-center items-center text-white lg:px-20 px-8 text-center leading-10">
        {items}
      </div>
    </>
  );
}
