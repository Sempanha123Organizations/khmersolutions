import React, { useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";

import Home from "./components/Frontend/Home";
import AboutUsScreen from "./components/Frontend/AboutUsScreen";
import SwitchTheme from "./components/Frontend/Layout/SwitchTheme";
import BackToToop from "./components/Frontend/Layout/BackToToop";
import OurServiceScreen from "./components/Frontend/OurServiceScreen";
import ProjectDemoScreen from "./components/Frontend/ProjectDemoScreen";
import ContactUsScreen from "./components/Frontend/ContactUsScreen";
import DetailProductScreen from "./components/Frontend/DetailProductScreen";
import ScrollToTop from "./components/Frontend/Layout/ScrollToTop";

const App = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUsScreen />}></Route>
        <Route path="/services" element={<OurServiceScreen />}></Route>
        <Route path="/projects-demo" element={<ProjectDemoScreen />}></Route>
        <Route path="/contactus" element={<ContactUsScreen />}></Route>
        <Route path="/projects-demo/:id" element={<DetailProductScreen />}></Route>
      </Routes>
      <SwitchTheme />
      <BackToToop/>
    </>
  );
};

export default App;
