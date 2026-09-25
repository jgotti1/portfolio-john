import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

// Set hidden: false to bring a tab back; its route in App.js stays active either way.
const navItems = [
  { path: "/", label: "Home", icon: AiOutlineHome },
  { path: "/About", label: "About", icon: SiAboutdotme, hidden: true },
  { path: "/Portfolio", label: "Portfolio", icon: BiBook },
  { path: "/Services", label: "Services", icon: RiServiceLine, hidden: true },
  { path: "/Contact", label: "Let’s Talk", icon: MdOutlinePermContactCalendar },
];

function Nav() {
  const { pathname } = useLocation();
  const isActive = (path) => pathname.toLowerCase() === path.toLowerCase();

  return (
    <nav aria-label="Primary navigation">
      {navItems
        .filter(({ hidden }) => !hidden)
        .map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={isActive(path) ? "active" : ""}
            aria-current={isActive(path) ? "page" : undefined}
          >
            <Icon /> <h5>{label}</h5>
          </Link>
        ))}
    </nav>
  );
}

export default Nav;
