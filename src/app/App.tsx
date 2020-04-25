import React from "react";
import "./App.scss";
import LandingSection from "./components/sections/landing/LandingSection";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import AboutSection from "./components/sections/about/AboutSection";
import ContactSection from "./components/sections/contact/ContactSection";
import NavBar from "./components/navigation/NavBar/NavBar";

const App = () => (
  <div className="App">
    <LandingSection />
    <NavBar />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </div>
);

export default App;
