import React from "react";
import { BsBroadcast, BsCodeSlash, BsPeople } from "react-icons/bs";
import "./profile.css";
import Reveal from "./Reveal";

// Drawn from the bio below; keep them true to the resume.
const focusAreas = [
  {
    icon: BsCodeSlash,
    title: "Application development",
    text: "Hands-on engineering across web and mobile, from React and React Native front ends to Node.js and Python back ends.",
  },
  {
    icon: BsBroadcast,
    title: "Production system workflows",
    text: "Decades supporting 24/7 publishing systems: automating repetitive tasks, leading code rollouts, and keeping production running.",
  },
  {
    icon: BsPeople,
    title: "Leadership & teaching",
    text: "Managed the team, designed a new AI Software Developer curriculum, and taught full-stack development in university boot camps.",
  },
];

function Profile() {
  return (
    <section className="page-section page-section--tinted profile" id="about" aria-labelledby="about-title">
      <div className="container profile__grid">
        <Reveal className="profile__story">
          <p className="eyebrow">About</p>
          <h2 id="about-title">
            Engineer, leader, and <span className="text-gradient">lifelong learner.</span>
          </h2>
          <div className="profile__bio">
            <p className="profile__lead">
              I&apos;m a senior software engineer and the application subject
              matter expert for a major national media organization, pairing
              hands-on engineering with the leadership to move complex work
              forward.
            </p>
            <p>
              Behind that are 30+ years in 24/7 publishing environments, where I
              supported production system workflows, automated repetitive
              tasks, led code rollouts, and managed the team. Alongside that
              work, I completed a full-stack developer boot camp, freelanced
              building web and mobile apps (including apps published to the
              Apple App Store), designed a new AI Software Developer curriculum,
              and taught full-stack development in university boot camps
              nationwide.
            </p>
            <p>
              I&apos;m currently pursuing an accelerated bachelor&apos;s and
              master&apos;s in Software Engineering. Passionate about technology
              and web and app development, I&apos;m also a husband, father, and
              grandfather of two little &ldquo;munchkins,&rdquo; and I enjoy
              CrossFit, traveling, and time with my grandkids.
            </p>
          </div>
        </Reveal>

        <ul className="profile__focus" aria-label="Focus areas">
          {focusAreas.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="li" className="profile__card" key={title} delay={index * 100}>
              <span className="profile__icon" aria-hidden="true">
                <Icon />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Profile;
