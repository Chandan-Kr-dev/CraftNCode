import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import { MdImageSearch } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import Explore1 from '../assets/images/explore1.png'
import Explore2 from '../assets/images/explore2.png'
import Explore3 from '../assets/images/explore3.png'
import Explore4 from '../assets/images/explore4.png'


const StepsToUpload = () => {
  return (
    <>
      <Navbar />
      <div className="relative text-white py-10 px-6 ">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-purple-400 mb-16 mt-6">
          Bridging Languages, Uniting Truth !
        </h1>


        {/* Curved Line SVG */}
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 z-0 "
          width="100%"
          height="400"
          viewBox="0 0 1000 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 100 C 300 200, 700 200, 950 100"
            stroke="#8b5cf6"
            strokeWidth="6"
            fill="transparent"
          />
          <path
            d="M50 300 C 300 200, 700 200, 950 300"
            stroke="#8b5cf6"
            strokeWidth="6"
            fill="transparent"
          />
        </svg>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 z-10 mt-24 ml-12 mr-12">
          {/* Step 1 */}
          <div className="text-center p-6 bg-black rounded-lg border-2 border-purple-400 max-w-sm">
            <div className="text-4xl mb-4 text-purple-400">1</div>
            <MdImageSearch className="text-5xl text-purple-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Detecting the Language</h3>
            <p className="text-gray-300 mt-4 p-4 ">
              We detect the language entered by the USER and even CODE-MIXED language like ( Hindi-English).
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-6 bg-black rounded-lg border-2 border-purple-400 max-w-sm">
            <div className="text-4xl mb-4 text-purple-400">2</div>
            <FaLanguage className="text-5xl text-purple-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 -mt-2">Translate the Language</h3>
            <p className="text-gray-300">
              After Detecting the Language , we Convert the Language to a STANADRD language for each and every Input .
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-6 bg-black rounded-lg border-2 border-purple-400 max-w-sm">
            <div className="text-4xl mb-4 text-purple-400">3</div>
            <RiVerifiedBadgeFill className="text-5xl text-purple-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Verifying the Fact</h3>
            <p className="text-gray-300 p-4 mt-4">
              After Translation , the Fact entered by the User is VERIFIED seamlessly from our Backend Server.
            </p>
          </div>
        </div>
      </div>


      {/*NEXT SECTION OF FEATURES*/}

      <div className=" text-white py-10 px-6 relative ">
        {/* 1st Feature */}
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-white">TruthMate - Our AI ChatBot</h2>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0">

          <div className="bg-black p-6 rounded-lg border border-purple-400 max-w-2xl h-48 items-center align-middle justify-center flex">
            <p>
              TruthMate - Our Own Personalized AI Chatbot. Use our Chatbot to answer any of your Doubts and get solution in a Fraction of section . You can also cross verify the Facts using Our Chatbot for getting more Accuracy of the Fact.
            </p>
          </div>

          <div className="flex-shrink-0 ">
            <img src={Explore1} alt="Firefighter Illustration" className="w-96 h-96 object-contain ml-6" />
          </div>
        </div>


        {/* 2nd Feature */}
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-white">Read Global News & Facts </h2>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0">

          <div className="flex-shrink-0  ">
            <img src={Explore2} alt="Firefighter Illustration" className="w-96 h-96 object-contain mr-24" />
          </div>

          <div className="bg-black p-6 rounded-lg border border-purple-400 max-w-2xl h-48 items-center align-middle justify-center flex ">
            <p>
              How about Getting News , Reading Facts and Verifying the Authencity of the News and Facts at the same Time ??  Read News and Global Facts in your Preffered Language regarding any Topic like Sports , Entertainment , Politics , Technology , Fashion and more from our Application.
            </p>
          </div>

        </div>
        {/* 3rd Feature */}
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-white">Play Games and Quizes to Earn Rewards </h2>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0">

          

          <div className="bg-black p-6 rounded-lg border border-purple-400 max-w-2xl h-48 items-center align-middle justify-center flex mr-24 ml-12">
            <p>
              Gamification is the Way to Attract more USERS to our Platform . Play Games and Quizes and secure Top place in the LeaderBoard to  Earn  Community Perks ,  Coupoun Codes  and Skill Badges which users showcase in the Social Media.
            </p>
          </div>
          <div className="flex-shrink-0  ">
            <img src={Explore4} alt="Firefighter Illustration" className="w-96 h-96 object-contain ml-6" />
          </div>

        </div>




      </div>


      <Footer />
    </>
  );
};

export default StepsToUpload;
