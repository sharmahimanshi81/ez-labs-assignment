import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/image_ez.png";
import dot from "../assets/dot.png"; // ✅ your menu icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // ✅ Smooth scroll when clicking nav links
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu after click (on mobile)
  };

  return (
    <header>
      <nav className="navbar">
        {/* Brand Logo */}
        <div className="brand">
          <img src={logo} alt="EZ Logo" className="nav-logo" />
        </div>

        {/* ✅ Dot icon for mobile toggle */}
        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <img src={dot} alt="Menu Icon" />
        </button>

        {/* ✅ Navbar Links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li onClick={() => handleScroll("home")}>Home</li>
          <li onClick={() => handleScroll("services")}>Services</li>
          <li onClick={() => handleScroll("stories")}>Their Stories</li>
          <li onClick={() => handleScroll("ourstory")}>Our Story</li>
          <li onClick={() => handleScroll("contact")}>Contact</li>
          <button className="navbar-btn" onClick={() => handleScroll("contact")}>
            Let’s Talk
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
