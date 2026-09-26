import React from "react";
import { BsCloudArrowUp, BsCodeSlash, BsPeople, BsTerminal } from "react-icons/bs";
import "./toolkit.css";
import Reveal from "./Reveal";

// Resume-backed skills; update alongside the technical skills in Resume.pdf.
const skillGroups = [
  {
    title: "Development",
    icon: BsCodeSlash,
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
    icon: BsCloudArrowUp,
    skills: ["SQL & NoSQL databases", "PostgreSQL", "MongoDB", "AWS cloud deployment"],
  },
  {
    title: "Systems & DevOps",
    icon: BsTerminal,
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
    icon: BsPeople,
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

function Toolkit() {
  return (
    <section className="page-section toolkit" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title">Technical &amp; leadership toolkit</h2>
          </div>
          <p className="section-head__note">
            A career-spanning mix of software development, production support,
            cloud delivery, and team leadership.
          </p>
        </Reveal>

        <div className="toolkit__grid">
          {skillGroups.map(({ title, icon: Icon, skills }, index) => (
            <Reveal as="article" className="toolkit__card" key={title} delay={index * 90}>
              <div className="toolkit__card-head">
                <span className="toolkit__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <span className="toolkit__count">{skills.length}</span>
              </div>
              <ul>
                {skills.map((skill) => (
                  <li className="chip" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Toolkit;
