import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  const isActive = (path) => pathname.toLowerCase() === path.toLowerCase();

  return (
    <nav aria-label="Primary navigation">
      <Link to="/" className={isActive("/") ? "active" : ""} aria-current={isActive("/") ? "page" : undefined}>
        <AiOutlineHome /> <h5>Home</h5>
      </Link>
      <Link to="/About" className={isActive("/About") ? "active" : ""} aria-current={isActive("/About") ? "page" : undefined}>
        <SiAboutdotme /> <h5>About</h5>
      </Link>
      <Link to="/Portfolio" className={isActive("/Portfolio") ? "active" : ""} aria-current={isActive("/Portfolio") ? "page" : undefined}>
        <BiBook /> <h5>Portfolio</h5>
      </Link>
      <Link to="/Services" className={isActive("/Services") ? "active" : ""} aria-current={isActive("/Services") ? "page" : undefined}>
        <RiServiceLine /> <h5>Services</h5>
      </Link>
      <Link to="/Contact" className={isActive("/Contact") ? "active" : ""} aria-current={isActive("/Contact") ? "page" : undefined}>
        <MdOutlinePermContactCalendar />
        <h5>Contact</h5>
      </Link>
    </nav>
  );
}

export default Nav;
