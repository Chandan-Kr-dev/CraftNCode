// src/FAQAccordion.js

import React, { useState } from 'react';

const FAQAccordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-question" onClick={toggleAccordion}>
                <h4>{question}</h4>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-answer"><p className='text-slate-500'>{answer}</p></div>}
        </div>
    );
};

export default FAQAccordion;
