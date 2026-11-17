import React from 'react';
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container contact-container">
        <div className="section-heading">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's <span>Connect</span></h2>
          <p className="section-intro">Feel free to reach out for conversations, learning opportunities, or collaboration.</p>
        </div>
        <div className="contact-card">
          <a href="mailto:deepakhari.in@gmail.com" className="contact-item">
            <span className="contact-icon"><Mail /></span>
            <span><small>EMAIL</small><strong>deepakhari.in@gmail.com</strong></span>
            <Send className="contact-arrow" size={18} />
          </a>
          <a href="https://github.com/deepakhari16" target="_blank" rel="noreferrer" className="contact-item">
            <span className="contact-icon"><Github /></span>
            <span><small>GITHUB</small><strong>github.com/deepakhari16</strong></span>
            <Send className="contact-arrow" size={18} />
          </a>
          <div className="contact-item contact-item-muted">
            <span className="contact-icon"><Linkedin /></span>
            <span><small>LINKEDIN</small><strong>Profile link not added yet</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}