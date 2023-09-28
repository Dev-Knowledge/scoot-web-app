import React from "react";
import Header from "../components/common/Header";
import Main_button from "../components/common/Main_button";
import Footer from "../components/common/Footer";

const Location = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <div
        className="mb-[76px] md:text-[56px] md:font-bold flex md:pl-16 md:-right-6 md:justify-between justify-center items-center h-[160px] font-monospace text-[40px] leading-10 tracking-[-1.79px] text-center text-white"
        style={{ backgroundImage: "url(../src/images/about_title.jpg)" }}
      >
        Location
        <img
          className="xs:hidden md:block absolute right-[-25px] overflow-x-hidden"
          src={"../src/images/small_circles.png"}
          alt=""
        />
      </div>
      <img className="md:hidden m-auto" src={"../src/images/map.png"} alt="" />
      <img
        className="xs:hidden xl:w-[1110px] md:block m-auto md:mt-[120px] md:mb-[64px]"
        src={"../src/images/big_map.png"}
        alt=""
      />
      <div className=" md:hidden flex flex-col justify-center px-12 items-center md:gap-10 gap-4 pt-[40px] pb-[72px]">
        <div className="bg-[#FFF4DF] w-full px-6 py-4 text-center font-monospace font-bold text-2xl leading-7 tracking-[-1.07px] text-[#495567]">
          New York
        </div>
        <div className="bg-[#FFF4DF] w-full px-6 py-4 text-center font-monospace font-bold text-2xl leading-7 tracking-[-1.07px] text-[#495567]">
          London
        </div>
        <div className="bg-[#FFF4DF] w-full px-6 py-4 text-center font-monospace font-bold text-2xl leading-7 tracking-[-1.07px] text-[#495567]">
          Jakarta
        </div>
        <div className="bg-[#FFF4DF] w-full px-6 py-4 text-center font-monospace font-bold text-2xl leading-7 tracking-[-1.07px] text-[#495567]">
          Yokohama
        </div>
      </div>
      <div className="px-8 xl:px-[165px] mb-[72px] flex lg:flex-row lg:justify-between flex-col justify-center items-center gap-8">
        <h3 className="lg:w-1/2 lg:text-left lg:px-5 md:px-[155px] md:text-[48px] md:leading-[48px] md:tracking-[-2.14px] text-center font-monospace font-bold text-[32px] leading-8 tracking-[-1.43px] text-[#495567]">
          Your City Not Listed?
        </h3>
        <p className="lg:w-1/2 lg:text-left lg:px-0  md:px-[98px] font-Lexend font-normal text-[15px] leading-[25px] text-[#939CAA] text-center">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <div className="flex justify-end xs:justify-center xs:items-center xs:w-1/2 lg:w-1/3">
          <Main_button title={"Message us"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
