import React from "react";
import "./cta.css";
import Resume from "./assets/Resume.pdf";
// import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="cta">
     
      <a href={Resume} download target="_blank" rel="noreferrer" className="btn">
        Download my Resume
      </a>
     
    </div>
  );
}

export default CTA;
