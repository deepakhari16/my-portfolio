import React from 'react';
import { ArrowDown, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE ENGINEERING STUDENT</p>
          <h1>Hi, I'm <span>Deepak Hari V</span></h1>
          <h2>Learning, building, and exploring technology.</h2>
          <p className="hero-description">
            I'm a second-year CSE student interested in full-stack development
            and learning how new technologies can be used to build useful applications.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my projects <ArrowDown size={17} /></a>
            <a className="button button-outline" href="mailto:deepakhari.in@gmail.com"><Mail size={17} /> Contact me</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/deepakhari16" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href="mailto:deepakhari.in@gmail.com"><Mail size={18} /> Email</a>
          </div>
        </div>
        <div className="hero-card-wrap">
          <div className="hero-card">
            <div className="avatar">DH</div>
            <p className="card-label">CURRENT FOCUS</p>
            <h3>Full-stack development</h3>
            <p>Building a strong foundation in web technologies, programming, and databases.</p>
            <div className="mini-tags"><span>React</span><span>JavaScript</span><span>MySQL</span></div>
          </div>
          <div className="decor decor-one" />
          <div className="decor decor-two" />
        </div>
      </div>
    </section>
  );
}