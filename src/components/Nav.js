import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { Link } from "react-router-dom";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <Link to="/" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome /> <h5>Home</h5>
      </Link>
      <Link to="About" onClick={() => setActiveNav("#About")} className={activeNav === "#About" ? "active" : ""}>
        <SiAboutdotme /> <h5>About</h5>
      </Link>
      <Link to="Portfolio" onClick={() => setActiveNav("#Experience")} className={activeNav === "#Experience" ? "active" : ""}>
        <BiBook /> <h5>Portfolio</h5>
      </Link>
      <Link to="Services" onClick={() => setActiveNav("#Services")} className={activeNav === "#Services" ? "active" : ""}>
        <RiServiceLine /> <h5>Services</h5>
      </Link>
      <Link to="Contact" onClick={() => setActiveNav("#Contact")} className={activeNav === "#Contact" ? "active" : ""}>
        <MdOutlinePermContactCalendar />
        <h5>Contact</h5>
      </Link>
    </nav>
  );
}

export default Nav;
