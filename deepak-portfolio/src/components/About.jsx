import React from 'react';
import { Code2, Lightbulb, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>About <span>Me</span></h2>
        </div>
        <div className="about-layout">
          <p className="about-text">
            I'm Deepak Hari V, a Computer Science Engineering student at Sri Krishna
            College of Engineering and Technology. I'm interested in full-stack
            development and enjoy learning new technologies. I’m currently developing
            my programming and web development skills through coursework and personal projects.
          </p>
          <div className="about-points">
            <div className="info-card"><Code2 /><div><h3>Development</h3><p>Interested in building web applications.</p></div></div>
            <div className="info-card"><Lightbulb /><div><h3>Learning mindset</h3><p>Exploring tools and technologies step by step.</p></div></div>
            <div className="info-card"><GraduationCap /><div><h3>Education</h3><p>Second-year Computer Science Engineering student.</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}