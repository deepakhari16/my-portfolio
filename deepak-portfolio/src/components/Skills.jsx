import React from 'react';
import { Code2, Globe, Database } from "lucide-react";

const groups = [
  { title: "Programming", icon: Code2, items: ["Java"] },
  { title: "Web development", icon: Globe, items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Database", icon: Database, items: ["MySQL"] },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>Technical <span>Skills</span></h2>
          <p className="section-intro">Technologies I have been learning and using in my projects.</p>
        </div>
        <div className="skill-grid">
          {groups.map(({ title, icon: Icon, items }) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
              <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}