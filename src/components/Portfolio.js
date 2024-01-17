import React from "react";
import "./Portfolio.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Projects } from "./Data/Projects";

function Portfolio() {
  return (
    <section>
      <h5 className="offer">Take a Look</h5>
      <h2 className="portfolio_title">Some of my Work</h2>
      <h5 className="call">Call or contact me for help with your next project</h5>
      <div className="container portfolio_container ">
        {/* card section */}

        {Projects.map((project, key) => (
          <article key={key} className="card">
            <div className="card_photo">
              <a href={project.weblink} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.imagealt} />
              </a>
              <h2>{project.title}</h2>
              <p className="try">Click on the image above to try it out.</p>
              <div className="code_link">
                <a className="code_link_icon" target="_blank" rel="noreferrer" href={project.git}>
                  <AiFillGithub />
                </a>
                <a target="_blank" rel="noreferrer" href={project.git} className="code_click">
                  Click here to checkout the source code
                </a>
              </div>
            </div>
            <ul className="details_list">
              <li>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
                <p>
                  Mobile Device Friendly: <strong>&nbsp;&nbsp;{project.mobile}</strong>
                </p>
              </li>
              <li>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
                <p>Language:&nbsp;&nbsp;{project.language}</p>
              </li>
              <li>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
                <p>Project Type:&nbsp;&nbsp;{project.type}</p>
              </li>
              <li>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
                <p>{project.overview} </p>
              </li>
              <li>
                <p>
                  <BsFillArrowRightCircleFill className="portfolio_list-icon" />
                </p>
                <p>{project.description}</p>
              </li>
            </ul>
          </article>
        ))}
        {/* end of card */}
      </div>
      <div className="last_card"></div>
    </section>
  );
}

export default Portfolio;
