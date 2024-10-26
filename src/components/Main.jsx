import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { ChevronDown } from 'lucide-react';
import Main2 from '../assets/images/main2.png'

import Main4 from '../assets/images/main4.png'
import axios from 'axios';

const FactCheckerForm = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [factText, setFactText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleVerifyFact = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual fact-checking logic
    try {
      setIsLoading(true)
      axios.post(`${import.meta.env.VITE_DEV_URL}api/factscheck`, { factText })
        .then(res => {
          console.log(res)

        })
      setResult({
        isVerified: true,
        confidence: 0.85,
        sources: ['Source 1', 'Source 2']
      });
      // setIsLoading(false)
    } catch (error) {
      console.error('Error verifying fact:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select');

  const options = [
    'English',
    'Hindi',
    'Others',

  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <div>
          <h1 className='text-3xl lg:text-5xl my-4 mt-12 py-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent  text-center'>Speak Any Language</h1>
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-16 -mt-1">
            Check-Fact with us !
          </h2>
          <img src={Main4} className=' main1' />
          <img src={Main2} className=' main2' />


          <form onSubmit={handleVerifyFact}>
            {/* Language Selection */}
            <div className="relative w-full max-w-md">
              {/* Dropdown Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 text-center bg-[#00040F] text-gray-300 rounded-md border border-gray-700 flex items-center justify-between dropdown-main transition-colors "
              >
                <span className="text-sm">{selectedOption}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute w-full mt-1 bg-[#00040F] border border-gray-700 rounded-md shadow-lg z-10  dropdown-menu">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelect(option)}
                      className="w-full px-4 py-2 text-sm text-left text-gray-300 hover:bg-[#2d3139] transition-colors first:rounded-t-md last:rounded-b-md"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fact Input */}
            <div className="main-verify-container">
              <div className="mb-6 main-verify-box ">
                <label
                  htmlFor="fact"
                  className="text-gray-200 text-lg font-medium mb-2 block mt-12"
                >
                  Enter Fact to Verify
                </label>
                <textarea
                  id="fact"
                  value={factText}
                  onChange={(e) => setFactText(e.target.value)}
                  placeholder={
                    selectedLanguage === 'english'
                      ? 'Enter your fact here...'
                      : selectedLanguage === 'hindi'
                        ? 'यहां अपना तथ्य दर्ज करें...'
                        : 'Enter fact in your preferred language...'
                  }
                  className="w-full p-3 main-textarea  min-h-32"
                />
              </div>


              {/* Verify Button */}
              <button
                type="submit"
                disabled={isLoading || !factText.trim()}
                className="verify-button bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Verifying...
                  </>
                ) : (
                  'Verify Fact'
                )}
              </button>
            </div>
          </form>

          {/* Results Section */}
          {result && !isLoading && (
            <>

              <div className="result-container">
                <div className="mt-6 p-4  rounded-lg main-result-box">
                  <h3 className="font-medium text-2xl mb-2">Verification Result:</h3>
                  <div className="space-y-2">
                    <p className="flex items-center justify-center py-2">
                      <span className={`h-3 w-3 rounded-full mr-2 ${result.isVerified ? 'bg-green-500' : 'bg-red-500'
                        }`}></span>
                      {result.isVerified ? 'Fact Verified' : 'Fact Not Verified'}
                    </p>
                    <p className='text-gray-200 font-semibold'>Confidence: {(result.confidence * 100).toFixed(1)}%</p>
                    <div>
                      <p className=" text-gray-400 font-semibold">Sources:</p>
                      <ul className="list-disc list-inside ml-2">
                        {result.sources.map((source, index) => (
                          <li key={index} className="text-blue-600">{source}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </div >



      <Footer />
    </>
  );
};

export default FactCheckerForm;