import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroPage.jsx";
import ContactForm from "./components/ContactForm.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
};

export default App;
