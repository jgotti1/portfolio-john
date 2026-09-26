import React, { useMemo, useState } from "react";
import "./Portfolio.css";
import { BsArrowUpRight, BsCodeSlash, BsPhone } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import { Projects } from "./Data/Projects";

// Derives a filter bucket from the free-text `type` field in Projects.js.
const categoryOf = (project) => {
  const type = (project.type || "").toLowerCase();
  if (type.includes("game")) return "games";
  if (type.includes("mobile")) return "mobile";
  return "web";
};

const filters = [
  { id: "all", label: "All projects" },
  { id: "web", label: "Web apps" },
  { id: "games", label: "Games" },
  { id: "mobile", label: "Mobile" },
];

function ProjectCard({ project }) {
  const technologies = project.language
    ? project.language.split(",").map((technology) => technology.trim())
    : [];
  const mediaClass = `work-card__media${project.imagefit === "contain" ? " work-card__media--contain" : ""}`;
  const mediaStyle = project.imagebg ? { background: project.imagebg } : undefined;
  const image = (
    <img src={project.image} alt={project.imagealt || `${project.title} project preview`} loading="lazy" />
  );

  return (
    <article className="work-card">
      {project.weblink ? (
        <a
          className={mediaClass}
          style={mediaStyle}
          href={project.weblink}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} (live site)`}
        >
          {image}
          <span className="work-card__overlay" aria-hidden="true">
            View live <BsArrowUpRight />
          </span>
        </a>
      ) : (
        <div className={mediaClass} style={mediaStyle}>
          {image}
        </div>
      )}

      <div className="work-card__body">
        <div className="work-card__meta">
          <span>{project.type || "Web project"}</span>
          {project.mobile && project.mobile.toUpperCase() === "YES" && (
            <span className="work-card__mobile">
              <BsPhone aria-hidden="true" /> Mobile ready
            </span>
          )}
        </div>

        <h3>{project.title}</h3>
        {project.overview && <p className="work-card__overview">{project.overview}</p>}
        {project.description && <p className="work-card__description">{project.description}</p>}

        {technologies.length > 0 && (
          <ul className="work-card__tech" aria-label="Technologies used">
            {technologies.map((technology) => (
              <li className="chip" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        )}

        <div className="work-card__actions">
          {project.weblink ? (
            <a className="btn btn--primary btn--sm" href={project.weblink} target="_blank" rel="noreferrer">
              Live project <BsArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            project.availability &&
            (project.availabilityUrl ? (
              <a className="btn btn--primary btn--sm" href={project.availabilityUrl} target="_blank" rel="noreferrer">
                {project.availability} <BsArrowUpRight aria-hidden="true" />
              </a>
            ) : (
              <span className="btn btn--primary btn--sm work-card__availability">{project.availability}</span>
            ))
          )}
          {project.git && (
            <a className="btn btn--secondary btn--sm" href={project.git} target="_blank" rel="noreferrer">
              <AiFillGithub aria-hidden="true" /> Source code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const hasProjects = Projects.length > 0;

  const counts = useMemo(
    () =>
      Projects.reduce(
        (tally, project) => {
          tally[categoryOf(project)] += 1;
          return tally;
        },
        { all: Projects.length, web: 0, games: 0, mobile: 0 }
      ),
    []
  );

  const visible = filter === "all" ? Projects : Projects.filter((project) => categoryOf(project) === filter);

  return (
    <section className="page-section work" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="portfolio-title">Projects built with purpose.</h2>
          </div>
          <p className="section-head__note">
            A growing collection of web experiences, full-stack applications,
            fun games, learning tools, and practical apps that simplify
            workflows and solve real problems.
          </p>
        </Reveal>

        {hasProjects ? (
          <>
            <div className="work__filters" role="group" aria-label="Filter projects">
              {filters
                .filter(({ id }) => counts[id] > 0)
                .map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    className={`work__filter${filter === id ? " is-active" : ""}`}
                    aria-pressed={filter === id}
                    onClick={() => setFilter(id)}
                  >
                    {label}
                    <span>{counts[id]}</span>
                  </button>
                ))}
            </div>

            <div className="work__grid">
              {visible.map((project) => (
                <ProjectCard key={project.id || project.title || project.weblink} project={project} />
              ))}
            </div>
          </>
        ) : (
          <div className="work__empty">
            <span className="work__empty-icon" aria-hidden="true">
              <BsCodeSlash />
            </span>
            <p className="eyebrow">Portfolio refresh in progress</p>
            <h3>New work is on the way.</h3>
            <p>
              I&rsquo;m preparing a new collection of projects and case studies.
              Check back soon to see what I&rsquo;ve been building.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
