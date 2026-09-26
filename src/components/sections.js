// The single page's sections, in page order. `path` is the route that links
// to a section (so old /Portfolio and /Contact links keep working); sections
// without one are reached by hash (e.g. /#about).
export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Work", path: "/Portfolio" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Let’s Talk", path: "/Contact" },
];

export const sectionForPath = (pathname) =>
  sections.find(({ path }) => path && path.toLowerCase() === pathname.toLowerCase());

export const sectionHref = ({ id, path }) => path || (id === "home" ? "/" : `/#${id}`);

export const scrollToSection = (id, behavior = "smooth") => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
};
