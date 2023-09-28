import Footer from "../components/common/Footer";
import About_hero from "../components/About/About_hero";
import Better_living from "../components/About/Better_living";
import Value from "../components/common/Value";
import Faqs from "../components/About/Faqs";
import Safe from "../components/About/Safe_driving";

function About() {
  const data = {
    main_title: "Our values",
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

  return (
    <>
      <About_hero />
      <Better_living />
      <Value data={data} />
      <Faqs />
      <Safe />
      <Footer />
    </>
  );
}

export default About;
