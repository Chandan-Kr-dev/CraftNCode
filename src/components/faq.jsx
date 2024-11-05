// src/FAQSection.js

import React from 'react';
import FAQAccordion from './faqcard';

const FAQSection = () => {
  const faqs = [
    { question: "How many badges are available", answer: "There are 3 Badges available" },
    { question: "What are the Badges?", answer: "The Badges are Explorer , NightOwl , Batman" },
    { question: "When will I get the Explorer Badge?", answer: "One will get the Explorer Badge after a Streak of 3" },
    { question: "When will I get the NightOwl Badge?", answer: "One will get the NightOwl Badge after a Streak of 5" },
    { question: "When will I get the BatMan Badge?", answer: "One will get the BatMan Badge after a Streak of 5." },
    { question: "Can I share these badges in Social Media?", answer: "Yes , One can share the badges in Social Media." },
  ];

  return (
    <>
    <div className="faq-section">
      <h2 className='text-4xl lg:text-5xl  mt-12 py-3 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent  text-center'>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
    <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center mb-6">
            © 2024 TrueMix, Inc. All rights reserved.
          </p>
        </div>
    </>
  );
};

export default FAQSection;
