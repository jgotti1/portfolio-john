import React from "react";
import "./headerSocials.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/jgotti1" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/john.margotti" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/jgotti1" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
