import React from "react";
import "./cta.css";
import Resume from "./assets/Resume.pdf";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="cta">
      {/* <a download className="btn">
        My Resume
      </a> */}
      <a href={Resume} dowload className="btn">
        My Resume
      </a>
      {/* <Link to="/Contact" className="btn btn-primary">
        Contact Me
      </Link> */}
    </div>
  );
}

export default CTA;
