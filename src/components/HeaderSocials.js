import React from "react";
import "./headerSocials.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function HeaderSocials() {
  return (
    <>
      <div className="social_head">Social Media Links</div>
      <div className="header_socials">
        <a href="https://www.linkedin.com/in/john-margotti" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/jgotti1">
          <BsGithub />
        </a>
        <a href="https://www.facebook.com/john.margotti" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/jgotti1" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </>
  );
}

export default HeaderSocials;
