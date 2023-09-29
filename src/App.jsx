import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Location from "./pages/Location";

const App = () => {
  return (
       <>
         <Home />
         <About />
         <Careers />
         <Location />
       </>
  );
};

export default App;
