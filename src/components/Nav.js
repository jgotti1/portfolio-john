import React, { useEffect, useState } from "react";
import "./nav.css";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import SectionLink from "./SectionLink";
import { sectionForPath, sections } from "./sections";

// The About and Services tabs from the old multi-page site stay hidden; their
// routes in App.js still work. Links here come from sections.js.
const linkSections = sections.filter(({ id }) => id !== "home" && id !== "contact");

function Nav() {
  const { pathname } = useLocation();
  const onSinglePage = pathname === "/" || Boolean(sectionForPath(pathname));
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section crosses the middle of the viewport.
  useEffect(() => {
    if (!onSinglePage || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [onSinglePage]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const current = (id) => (onSinglePage && activeId === id ? "location" : undefined);
  const contact = sections.find(({ id }) => id === "contact");

  return (
    <header
      className={`site-nav${scrolled || menuOpen ? " site-nav--solid" : ""}${
        menuOpen ? " site-nav--open" : ""
      }`}
    >
      <div className="container site-nav__inner">
        {onSinglePage ? (
          <SectionLink to="home" className="site-nav__brand" onClick={closeMenu} aria-label="John Margotti, back to top">
            <span className="site-nav__mark" aria-hidden="true">JM</span>
            <span className="site-nav__name">John Margotti</span>
          </SectionLink>
        ) : (
          <Link to="/" className="site-nav__brand" aria-label="John Margotti, home">
            <span className="site-nav__mark" aria-hidden="true">JM</span>
            <span className="site-nav__name">John Margotti</span>
          </Link>
        )}

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <HiOutlineX aria-hidden="true" /> : <HiOutlineMenuAlt3 aria-hidden="true" />}
        </button>

        <nav id="site-nav-menu" className="site-nav__menu" aria-label="Primary navigation">
          <ul>
            {linkSections.map(({ id, label }) => (
              <li key={id}>
                <SectionLink
                  to={id}
                  className={`site-nav__link${current(id) ? " is-active" : ""}`}
                  aria-current={current(id)}
                  onClick={closeMenu}
                >
                  {label}
                </SectionLink>
              </li>
            ))}
          </ul>
          <SectionLink
            to="contact"
            className={`btn btn--primary btn--sm site-nav__cta${current("contact") ? " is-active" : ""}`}
            aria-current={current("contact")}
            onClick={closeMenu}
          >
            {contact.label}
          </SectionLink>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
