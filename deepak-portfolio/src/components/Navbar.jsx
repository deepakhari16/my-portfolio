import React from 'react';
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home">DH<span>.</span></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${open ? "show" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-github" href="https://github.com/deepakhari16" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}