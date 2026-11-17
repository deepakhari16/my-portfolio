import React from 'react';
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Deepak Hari V. Built with React.</p>
        <a href="#home" aria-label="Back to top">Back to top <ArrowUp size={15} /></a>
      </div>
    </footer>
  );
}