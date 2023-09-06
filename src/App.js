import React from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Skills from "./components/experience/Skills";
import Projects from "./components/projects/Projects";
import Certification from "./components/certifications/Certification";

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
