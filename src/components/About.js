import React from "react";
import "./about.css";
import ME from "../images/john.jpg";

const About = () => {
  return (
    <section id="About">
      <div className="about_container">
        <h2 className="text-light-about">About Me</h2>
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="john" />
          </div>
        </div>
      </div>
      <div className="about_text_div">
        <p className="about_text">
          Husband, father, and grandfather of two little “munchkins”. In my spare time I love to CrossFit, travel, and spend time with my grandkids. I am a recent graduate of the
          New Jersey Institute of Technology full stack developer boot camp program and I have over 25 years of experience in information and technology with a background in
          creative design. I have always had a passion for technology and web page, app developing and decided to make that longtime dream a reality. Whether it’s a simple web site
          or a full stack database app, I would love to help you with your next project. Please don’t hesitate to reach out
        </p>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
