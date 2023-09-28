import React from "react";
import Section_asset from "../common/Section_asset";

const Better_living = () => {
  return (
    <div className="relative mt-[120px] overflow-hidden">
      <Section_asset
        title={"Better urban living"}
        text={
          "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
        }
        image={"../src/images/about_second.png"}
        order={"order-1"}
      />
      <img
        className="absolute md:top-0 md:left-[-390px] xs:top-[20px] xs:left-[-210px] -scale-x-1"
        src={"../src/images/benefit_arrow.png"}
        alt=""
      />
      <img
        className="absolute xs:hidden lg:left-[-400px] lg:top-[-80px] md:block md:top-[0px] md:left-[-330px] -scale-y-1 overflow-x-hidden"
        src={"../src/images/big_blue_circle.png"}
        alt=""
      />
    </div>
  );
};

export default Better_living;
