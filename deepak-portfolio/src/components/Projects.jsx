import React from 'react';
import { ExternalLink, Github, FolderCode } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI Knee Analysis System",
    description: "A project focused on applying AI to support the analysis of knee medical images. The project explores how image analysis can help organize information for review.",
    stack: ["AI", "Web Development"],
    github: "https://github.com/deepakhari16",
  },
  {
    number: "02",
    title: "Login and Registration Website",
    description: "A web project with separate login and registration interfaces, built to practise form handling, page navigation, and basic frontend development.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/deepakhari16",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SOME THINGS I'VE BUILT</p>
          <h2>Featured <span>Projects</span></h2>
          <p className="section-intro">A selection of projects I have worked on while learning and practising development.</p>
        </div>
        <div className="project-grid">
          {projects.map(project => (
            <article className="project-card" key={project.number}>
              <div className="project-top"><FolderCode size={25} /><span>{project.number}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="skill-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub profile <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
        <p className="small-note">Project links currently point to my GitHub profile. Individual repository links can be added when available.</p>
      </div>
    </section>
  );
}