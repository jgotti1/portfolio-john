import React from "react";
import "./header.css";
import CTA from "./CTA";
import john from "../images/johnhs.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm </h4>

        <h1>John Margotti</h1>
        <h2 className="text-light">Freelance Web Developer</h2>
        <img className="me header_container" src={john} alt="Johns Head Shot" />

        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
