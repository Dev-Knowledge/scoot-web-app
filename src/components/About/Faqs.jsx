import React from "react";
import Accordion from "../common/Accordion";

const Faqs = () => {
  return (
    <div>
      <h3 className="md:text-[48px] md:leading-[48px] mt-36 mb-12 text-center font-monospace font-bold text-[32px] leading-8 tracking-[-1.43px] text-[#495567]">
        FAQs
      </h3>
      <div className="flex xs:flex-col lg:px-8 lg:flex-row justify-between">
        <p className="md:text-[40px] lg:w-1/3 md:leading-[48px] mb-8 text-center font-monospace font-bold text-[24px] leading-7 tracking-[-1.07px] text-[#495567]">
          How it works
        </p>
        <div className="flex flex-col gap-4 mb-12 lg:w-2/3">
          <Accordion
            title={"How do I download the app?"}
            text={
              "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
            }
          />
          <Accordion
            title={"Can I find a nearby Scoots?"}
            text={
              "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
            }
          />
          <Accordion
            title={"Do I need a license to ride?"}
            text={
              "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
