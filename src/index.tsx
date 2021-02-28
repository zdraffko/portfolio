import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import LandingSection from "./components/sections/landing/LandingSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import AboutSection from "./components/sections/about/AboutSection";
import ContactSection from "./components/sections/contact/ContactSection";
import NavBar from "./components/navigation/NavBar/NavBar";
import BurgerMenu from "./components/navigation/BurgerMenu/BurgerMenu";

ReactDOM.render(
  <React.StrictMode>
    <LandingSection />
    <NavBar />
    <BurgerMenu />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </React.StrictMode>,
  document.getElementById("root"),
);
