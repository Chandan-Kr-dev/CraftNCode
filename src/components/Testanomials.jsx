import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import User1 from '../assets/images/user1.webp'
import User2 from '../assets/images/user2.webp'
import User3 from '../assets/images/user3.jpeg'
import User4 from '../assets/images/user4.webp'
import User5 from '../assets/images/user5.webp'
import User6 from '../assets/images/user6.jpeg'
import User7 from '../assets/images/user7.jpeg'
import User8 from '../assets/images/user8.jpeg'
import User9 from '../assets/images/user9.png'



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      id: 1,
      name: " Anjali Sharma",
      role: "Senior Data Scientist, Google India",
      image: User7,
      text: "This application is a game-changer for fact-checking in India! I frequently encounter code-mixed language in everyday communication, and this tool handles Hindi-English sentences seamlessly, ensuring that the facts I deal with are always accurate and reliable."
    },
    {
      id: 2,
      name: "Rohan Deshmukh",
      role: "Product Manager, Microsoft India",
      image: User1,
      text: "I work with teams across different regions, and verifying information in multiple languages used to be a challenge. With this app, cross-language verification has become so much smoother, especially for code-mixed languages. It's saved me hours of manual effort!"
    },
    {
      id: 3,
      name: "Priya Nair",
      role: "Marketing Lead, CocaCola India",
      image:User2,
      text: "In marketing, it’s crucial to have the right information, no matter the language. This app’s support for code-mixed languages like Hindi-English has made fact-checking far easier, giving us confidence in the accuracy of the data we rely on."
    },
    {
      id: 4,
      name: "Amit Patel",
      role: "Senior Software Engineer, Infosys",
      image: User3,
      text: "The multi-language fact-checking feature is impressive, especially when dealing with different dialects and mixed languages in India. It has drastically improved the quality and speed of our work. I highly recommend it to anyone working in a multilingual environment."
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "UX Designer",
      image: User5,
      text: "Handling regional projects often requires quick verification across languages, and this application has simplified the process. The accuracy with code-mixed sentences is particularly helpful in our day-to-day tasks."
    },
    {
      id: 6,
      name: "Rahul Verma",
      role: "Legal Advisor, Deloitte India",
      image: User4,
      text: "Verifying the authenticity of legal documents and information across multiple languages can be tricky. This app handles everything effortlessly, especially when it comes to code-mixed languages, making legal work much more streamlined."
    },
    {
      id: 7,
      name: "Shreya Mehta",
      role: "UX Designer, IBM India",
      image: User6,
      text: "As a UX designer, understanding language nuances is key. This application’s ability to verify facts across multiple languages, especially code-mixed ones, is nothing short of revolutionary. It helps us create more inclusive designs."
    },
    {
      id: 8,
      name: "Vikram Singh",
      role: "Senior Analyst, Accenture India",
      image: User9,
      text: "Fact-checking multilingual reports and presentations used to be cumbersome. This app has made that process almost instant. Its support for mixed languages like Hindi-English has been incredibly useful for my team."
    },
    {
      id: 9,
      name: "Divya Reddy",
      role: "HR Business Partner, Wipro",
      image: User8,
      text: "For HR, dealing with employees across various regions means managing multilingual data. This app’s ability to verify information in code-mixed languages has been a great asset for our work, improving both accuracy and efficiency"
    }
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 testanomials">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl my-4 mt-6 py-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">What Our Users Say</h2>
        <p className="text-gray-400">Trusted by More than 1000+ User</p>
      </div>
      
      <div className="relative">
        <div className="flex gap-6 transition-all duration-300" 
             style={{
               transform: `translateX(-${currentIndex * 33.33}%)`,
               transition: 'transform 0.5s ease-in-out'
             }}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[calc(33.33%-1rem)]  rounded-lg shadow-lg p-6 flex flex-col testanomial-card"
            >
              <Quote className="text-blue-500 mb-4 h-4 w-4" />
              <p className="text-gray-600 mb-4  flex-grow testanomial-text">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold testanomial-name">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm -testanomial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: testimonials.length - 2 }, (_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;