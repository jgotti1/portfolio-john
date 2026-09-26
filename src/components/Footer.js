import React from "react";
import { BsArrowUp, BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./footer.css";
import SectionLink from "./SectionLink";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/john-margotti", icon: BsLinkedin },
  { label: "GitHub", href: "https://github.com/jgotti1", icon: BsGithub },
  { label: "Facebook", href: "https://www.facebook.com/john.margotti", icon: BsFacebook },
  { label: "Instagram", href: "https://www.instagram.com/jgotti1", icon: BsInstagram },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__mark" aria-hidden="true">JM</span>
          <p>
            <strong>John Margotti</strong>
            <span>Senior software engineer · Application SME</span>
          </p>
        </div>

        <ul className="site-footer__socials" aria-label="Social media">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="site-footer__meta">
          <p>© {new Date().getFullYear()} John Margotti</p>
          <SectionLink to="home" className="site-footer__top">
            Back to top <BsArrowUp aria-hidden="true" />
          </SectionLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
