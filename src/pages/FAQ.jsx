import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is NeoDialecta?",
    answer:
      "NeoDialecta is an innovative language learning platform that helps learners build confidence through personalized lessons, interactive sessions, and real-world practice.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply create an account, browse through our available courses, and click ‘Enroll Now’. You can start learning immediately after registration.",
  },
  {
    question: "Do you offer one-on-one classes?",
    answer:
      "Yes! We provide personalized one-on-one classes where you learn directly with a professional tutor based on your goals and schedule.",
  },
  {
    question: "Can I learn multiple languages at once?",
    answer:
      "Absolutely. You can enroll in more than one course and switch between them seamlessly using your learning dashboard.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a free trial period that allows you to explore our platform, test lessons, and experience our teaching style before committing.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p>
        Find quick answers to the most common questions about NeoDialecta and our language programs.
      </p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
