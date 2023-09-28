import React from "react";
import Career_hero from "../components/Careers/Career_hero";
import Footer from "../components/common/Footer";
import Value from "../components/common/Value";
import Card from "../components/Careers/Card";

const Careers = () => {
  const data = {
    main_title: "Why join us?",
    image1: "../src/images/value_1.png",
    second_title_1: "Our tech",
    text_1:
      "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",

    image2: "../src/images/value_2.png",
    second_title_2: "Our integrity",
    text_2:
      "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",

    image3: "../src/images/value_3.png",
    second_title_3: "Our community",
    text_3:
      "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
  };

  const card_data = [
    {
      title: "General Manager",
      location: "Jakarta, Indonesia",
    },
    {
      title: "UI/UX Designer",
      location: "Yokohama, Japan",
    },
    {
      title: "Blog Content Copywriter",
      location: "New York, United States",
    },
    {
      title: "Graphic Designer",
      location: "New York, United States",
    },
    {
      title: "Fleet Supervisor",
      location: "Jakarta, Indonesia",
    },
    {
      title: "UX Analyst",
      location: "London, United Kingdom",
    },
  ];
  return (
    <div>
      <Career_hero />
      <Value data={data} />
      <div className="md:mb-[120px] lg:px-[60px]">
        {card_data.map((item, index) => {
          return (
            <Card key={index} title={item.title} location={item.location} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
