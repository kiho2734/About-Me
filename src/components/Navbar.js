import React from "react";
import "./styles/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ui className="navbar__links">
        <li>
          <a href="#" className="navbar__link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link">
            About Me
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link">
            Languages
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link">
            Contact Me
          </a>
        </li>
      </ui>
    </nav>
  );
}

export default Navbar;
