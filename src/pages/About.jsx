// src/pages/About.jsx
import React from "react";
import { FaHistory, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About NeoDialecta</h1>
        <p>Building bridges through language learning worldwide.</p>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <div className="history-content">
          <FaHistory className="icon" />
          <p>
            Founded in 2020, NeoDialecta started as a small home project with the goal of
            making language learning fun, easy, and accessible. Today, we serve thousands
            of students globally and continue to expand our courses and community.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaLightbulb className="icon" />
            <h3>Innovation</h3>
            <p>We create interactive and modern learning experiences for every student.</p>
          </div>
          <div className="value-card">
            <FaHistory className="icon" />
            <h3>Heritage</h3>
            <p>We respect cultural diversity and integrate it into our language courses.</p>
          </div>
          <div className="value-card">
            <FaRocket className="icon" />
            <h3>Growth</h3>
            <p>We empower learners to grow personally and professionally through languages.</p>
          </div>
          <div className="value-card">
            <FaUsers className="icon" />
            <h3>Collaboration</h3>
            <p>We work with experts and institutions to ensure high-quality courses.</p>
          </div>
        </div>
      </section>

      <section className="collaborators-section">
        <h2>Our Collaborators</h2>
        <div className="collaborator-cards">
          <div className="collab-card">Global Language Academy</div>
          <div className="collab-card">LinguaTech Solutions</div>
          <div className="collab-card">International Exchange Programs</div>
          <div className="collab-card">Expert Educators Worldwide</div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Join Our Language Community</h2>
        <p>Start your language journey today and become a confident multilingual communicator!</p>
        <a href="/courses" className="cta-btn">Explore Courses</a>
      </section>
    </div>
  );
};

export default About;
