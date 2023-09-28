import React from "react";
import Header from "../common/Header";
import Section_asset from "../common/Section_asset";
import Main_button from "../common/Main_button";
const Career_hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <div
        className="mb-[76px] md:font-bold flex md:pl-16 md:-right-6 md:justify-between justify-center items-center h-[160px] font-monospace md:text-[56px] text-[40px] leading-10 tracking-[-1.79px] text-center text-white"
        style={{ backgroundImage: "url(../src/images/career_title_md.png)" }}
      >
        Careers
        <img
          className="xs:hidden md:block absolute right-[-25px] overflow-x-hidden"
          src={"../src/images/small_circles.png"}
          alt=""
        />
      </div>
      <img
        className="absolute xs:hidden md:block lg:top-[260px] lg:w-[430px] md:top-[330px] md:right-[-380px] -scale-y-1 overflow-x-hidden"
        src={"../src/images/big_blue_circle.png"}
        alt=""
      />
      <Section_asset
        title={"Care to join our mission?"}
        text={
          "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
        }
        image={"../src/images/career.png"}
        order={"order-2"}
      />
      <img
        className="absolute xl:left-[730px] xl:top-[600px] lg:top-[500px] lg:left-[550px] md:top-[580px] md:right-0 top-[435px] -scale-y-1 overflow-hidden"
        src={"../src/images/benefit_arrow.png"}
        alt=""
      />
      <div className="lg:px-20">
        <Main_button title={"Say hello"} />
      </div>
    </div>
  );
};

export default Career_hero;
