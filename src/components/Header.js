import React from "react";
import "./header.css";
import CTA from "./CTA";
import john from "../images/johnm.png";
import HeaderSocials from "./HeaderSocials";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm </h4>
        <h1 className="name">John Margotti</h1>
        <h2 className="text-light">Freelance Web Developer</h2>
        <img className="me header_container" src={john} alt="Johns Head Shot" />

        <CTA />
      </div>
    </header>
  );
}

export default Header;
