import React, { useState } from "react";
import { Link } from "react-router-dom";

const ThirdProgram = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the duration of the Billionaire Blueprint program?",
      answer:
        "The program runs for six months, with options for extended public company formation support.",
    },
    {
      question: "Do I need prior business experience to join?",
      answer:
        "No prior experience is needed, but a passion for business growth strategies is essential.",
    },
    {
      question: "What stages of business growth are covered?",
      answer:
        "We cover every stage, from startup formation to scaling public companies.",
    },
    {
      question:
        "How does this program prepare me for public company formation?",
      answer:
        "You’ll learn the strategic, legal, and financial steps required to launch a public limited company.",
    },
    {
      question: "Will there be networking opportunities?",
      answer:
        "Yes, including events with investment bankers and other key players in public company leadership.",
    },
    {
      question: "Is this program available for international participants?",
      answer:
        "Yes, international business leaders are welcome to join the Billionaire Blueprint.",
    },
    {
      question: "Can I apply if my goal is a private company?",
      answer:
        "Yes, the business growth skills are valuable for both public and private companies.",
    },
    {
      question: "What kind of support is offered after graduation?",
      answer:
        "Graduates gain access to ongoing business leadership mentorship and networking.",
    },
    {
      question: "Are there investment training modules?",
      answer:
        "Yes, the program includes extensive modules on investment readiness and corporate finance.",
    },
    {
      question: "How will this help me attract investors?",
      answer:
        "You’ll learn the strategies and skills to appeal directly to investment bankers and angel investors.",
    },
  ];

  return (
    <div className="bg-main-light min-h-screen py-16 px-6 sm:px-12 lg:px-20">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center justify-center bg-[url('./assets/images/Blueprint.jpg')]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/10"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 md:px-8 lg:px-16 text-main-light">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-barlow font-extrabold leading-tight mb-4 sm:mb-6 lg:mb-3 animate-slide-in text-main-green">
            Billionaire Blueprint
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl font-aeonik leading-relaxed animate-fade-in">
            Mastering the Art of Building Billion-Dollar Companies
          </p>

          {/* Call-to-Action Button */}
          <Link to="/" className="text-decoration-none">
            <div className="mt-6 sm:mt-10 lg:mt-6">
              <button className="inline-block bg-main-green text-main-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-lg font-bold shadow-lg hover:bg-accent-blue hover:text-main-light">
                Back To Home
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-aeonik leading-relaxed lg:mt-12 mb-8 animate-fade-in-delay">
        The Billionaire Blueprint program takes participants through the
        essential steps to public company formation and scaling businesses from
        start-up to billion-dollar success. This program dives into business
        growth strategies, corporate finance, and investment readiness. Designed
        for ambitious entrepreneurs, it builds a solid foundation in all aspects
        of business, preparing participants to attract investors and develop
        companies with a strong ethical framework.
      </p>

      {/* FAQs Section */}
      <div className="max-w-5xl mt-16 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-barlow font-extrabold text-main-dark mb-8 text-center animate-slide-in">
          FAQs for Billionaire Blueprint
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-main-green mb-4 shadow-md hover:shadow-lg rounded-xl transition-all duration-300 animate-fade-in"
          >
            {/* Question */}
            <div
              onClick={() => toggleFaq(index)}
              className="cursor-pointer flex justify-between items-center p-4 sm:p-6 text-main-dark font-barlow font-bold text-lg sm:text-xl lg:text-2xl"
            >
              {faq.question}
              <span className="text-xl sm:text-2xl font-bold">
                {activeFaq === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            {activeFaq === index && (
              <div className="p-4 sm:p-6 border-t text-text-color font-aeonik text-base sm:text-lg leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdProgram;
