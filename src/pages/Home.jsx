import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to NeoDialecta</h1>
        <p>Your gateway to learning new languages effortlessly and confidently.</p>
        <Link to="/more" className="hero-btn">Learn More About Us</Link>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>English</h3>
            <p>Improve your English reading, writing, and speaking skills with our structured course.</p>
            <Link to="/courses/english" className="btn">Learn More</Link>
          </div>
          <div className="course-card">
            <h3>French</h3>
            <p>Start speaking French with confidence using our interactive lessons and exercises.</p>
            <Link to="/courses/french" className="btn">Learn More</Link>
          </div>
          <div className="course-card">
            <h3>German</h3>
            <p>Master German grammar and vocabulary through engaging and practical lessons.</p>
            <Link to="/courses/german" className="btn">Learn More</Link>
          </div>
          <div className="course-card">
            <h3>Spanish</h3>
            <p>Enhance your Spanish skills with our fun and easy-to-follow lessons for all levels.</p>
            <Link to="/courses/spanish" className="btn">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="students-achievements">
        <h2>Our Students' Success</h2>
        <p>Thousands of students have improved their skills and achieved fluency with NeoDialecta.</p>
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
            <p>Collaborating Institutions</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Language Journey Today!</h2>
        <Link to="/signup" className="btn cta-btn">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default Home;
