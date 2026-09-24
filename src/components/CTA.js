import React from "react";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./cta.css";
import Resume from "./assets/Resume.pdf";

function CTA() {
  return (
    <div className="home-cta">
      <Link to="/Portfolio" className="home-cta__primary">
        View my work <BsArrowRight aria-hidden="true" />
      </Link>
      <a
        href={Resume}
        download
        target="_blank"
        rel="noreferrer"
        className="home-cta__secondary"
      >
        <BsDownload aria-hidden="true" /> Download resume
      </a>
    </div>
  );
}

export default CTA;
