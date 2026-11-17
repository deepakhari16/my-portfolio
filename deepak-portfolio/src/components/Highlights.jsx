import React from 'react';
import { Award, Trophy } from "lucide-react";

export default function Highlights() {
  return (
    <section className="section" id="highlights">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">LEARNING OUTSIDE THE CLASSROOM</p>
          <h2>Certifications & <span>Activities</span></h2>
        </div>
        <div className="highlight-grid">
          <article className="highlight-card">
            <div className="highlight-icon"><Award /></div>
            <div><h3>MongoDB Certification</h3><p>Completed a MongoDB certification. The exact certificate title and credential link can be added here.</p></div>
          </article>
          <article className="highlight-card">
            <div className="highlight-icon"><Trophy /></div>
            <div><h3>Hackathon Participation</h3><p>Participated in Nexora Hackathon and Thirive Hackathon.</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}