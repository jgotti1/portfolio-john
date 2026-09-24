import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./header.css";
import CTA from "./CTA";
import HeroTerminal from "./HeroTerminal";

const professionalFocus = [
  "Senior Software Engineer",
  "Application Development",
  "Production System Workflows",
];

const skillGroups = [
  {
    title: "Development",
    skills: [
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "REST APIs",
      "Bootstrap",
      "AI-assisted development",
    ],
  },
  {
    title: "Data & Cloud",
    skills: [
      "SQL & NoSQL databases",
      "PostgreSQL",
      "MongoDB",
      "AWS cloud deployment",
    ],
  },
  {
    title: "Systems & DevOps",
    skills: [
      "Linux",
      "Git",
      "Scripting",
      "Application support",
      "System maintenance",
      "Software testing",
      "Production workflows",
    ],
  },
  {
    title: "Leadership",
    skills: [
      "Team leadership",
      "Staff development",
      "Performance management",
      "Project management",
      "Technical documentation",
      "Curriculum development",
    ],
  },
];

function Header() {
  return (
    <header className="home-page">
      <div className="home-page__glow home-page__glow--left" aria-hidden="true" />
      <div className="home-page__glow home-page__glow--right" aria-hidden="true" />

      <div className="home-page__container">
        <div className="home-layout">
          <section className="home-hero">
            <div className="home-hero__copy">
              <ul className="home-focus" aria-label="Professional focus">
                {professionalFocus.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </div>
          </section>

          <div className="home-identity">
            <p className="home-eyebrow">Hello, I&apos;m</p>
            <h1 id="home-title">John Margotti</h1>
          </div>

          <HeroTerminal />

          <div className="home-primary">
            <figure className="home-portrait">
              <div className="home-portrait__frame">
                <img
                  src="../images/jcover.png"
                  alt="John Margotti holding a camera with his granddaughter"
                />
                <figcaption className="home-portrait__caption">
                  <strong>30+ years</strong>
                  <span>Engineering & production system workflows</span>
                </figcaption>
              </div>
            </figure>

            <div className="home-hero__details">
              <p className="home-intro">
                I&apos;m a senior software engineer at Dow Jones, serving as the
                application subject matter expert and lead engineer. I pair
                hands-on engineering with the leadership to move complex work
                forward.
              </p>
              <p className="home-intro">
                Behind that are 30+ years in 24/7 publishing environments,
                including nearly 30 at Advance Local, where I supported and
                managed production systems, automated workflows, led code
                rollouts, and managed the team. Alongside that work, I
                completed the NJIT full-stack boot camp, freelanced building
                web and mobile apps (including apps published to the Apple App
                Store), designed a new AI Software Developer curriculum at
                ThriveDX, and taught full-stack development in university boot
                camps nationwide.
              </p>
              <p className="home-intro">
                I&apos;m currently pursuing an accelerated bachelor&apos;s and
                master&apos;s in Software Engineering. Passionate about
                technology and web and app
                development, I&apos;m also a husband, father, and grandfather of
                two little &ldquo;munchkins,&rdquo; and I enjoy CrossFit,
                traveling, and time with my grandkids.
              </p>
            </div>
          </div>

          <section className="home-skills" aria-labelledby="home-skills-title">
            <div className="home-skills__heading">
              <div>
                <p className="home-eyebrow">How I contribute</p>
                <h2 id="home-skills-title">Technical & leadership toolkit</h2>
              </div>
              <p>
                A career-spanning mix of software development, production
                support, cloud delivery, and team leadership.
              </p>
            </div>

            <div className="home-skills__grid">
              {skillGroups.map(({ title, skills }) => (
                <article className="home-skill-card" key={title}>
                  <div className="home-skill-card__title">
                    <BsCheck2Circle aria-hidden="true" />
                    <h3>{title}</h3>
                  </div>
                  <ul>
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="home-footer-cta">
          <CTA />
        </div>
      </div>
    </header>
  );
}

export default Header;
