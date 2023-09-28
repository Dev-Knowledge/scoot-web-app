import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-8">
      <button
        className="flex justify-center items-center p-8 w-full bg-[#F2F5F9] text-left font-monospace font-bold md:text-[24px] md:leading-[28px] text-[18px] leading-6 tracking-[-0.8px]"
        onClick={toggleAccordion}
      >
        {props.title}
        {isOpen ? (
          <IoIosArrowUp color="#FCB72B" size={25} />
        ) : (
          <IoIosArrowDown color="#FCB72B" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="bg-[#F2F5F9] px-8 pb-8 mb-8 font-Lexend  leading-[25px] text-[15px] text-[#495567]">
          {props.text}
        </div>
      )}
    </div>
  );
};

export default Accordion;
