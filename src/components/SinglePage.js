import React, { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import Header from "./Header";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Toolkit from "./Toolkit";
import Contact from "./Contact";
import { scrollToSection, sectionForPath } from "./sections";

// Every section of the site on one page. SectionLink scrolls on click; this
// handles the rest: direct visits (/Portfolio, /#about) and Back/Forward.
function SinglePage() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const firstRender = useRef(true);

  useEffect(() => {
    if (navigationType === "POP") {
      const id = hash ? hash.slice(1) : sectionForPath(pathname)?.id || "home";
      const behavior = firstRender.current ? "auto" : "smooth";
      // Wait a frame so images and fonts have laid out before measuring.
      requestAnimationFrame(() => scrollToSection(id, behavior));
    }
    firstRender.current = false;
  }, [pathname, hash, navigationType]);

  return (
    <>
      <Header />
      <Profile />
      <Portfolio />
      <Toolkit />
      <Contact />
    </>
  );
}

export default SinglePage;
