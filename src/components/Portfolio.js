import React from "react";
import "./Portfolio.css";
import { BsArrowUpRight, BsCodeSlash } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Projects } from "./Data/Projects";

function Portfolio() {
  const hasProjects = Projects.length > 0;

  return (
    <section className="portfolio-page" aria-labelledby="portfolio-title">
      <header className="portfolio-hero">
        <p className="portfolio-eyebrow">Selected work</p>
        <h1 id="portfolio-title">Projects built with purpose.</h1>
        <p className="portfolio-intro">
          A growing collection of web experiences, full-stack applications, and
          practical tools designed to solve real problems.
        </p>
      </header>

      {hasProjects ? (
        <div className="portfolio-grid">
          {Projects.map((project) => {
            const technologies = project.language
              ? project.language.split(",").map((technology) => technology.trim())
              : [];
            const projectKey = project.id || project.title || project.weblink;

            return (
              <article key={projectKey} className="project-card">
                <a
                  className="project-card__image-link"
                  href={project.weblink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title}`}
                >
                  <img
                    className="project-card__image"
                    src={project.image}
                    alt={project.imagealt || `${project.title} project preview`}
                  />
                  <span className="project-card__image-action" aria-hidden="true">
                    View project <BsArrowUpRight />
                  </span>
                </a>

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
                    {project.weblink && (
                      <a href={project.weblink} target="_blank" rel="noreferrer">
                        Live project <BsArrowUpRight aria-hidden="true" />
                      </a>
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
