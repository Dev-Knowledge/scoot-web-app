import React from "react";
import Header from "../common/Header";
import Section_asset from "../common/Section_asset";

const About_hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <div
        className="mb-[76px] md:font-bold flex md:pl-16 md:-right-6 md:justify-between justify-center items-center h-[160px] font-monospace md:text-[56px] text-[40px] leading-10 tracking-[-1.79px] text-center text-white"
        style={{ backgroundImage: "url(../src/images/about_title.jpg)" }}
      >
        About
        <img
          className="xs:hidden md:block absolute right-[-25px] overflow-x-hidden"
          src={"../src/images/small_circles.png"}
          alt=""
        />
      </div>
      <Section_asset
        title={"Mobility for the digital era"}
        text={
          "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
        }
        image={"../src/images/about_hero.png"}
        order={"order-2"}
      />
      <img
        className="absolute xl:left-[730px] xl:top-[600px] lg:top-[500px] lg:left-[550px] md:top-[580px] md:right-0 top-[435px] -scale-y-1 overflow-hidden"
        src={"../src/images/benefit_arrow.png"}
        alt=""
      />
      <img
        className="absolute xs:hidden md:block lg:top-[260px] lg:w-[430px] md:top-[330px] md:right-[-380px] -scale-y-1 overflow-x-hidden"
        src={"../src/images/big_blue_circle.png"}
        alt=""
      />
    </div>
  );
};

export default About_hero;
