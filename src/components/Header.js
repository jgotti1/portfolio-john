import React from "react";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import "./header.css";
import HeroTerminal from "./HeroTerminal";
import SectionLink from "./SectionLink";
import Resume from "./assets/Resume.pdf";
import { Projects } from "./Data/Projects";

const stats = [
  { value: "30+", label: "Years in IT, workflow engineering & IT leadership" },
  { value: String(Projects.length), label: "Live portfolio projects" },
  { value: "B.S. + M.S.", label: "Software Engineering, in progress" },
];

// The hero: who John is, what he does, and the two primary actions.
function Header() {
  return (
    <header className="hero page-section" id="home" aria-labelledby="home-title">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__hello">
            <span className="hero__status" aria-hidden="true" />
            Hello, I&apos;m John Margotti
          </p>
          <h1 id="home-title">
            I build reliable software for{" "}
            <span className="text-gradient hero__nowrap">always&#8209;on</span> environments.
          </h1>
          <p className="hero__lede">
            Senior software engineer and application subject matter expert with
            30+ years in 24/7 publishing, pairing hands-on engineering with the
            leadership to move complex work forward.
          </p>

          <div className="hero__actions">
            <SectionLink to="portfolio" className="btn btn--primary">
              View my work <BsArrowRight aria-hidden="true" />
            </SectionLink>
            <a href={Resume} download target="_blank" rel="noreferrer" className="btn btn--secondary">
              <BsDownload aria-hidden="true" /> Download résumé
            </a>
          </div>

          <dl className="hero__stats">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <figure className="hero__portrait">
            <div className="hero__frame">
              <img
                src="../images/jcover.png"
                alt="John Margotti holding a camera with his granddaughter"
                width="958"
                height="960"
              />
            </div>
            {/* Same photo, unclipped: shows only where it breaks past the
                frame (the cap above, the hand to the right). */}
            <div className="hero__pop" aria-hidden="true">
              <img src="../images/jcover.png" alt="" width="958" height="960" />
            </div>
          </figure>
          <div className="hero__terminal">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
