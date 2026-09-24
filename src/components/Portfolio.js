import React from "react";
import "./Portfolio.css";
import {
  BsArrowUpRight,
  BsBraces,
  BsCheck2Circle,
  BsCodeSlash,
  BsDatabase,
} from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import {
  SiCss3,
  SiAmazonaws,
  SiBootstrap,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si";
import { Projects } from "./Data/Projects";

const technologyNodes = [
  { label: "React", icon: SiReact, slot: 1, phase: 1 },
  { label: "JavaScript", icon: SiJavascript, slot: 2, phase: 1 },
  { label: "HTML5", icon: SiHtml5, slot: 3, phase: 1 },
  { label: "CSS3", icon: SiCss3, slot: 4, phase: 1 },
  { label: "Node.js", icon: SiNodedotjs, slot: 5, phase: 1 },
  { label: "Git", icon: SiGit, slot: 6, phase: 1 },
  { label: "Python", icon: SiPython, slot: 1, phase: 2 },
  { label: "React Native", icon: SiReact, slot: 2, phase: 2 },
  { label: "Express", icon: SiExpress, slot: 3, phase: 2 },
  { label: "REST APIs", icon: BsBraces, slot: 4, phase: 2 },
  { label: "Bootstrap", icon: SiBootstrap, slot: 5, phase: 2 },
  { label: "AWS", icon: SiAmazonaws, slot: 6, phase: 2 },
  { label: "SQL / NoSQL", icon: BsDatabase, slot: 1, phase: 3 },
  { label: "PostgreSQL", icon: SiPostgresql, slot: 2, phase: 3 },
  { label: "MongoDB", icon: SiMongodb, slot: 3, phase: 3 },
  { label: "Linux + Scripting", icon: SiLinux, slot: 4, phase: 3 },
  { label: "Software Testing", icon: BsCheck2Circle, slot: 5, phase: 3 },
  { label: "AI-Assisted Dev", icon: SiOpenai, slot: 6, phase: 3 },
];

function Portfolio() {
  const hasProjects = Projects.length > 0;

  return (
    <section className="portfolio-page" aria-labelledby="portfolio-title">
      <header className="portfolio-hero">
        <div className="portfolio-hero__copy">
          <p className="portfolio-eyebrow">Selected work</p>
          <h1 id="portfolio-title">Projects built with purpose.</h1>
          <p className="portfolio-intro">
            A growing collection of web experiences, full-stack applications,
            fun games, learning tools, and practical apps that simplify
            workflows and solve real problems.
          </p>
        </div>

        <div className="portfolio-constellation" aria-hidden="true">
          <svg className="portfolio-constellation__lines" viewBox="0 0 720 300" preserveAspectRatio="none">
            <path d="M110 72 L350 150 L595 58" />
            <path d="M110 72 L190 242 L350 150 L535 242 L595 58" />
            <path d="M190 242 L535 242" />
            <path d="M350 150 L675 154" />
            <path d="M350 150 L80 142" />
          </svg>

          <span className="portfolio-constellation__core">
            <small>My toolkit</small>
            <strong>Build · Automate · Ship</strong>
          </span>

          {technologyNodes.map(({ label, icon: Icon, slot, phase }) => (
            <span
              className={`portfolio-constellation__node portfolio-constellation__node--slot-${slot} portfolio-constellation__node--phase-${phase}`}
              key={label}
            >
              <Icon />
              <span>{label}</span>
            </span>
          ))}
        </div>
      </header>

      {hasProjects ? (
        <div className="portfolio-grid">
          {Projects.map((project) => {
            const technologies = project.language
              ? project.language.split(",").map((technology) => technology.trim())
              : [];
            const projectKey = project.id || project.title || project.weblink;
            const imageLinkClass =
              project.imagefit === "contain"
                ? "project-card__image-link project-card__image-link--contain"
                : "project-card__image-link";
            const imageLinkStyle = project.imagebg ? { background: project.imagebg } : undefined;
            const image = (
              <img
                className="project-card__image"
                src={project.image}
                alt={project.imagealt || `${project.title} project preview`}
              />
            );

            return (
              <article key={projectKey} className="project-card">
                {project.weblink ? (
                  <a
                    className={imageLinkClass}
                    style={imageLinkStyle}
                    href={project.weblink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                  >
                    {image}
                    <span className="project-card__image-action" aria-hidden="true">
                      View project <BsArrowUpRight />
                    </span>
                  </a>
                ) : (
                  <div className={imageLinkClass} style={imageLinkStyle}>
                    {image}
                  </div>
                )}

                <div className="project-card__content">
                  <div className="project-card__meta">
                    <span>{project.type || "Web project"}</span>
                    {project.mobile && (
                      <span className="project-card__mobile">
                        {project.mobile.toUpperCase() === "YES" ? "Mobile ready" : "Desktop experience"}
                      </span>
                    )}
                  </div>

                  <h2>{project.title}</h2>
                  {project.overview && <p className="project-card__overview">{project.overview}</p>}
                  {project.description && <p className="project-card__description">{project.description}</p>}

                  {technologies.length > 0 && (
                    <ul className="project-card__tech" aria-label="Technologies used">
                      {technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-card__actions">
                    {project.weblink ? (
                      <a href={project.weblink} target="_blank" rel="noreferrer">
                        Live project <BsArrowUpRight aria-hidden="true" />
                      </a>
                    ) : (
                      project.availability &&
                      (project.availabilityUrl ? (
                        <a href={project.availabilityUrl} target="_blank" rel="noreferrer">
                          {project.availability} <BsArrowUpRight aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="project-card__availability">{project.availability}</span>
                      ))
                    )}
                    {project.git && (
                      <a className="project-card__source" href={project.git} target="_blank" rel="noreferrer">
                        <AiFillGithub aria-hidden="true" /> Source code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="portfolio-empty">
          <span className="portfolio-empty__icon" aria-hidden="true">
            <BsCodeSlash />
          </span>
          <p className="portfolio-empty__label">Portfolio refresh in progress</p>
          <h2>New work is on the way.</h2>
          <p>
            I&rsquo;m preparing a new collection of projects and case studies.
            Check back soon to see what I&rsquo;ve been building.
          </p>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
