import React from "react";
import { useNavigate } from "react-router-dom";
import { scrollToSection, sectionHref, sections } from "./sections";

// A link to a section of the single page. It scrolls smoothly and records the
// section's URL, while staying a real link (new tab, copy link, no-JS).
function SectionLink({ to, children, onClick, ...rest }) {
  const navigate = useNavigate();
  const section = sections.find(({ id }) => id === to);
  const href = sectionHref(section);

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    scrollToSection(section.id);
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default SectionLink;
