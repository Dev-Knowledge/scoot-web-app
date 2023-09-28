import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import Main_button from "./Main_button";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible((previous) => !previous);
  };

  return (
    <header className="relative z-20">
      <div className="flex justify-between items-center h-16 md:h-24 px-2 bg-white">
        <div className="md:hidden" onClick={toggle}>
          {visible ? (
            <GrClose size={30} color="#FCB72B" />
          ) : (
            <HiMenu size={30} color="#FCB72B" />
          )}
        </div>
        <nav className="flex justify-between items-center lg:mx-[169.18px] gap-[58.18px] mx-[40px] md:w-full">
          <h3 className="xs:w-full  text-center md:w-fit font-bold text-3xl text-[#495567] font-monospace">
            <Link to="/">Scoot</Link>
          </h3>
          <div className="hidden md:flex justify-between items-center font-bold gap-24">
            <ul className="font-monospace text-[15px] leading-[25px] text-[#939CAA] 2xl:mr-[400px] flex justify-between gap-8">
              <li>
                <Link to={"/About"}>About</Link>
              </li>
              <li>
                <Link to={"/Careers"}>Careers</Link>
              </li>
              <li>
                <Link to={"/Location"}>Location</Link>
              </li>
            </ul>
            <Main_button title={"Get Scootin"} />
          </div>
        </nav>

        {/* this is the side bare menu  */}
        <div className="md:hidden">
          <div
            className={
              visible
                ? "fixed left-0 top-0 -z-10 h-screen pb-6 w-[70%] bg-[#333A44] flex justify-between flex-col px-7 ease-in-out duration-500"
                : "fixed left-[-100%] top-0 pb-24 -z-10 h-screen w-[70%] bg-[#333A44] flex justify-between flex-col px-7 ease-in-out duration-500 "
            }
          >
            <ul className="flex flex-col gap-6 text-[#E5ECF4] font-bold font-monospace py-28 w-full">
              <li key={"key1"}>
                <Link to="/About">About</Link>
              </li>
              <li key={"key2"}>
                <Link to="/Location">Location</Link>
              </li>
              <li key={"key3"}>
                <Link to="/Careers">Careers</Link>
              </li>
            </ul>
            <button className="bg-[#FCB72B] font-bold text-[15px] px-8 py-3 rounded-sm text-white">
              <Link to="/Careers">Get Scootin</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
