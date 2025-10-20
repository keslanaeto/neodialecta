// // src/pages/More.jsx
// import React from "react";
// import "./More.css";

// const More = () => {
//   return (
//     <div className="more-page">
//       {/* Hero Section */}
//       <section className="more-hero">
//         <h1>About NeoDialecta</h1>
//         <p>Connecting people through language and culture.</p>
//       </section>

//       {/* Our Story */}
//       <section className="our-story">
//         <h2>Our Story</h2>
//         <p>
//           NeoDialecta was founded in 2023 by a group of passionate linguists and tech enthusiasts who 
//           believed that learning languages should be accessible to everyone. Starting in a small co-working space, 
//           our team dedicated countless hours to designing interactive courses that combine modern technology with proven 
//           teaching methods. 
//         </p>
//         <p>
//           From humble beginnings, we’ve grown into a thriving platform serving students, professionals, and language 
//           enthusiasts around the globe.
//         </p>
//       </section>

//       {/* Mission & Vision */}
//       <section className="mission-vision">
//         <h2>Our Mission & Vision</h2>
//         <p>
//           Our mission is to make language learning engaging, practical, and effective for everyone. 
//           We envision a world where people can confidently communicate across cultures and break barriers through 
//           language.
//         </p>
//       </section>

//       {/* Collaborations */}
//       <section className="collaborations">
//         <h2>Collaborations & Partners</h2>
//         <p>
//           We collaborate with educational institutions, language experts, and cultural organizations to provide high-quality 
//           content and real-world practice. Some of our current partners include:
//         </p>
//         <ul>
//           <li>Global Language Institute</li>
//           <li>CultureConnect</li>
//           <li>EduTech Labs</li>
//           <li>Community Language Centers</li>
//         </ul>
//       </section>

//       {/* Meet Our Team */}
//       <section className="team">
//         <h2>Meet Our Team</h2>
//         <p>
//           Our diverse team of educators, developers, and designers is committed to helping learners succeed. 
//           We believe in collaboration, innovation, and continuous improvement to make the learning experience 
//           enjoyable and impactful.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default More;

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
