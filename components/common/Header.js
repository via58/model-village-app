import React, { use, useState } from "react";
import "./Header.css";

export default function Header({ setCurrentSection, currentSection }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">Elango Rangasamy</span>
      </div>

      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-items ${open ? "show" : ""}`}>
        <li>
          <a
            className={currentSection === "home" ? "active" : ""}
            onClick={() => {
              setCurrentSection("home");
              setOpen(false);
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            className={currentSection === "about" ? "active" : ""}
            onClick={() => {
              setCurrentSection("about");
              setOpen(false);
            }}
          >
            About
          </a>
        </li>

        <li>
          <a
            className={currentSection === "services" ? "active" : ""}
            onClick={() => {
              setCurrentSection("services");
              setOpen(false);
            }}
          >
            Services
          </a>
        </li>

        <li>
          <a
            className={currentSection === "contact" ? "active" : ""}
            onClick={() => {
              setCurrentSection("contact");
              setOpen(false);
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
