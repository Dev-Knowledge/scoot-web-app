import React from "react";
import Accordion from "../common/Accordion";

const Safe = () => {
  return (
    <div className="flex xs:flex-col lg:px-8 lg:flex-row justify-between">
      <p className="xl:text-center lg:text-left md:text-[40px] lg:w-1/3 md:leading-[48px] mb-8 text-center font-monospace font-bold text-[24px] leading-7 tracking-[-1.07px] text-[#495567]">
        Safe driving
      </p>
      <div className="flex flex-col gap-4 mb-12 lg:w-2/3 ">
        <Accordion
          title={"Should I wear a helmet?"}
          text={
            "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
          }
        />
        <Accordion
          title={"How about the rules & regulations?"}
          text={
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
          }
        />
        <Accordion
          title={"What if I damage my Scoot?"}
          text={
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
          }
        />
        <div className="md:mb-[120px]"></div>
      </div>
    </div>
  );
};

export default Safe;
