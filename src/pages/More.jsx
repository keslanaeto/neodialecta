import React from "react";
import { FaUsers, FaHistory, FaRocket } from "react-icons/fa";
import "./More.css";

const More = () => {
  return (
    <div className="more-page">

      {/* Hero Section */}
      <section className="more-hero">
        <h1>About NeoDialecta</h1>
        <p>Learn about our journey, mission, and the people behind our success.</p>
      </section>

      {/* History Section */}
      <section className="more-section history">
        <div className="section-icon">
          <FaHistory />
        </div>
        <h2>Our History</h2>
        <p>
          Founded in 2020, NeoDialecta has grown from a small home startup into 
          an international language learning platform. Thousands of students 
          worldwide have improved their skills with our courses.
        </p>
        <div className="section-image history-img"></div>
      </section>

      {/* Startup Story */}
      <section className="more-section startup">
        <div className="section-icon">
          <FaRocket />
        </div>
        <h2>Our Startup Story</h2>
        <p>
          We started as a group of passionate language enthusiasts aiming to make 
          learning languages easy, interactive, and accessible. Today, we have a 
          team of skilled educators, developers, and content creators dedicated 
          to your success.
        </p>
        <div className="section-image startup-img"></div>
      </section>

      {/* Collaborators */}
      <section className="more-section collaborators">
        <div className="section-icon">
          <FaUsers />
        </div>
        <h2>Our Collaborators</h2>
        <p>
          We partner with renowned educational institutions, tech companies, and 
          language experts to provide the best experience. Key collaborators include:
        </p>
        <ul>
          <li>Global Language Academy</li>
          <li>LinguaTech Solutions</li>
          <li>International Cultural Exchange Programs</li>
          <li>Expert language educators from Europe and America</li>
        </ul>
        <div className="section-image collaborators-img"></div>
      </section>

      {/* Call-to-Action */}
      <section className="more-cta">
        <h2>Join Our Language Community</h2>
        <p>Start your language journey today and become a confident multilingual communicator!</p>
        <a href="/courses" className="cta-btn">Explore Courses</a>
      </section>

    </div>
  );
};

export default More;
