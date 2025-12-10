import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import studentph from "../assets/studentph.png";
import FlagEnglish from "../assets/flags/uk.png";
import FlagFrench from "../assets/flags/france.png";
import FlagGerman from "../assets/flags/germany.png";
import FlagSpanish from "../assets/flags/spain.png";

import Footer from "../components/Footer"; // adjust path if your Footer is elsewhere

const courses = [
  { id: "en", title: "English", flag: FlagEnglish, desc: "Improve fluency for work, study & travel." },
  { id: "fr", title: "French", flag: FlagFrench, desc: "Master speaking, reading and cultural context." },
  { id: "de", title: "German", flag: FlagGerman, desc: "Gain practical skills for German-speaking countries." },
  { id: "es", title: "Spanish", flag: FlagSpanish, desc: "Speak naturally and confidently." }
];

const programs = [
  {
    id: "children-1",
    title: "Children 1",
    details: [
      "Age: 6–12 years",
      "Structure: groups of up to 8 or one on one class option",
      "Schedule: 60 minutes – 4 times a week",
      "Course duration: 3 months",
      "Levels: CEFR pre-A1, A1, A2",
      "Location: Online"
    ]
  },

  {
    id: "adults-regular",
    title: "Adults Regular",
    details: [
      "Age: 18+ years",
      "Structure: groups of up to 8",
      "Schedule: 60 minutes – 2 times a week",
      "Course duration: 3 months",
      "Levels: CEFR A1–C2",
      "Location: In-person or Online"
    ]
  },
  {
    id: "adults-intensive",
    title: "Adults Intensive",
    details: [
      "Age: 18+ years",
      "Structure: groups of up to 8",
      "Schedule: 90 minutes – 2 times a week",
      "Course duration: 2 months",
      "Levels: CEFR A1–C2",
      "Location: In-person or Online"
    ]
  },
  {
    id: "perspectives",
    title: 'Perspectives (14–25 yrs)',
    details: [
      "Age: 14–25 years",
      "Structure: groups of up to 8",
      "Schedule: 90 minutes – 2 times a week",
      "Course duration: 9 months",
      "Levels: CEFR B1–C1",
      "Location: In-person"
    ]
  },
 
  {
    id: "exam-prep ",
    title: "Exam Preparation or IELTS",
    details: [
      "Structure: groups class or one on one",
      "Schedule: 60 minutes – as agreed",
      "Course duration: as agreed",
      "Levels: CEFR A1–C2",
      "Location: In-person or Online"
    ]
  }
];

const Home = () => {
  const bookCourse = (title) => {
    window.alert(`Booking request received for: "${title}". We'll contact you shortly.`);
  };

  return (
    <main className="home">
      <section className="hero container">
        <img className="hero-img" src={studentph} alt="Student learning" />
        <div className="hero-text">
          <h1>Welcome to NeoDialecta</h1>
          <p>Your gateway to learning new languages effortlessly and confidently.</p>
          <Link to="/about" className="hero-btn">Learn More About Us</Link>
        </div>
      </section>

      <section className="learning-methods container">
        <h2>Our Learning Methods</h2>
        <p className="lead">Flexible, personalized formats — one-on-one, group, or self-paced.</p>

        <div className="methods-grid">
          <article className="method-card" data-icon="👩‍🏫">
            <h3>Individual Personal Class</h3>
            <p>Personalized lessons focused on your progress and goals.</p>
          </article>

          <article className="method-card" data-icon="👥">
            <h3>Group Learning</h3>
            <p>Small group sessions to practice conversation and teamwork.</p>
          </article>

          <article className="method-card" data-icon="📚">
            <h3>Self-Paced Practice</h3>
            <p>Study with our library of lessons and exercises at your pace.</p>
          </article>
        </div>
      </section>

   
      <section className="value-bullets container">
        <h2>Why Learn With Us</h2>
        <div className="bullets">
          <div className="bullet">🔥 Expert Certified Teachers</div>
          <div className="bullet">🔥 Flexible Scheduling</div>
          <div className="bullet">🔥 Completion Certificates</div>
        </div>
      </section>

 
      <section className="featured-courses container">
        <h2>Featured Courses</h2>

        <div className="courses-grid">
          {courses.map((c) => (
            <article key={c.id} className="course-card">
              <div className="course-flag-wrapper">
                <img className="course-flag" src={c.flag} alt={`${c.title} flag`} />
              </div>
              
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <Link to={`/courses/${c.id}`} className="btn">Learn More</Link>
            </article>
          ))}
        </div>
      </section>

     
      <section className="programmes container" aria-labelledby="programmes-heading">
        <h2 id="programmes-heading">Programmes</h2>
        <p className="lead">Structured plans for children and adults online.</p>

        <div className="program-grid">
          {programs.map((p) => (
            <div className="program-card" key={p.id}>
              <h3>{p.title}</h3>
              <ul className="program-details">
                {p.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <button className="book-btn" onClick={() => bookCourse(p.title)}>BOOK A COURSE</button>
            </div>
          ))}
        </div>
      </section>


      <section className="testimonials container">
        <h2>What Students Say</h2>
        <div className="test-grid">
          <blockquote className="test-card">
            <p>"I became fluent much faster than expected!"</p>
            <footer>- Clara</footer>
          </blockquote>

          <blockquote className="test-card">
            <p>"Their instructors are patient and motivating."</p>
            <footer>- David</footer>
          </blockquote>

          <blockquote className="test-card">
            <p>"Practical, fun lessons — highly recommended."</p>
            <footer>- Maria</footer>
          </blockquote>
        </div>
      </section>

  
      <section className="students-achievements container">
        <h2>Our Students' Success</h2>
        <p className="lead">Thousands have improved their fluency with NeoDialecta.</p>

        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>500+</h3>
            <p>Graduated Students</p>
          </div>
          <div className="achievement-card">
            <h3>50+</h3>
            <p>Languages Offered</p>
          </div>
          <div className="achievement-card">
            <h3>30+</h3>
            <p>Partner Institutions</p>
          </div>
        </div>
      </section>

   
      <section className="cta-section container">
        <h2>Start Your Language Journey Today!</h2>
        <Link to="/signup" className="cta-btn">Sign Up Now</Link>
      </section>
    </main>
  );
};

export default Home;