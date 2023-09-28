import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="h-screen md:h-auto flex flex-col">
      <div
        className="flex flex-col lg:justify-center gap-10 lg:px-24 px-8 py-[88px] md:py-[62px] md:px-[155px]"
        style={{ backgroundImage: "url(../src/images/top_footer.png)" }}
      >
        <div className="flex xs:flex-col lg:flex-row xs:gap-10 items-center lg:justify-between">
          <h3 className="lg:text-left lg:w-[415px] md:text-5xl md:leading-[48px] md:tracking-[-2.14px] text-center font-monospace text-[32px] leading-8 tracking-[-1.43px] font-bold text-white">
            Sign up and Scoot off today
          </h3>
          <div className="md:hidden xs:block flex gap-10 justify-between ">
            <button>
              <img
                className="mr-2"
                src={"../src/images/applestore.png"}
                alt=""
              />
            </button>
            <button>
              <img src={"../src/images/googleplay.png"} alt="" />
            </button>
          </div>
          <div className="flex xs:hidden md:block gap-[12.86px] justify-between ">
            <button>
              <img
                className="mr-5"
                src={"../src/images/applestorelg.svg"}
                alt=""
              />
            </button>
            <button>
              <img src={"../src/images/googleplaylg.png"} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex md:flex-row md:items-center md:py-9 flex-col justify-center items-center md:pl-10 md:pr-10  pt-[83px] pb-[69px] pr-[124px] pl-[131px]"
        style={{ backgroundImage: "url(../src/images/bottom_footer.png)" }}
      >
        <h3 className="md:m-0 md:mr-[59px] mb-[41.44px] text-center font-monospace text-[32px] leading-8 tracking-[-1.43px] font-bold text-white">
          <Link to={"/"} onClick={handleScrollToTop}>
            Scoot
          </Link>
        </h3>
        <ul className="mb-[85px] md:mr-[153px] flex md:flex-row md:justify-center md:m-0 xs:flex-col text-center gap-4 text-[#939CAA] font-bold text-[15px] leading-[25px]">
          <li key={"key1"}>
            <Link to="/About" onClick={handleScrollToTop}>
              About
            </Link>
          </li>
          <li key={"key2"}>
            <Link to="/Location" onClick={handleScrollToTop}>
              Location
            </Link>
          </li>
          <li key={"key3"}>
            <Link to="/Careers" onClick={handleScrollToTop}>
              Careers
            </Link>
          </li>
        </ul>
        <div className="flex gap-6">
          <a href="/">
            <img src={"../src/images/fb.png"} alt="" />
          </a>
          <a href="/">
            <img src={"../src/images/tw.png"} alt="" />
          </a>
          <a href="/">
            <img src={"../src/images/insta.png"} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
