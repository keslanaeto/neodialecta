import React, { useState } from "react";
import { FaHistory, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
import "./About.css";

// Instructor images
import Instructor1 from "../assets/instructors/instrt1.png";
import Instructor2 from "../assets/instructors/instrt2.png";
import Instructor3 from "../assets/instructors/instrt3.png";
import Instructor4 from "../assets/instructors/instrt4.png";
import Instructor5 from "../assets/instructors/instrt5.png";
import Instructor6 from "../assets/instructors/instrt6.png";
import greet from "../assets/flags/greet.png"

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="about-page">

      {/* HERO */}
      {/* <section className="about-hero">
        <h1>About NeoDialecta</h1>
        <img src={greet} alt="Instructor" />
        <p>Building bridges through language learning worldwide.</p>
      </section> */}

<section className="about-hero">
  <div className="hero-text">
    <h1>About NeoDialecta</h1>
    <p>Building bridges through language learning worldwide.</p>
  </div>

  <div className="hero-img-wrapper">
    <img src={greet} alt="greet" />
  </div>
</section>

      {/* TRUST */}
      <section className="trust-stats-section">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Graduated Students</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Languages Offered</p>
        </div>
        <div className="stat-card">
          <h3>30+</h3>
          <p>Partner Institutions</p>
        </div>
      </section>

      {/* HISTORY */}
      <section className="history-section">
        <h2>Our History</h2>
        <div className="history-content">
          <FaHistory className="icon" />
          <p>
          Founded in 2025, NeoDialecta began as a small home project with a simple but powerful mission: to make language learning fun, easy, and accessible to anyone, regardless of their background or location. What started as a single tutor helping a handful of students gradually evolved into a structured learning initiative powered by passion, creativity, and a commitment to educational excellence.
          In the early days, NeoDialecta focused on providing personalized learning experiences through one-on-one sessions and small group classes. As more students joined and word spread beyond our local community, we expanded our teaching methods to include interactive lessons, cultural immersion activities, digital resources, and online learning tools designed for modern learners.
          Today, NeoDialecta serves students across different countries, connecting them with professional instructors, well-designed curriculum paths, and a vibrant global learning community. Our growth has been fueled by a dedication to innovation, cultural appreciation, and the belief that learning a language is not just about speaking—it is about opening doors to new opportunities, building confidence, and connecting with the world in meaningful ways.
          With thousands of successful learners and multiple partner institutions, NeoDialecta continues to evolve, offering high-quality lessons, diverse language programs, and global opportunities that empower students to achieve fluency and transform their futures.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <FaLightbulb className="icon" />
            <h3>Innovation</h3>
            <p>We design modern, engaging learning experiences for all learners.</p>
          </div>

          <div className="value-card">
            <FaHistory className="icon" />
            <h3>Heritage</h3>
            <p>We respect cultural diversity and integrate it into our lessons.</p>
          </div>

          <div className="value-card">
            <FaRocket className="icon" />
            <h3>Growth</h3>
            <p>We empower learners academically, professionally, and socially.</p>
          </div>

          <div className="value-card">
            <FaUsers className="icon" />
            <h3>Collaboration</h3>
            <p>We partner with institutions and educators across the world.</p>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="instructors-section">
        <h2>Meet Our Instructors</h2>
        <p className="section-subtext">
          Certified, experienced, and passionate educators guiding your journey.
        </p>

        <div className="instructors-grid">
          <div className="instructor-card">
            <img src={Instructor1} alt="Instructor" />
            <h3>Dr. Ada Mensah</h3>
            <p>CELTA Certified | 8 Years Experience</p>
          </div>

          <div className="instructor-card">
            <img src={Instructor2} alt="Instructor" />
            <h3>Mr. David Kelly</h3>
            <p>M.A Linguistics | Fluency Coach</p>
          </div>

          <div className="instructor-card">
            <img src={Instructor3} alt="Instructor" />
            <h3>Ms. Maria Gomez</h3>
            <p>B.Ed Language Studies | Cultural Specialist</p>
          </div>

          <div className="instructor-card">
            <img src={Instructor4} alt="Instructor" />
            <h3>Mrs. Chloe Anderson</h3>
            <p>TOEFL/IELTS Expert | 10 Years Experience</p>
          </div>

          <div className="instructor-card">
            <img src={Instructor5} alt="Instructor" />
            <h3>Dr. Samuel Okoro</h3>
            <p>PhD Linguistics | Research Specialist</p>
          </div>

          <div className="instructor-card">
            <img src={Instructor6} alt="Instructor" />
            <h3>Miss Naomi Johnson</h3>
            <p>French & Spanish Tutor | Cultural Coach</p>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="curriculum-section">
        <h2>Course Curriculum Overview</h2>
        <p className="section-subtext">A structured path from beginner to fluent speaker.</p>

        <div className="curriculum-list">
          {[
            {
              title: "Beginner Level — Foundations",
              body: "Basic grammar, pronunciation, vocabulary building, and real-life speaking practice."
            },
            {
              title: "Intermediate Level — Fluency Building",
              body: "Role-play conversations, listening drills, grammar-in-context, and confidence training."
            },
            {
              title: "Advanced Level — Professional & Academic",
              body: "Business speaking, essays, presentations, academic writing, and exam preparation."
            }
          ].map((item, i) => (
            <div key={i} className="curriculum-item">
              <button className="curriculum-btn" onClick={() => toggle(i)}>
                {item.title}
              </button>

              {openIndex === i && <p className="curriculum-body">{item.body}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="collaborators-section">
        <h2>Our Collaborators</h2>

        <div className="collaborator-cards">
          <div className="collab-card">Global Language Academy</div>
          <div className="collab-card">LinguaTech Solutions</div>
          <div className="collab-card">International Exchange Programs</div>
          <div className="collab-card">Worldwide Educators Network</div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Join Our Language Community</h2>
        <p>Unlock opportunities and speak confidently in any language.</p>
        <a href="/courses" className="cta-btn">Explore Courses</a>
      </section>

    </div>
  );
};

export default About;
