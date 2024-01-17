import React from "react";
import "./header.css";
import CTA from "./CTA";


function Header() {
  return (
    <header>
      <div className="container header_container">
          <h4>Hello I'm </h4>
          <h1 className="name">John Margotti</h1>
          <h5><span className="text-1">&#8226; I.T. Project Manager   </span><span className="text-1">&#8226; I.T Systems Manager</span></h5>
          <h5><span className="text-1">&#8226; Full Stack Freelance Developer  </span><span className="text-1">&#8226; Full Stack Developer Instructor</span></h5>
          <h5><span className="text-1">&#8226; Application Manager </span><span className="text-1">&#8226; Automation Workflow Designer</span></h5>
          <h5><span className="text-1">&#8226; Team Leader </span></h5>
          <div className="me-wrapper">
            <img className="me header_container" src="../images/jcover.png" alt="Johns Head Shot" />
          </div>
          <div className="skill-section">
                <h3 className="text-light-about">Skills</h3>
          <h5><span className="text">&#8226; Application Support  </span><span className="text">&#8226; Staff Management/Development</span></h5>
          <h5><span className="text">&#8226; Performance Management  </span><span className="text">&#8226; Technical Documentation</span><span className="text">&#8226; Code Testing</span></h5>
          <h5><span className="text">&#8226; Dev Ops Managment</span><span className="text">&#8226; System Maintenance</span><span className="text">&#8226; Product Development</span><span className="text">&#8226; Workflow managment</span></h5>
            <h5><span className="text">&#8226; IT Managment</span><span className="text">&#8226; Scripting</span><span className="text">&#8226; HTML</span><span className="text">&#8226; CSS</span></h5>
            <h5><span className="text">&#8226; JavaScript</span><span className="text">&#8226; Databases</span><span className="text">&#8226; AWS Cloud</span><span className="text">&#8226; React</span>
            </h5>
          <h5><span className="text">&#8226; React Native</span><span className="text">&#8226; Express</span><span className="text">&#8226; Rest API</span><span className="text">&#8226; Linux</span><span className="text">&#8226; GitHub</span><span className="text">&#8226; Deployment</span><span className="text">&#8226; Instruction</span></h5>
      </div>
        <CTA />
      </div>
    </header>
  );
}

export default Header;

