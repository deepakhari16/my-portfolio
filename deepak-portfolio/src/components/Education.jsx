import React from 'react';
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MY ACADEMIC BACKGROUND</p>
          <h2>Education</h2>
        </div>
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={25} /></div>
          <div>
            <p className="card-label">CURRENTLY STUDYING</p>
            <h3>Bachelor's degree in Computer Science and Engineering</h3>
            <p className="education-place">Sri Krishna College of Engineering and Technology</p>
            <span className="education-year">2nd Year</span>
          </div>
        </article>
      </div>
    </section>
  );
}