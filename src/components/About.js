import React from "react";
import "./about.css";


const About = () => {
  return (
    <section id="About" className="infinite-scroll">
      <div className="about_container">
        <h2 className="text-light-about">About Me</h2>
        <div className="about_me">
          <div className="about_me_img">
            <img src="../images/john1.jpg"  alt="john" />
          </div>
        </div>
      </div>
      <div className="about_text_div">
        <p className="about_text">&#8226; Dedicated professional with 30 plus years of expertise in managing  I.T. support teams, workflows, team development, 24/7 application support/end user training, as well as project management.  Skilled in developing and maintaining system applications and workflows as well as overseeing various system teams across the enterprise for a major national publishing company.</p>
        <p className="about_text">&#8226; Recently, I have expanded my skill set to include Full Stack Development, taking on freelance projects where I design and implement comprehensive solutions. Additionally, I contribute to the education sector by serving as an instructor for Full Stack Development in various university boot camps across the country.</p>
        <p className="about_text" >&#8226; Husband, father, and grandfather of two little “munchkins”. In my spare time, I enjoy CrossFit, traveling, and spending quality moments with my grandkids. I am passionate about technology and web/app development.</p>
      </div>
    
    </section>
  );
};

export default About;
