import React from "react";
import Header from "../common/Header";
export default function Hero() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="relative h-screen flex flex-col justify-center items-center text-white px-8 py-0 text-center">
        <img
          className="absolute xs:block md:hidden w-full h-full -z-10"
          src={"../src/images/hero_mobile.png"}
          alt=""
        />
        <img
          className="absolute md:block xs:hidden w-full h-full -z-10"
          src={"../src/images/hero_md.jpg"}
          alt=""
        />
        <h3 className="xl:w-[550px] xl:px-0 xl:mr-[400px] lg:text-left lg:max-w-[700px] lg:mr-[200px] md:px-24 md:text-[56px] md:tracking-[-2.5px] md:leading-[56px] font-monospace font-bold font text-[40px] mb-6 leading-10">
          Scooter sharing made simple
        </h3>
        <div className="flex flex-col items-center xl:pl-0 lg:pl-[230px] lg:pr-[300px] lg:items-start lg:justify-start ">
          <p className="xl:w-[450px] lg:text-left lg:px-0 md:px-24 font-Lexend font-light text-[15px] mb-9 leading-[25px]">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <button className="hover:bg-[#5C6475] border-2 border-[#FCB72B] hover:text-[#FCB72B] font-monospace px-8 py-3 bg-[#FCB72B]">
            Get Scootin
          </button>
        </div>
        <img
          className="xs:hidden lg:block w-[200px] absolute top-[300px] left-0"
          src={"../src/images/line.svg"}
          alt=""
        />
        <img
          className="lg:hidden xl:block absolute md:left-0 xs:top-[480px] xs:left-[-150px] md:top-[470px] w-[347px] xl:top-[300px] xl:left-[820px]"
          src={"../src/images/hero_arrow.png"}
          alt=""
        />
        <div
          className="xs:hidden md:block absolute xl:top-[350px] xl:left-[1242px] md:h-[63px] md:left-[570px] lg:top-[400px] lg:left-[826px] md:top-[510px] right-[205px] w-[198px] overflow-x-hidden bg-no-repeat"
          style={{ backgroundImage: "url(../src/images/small_circles.png)" }}
        ></div>
      </div>
    </div>
  );
}
