import React from "react";
import "./cta.css";
import Resume from "./assets/Resume.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={Resume} dowload className="btn">
        My Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
}

export default CTA;
