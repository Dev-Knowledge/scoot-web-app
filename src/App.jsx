import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Location from "./pages/Location";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </>
  );
};

export default App;
