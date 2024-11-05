import Footer from './Footer';
import Navbar from './navbar';
import React, { useState } from 'react';
import { questions } from './questions';
import FAQ from './faq'
import Quiz1 from '../assets/images/quiz1.png'
import Quiz2 from '../assets/images/quiz2.png'
import Quiz3 from '../assets/images/quiz3.png'
function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [language, setLanguage] = useState("en"); // default language

  const handleAnswer = (isTrue) => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (isTrue === correctAnswer) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0); // reset streak on wrong answer
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true); // end of quiz
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setShowResult(false);
  };

  return (
    <>
      <Navbar />
      <div className="quiz-container-main flex justify-center align-bottom items-center flex-col">
        <div className="quiz-header">
          <h2 className='text-3xl lg:text-4xl  mt-12 py-3 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent  text-center'>Uncover the Truth
            <span className='text-4xl text-purple-400 text-center font-semibold mx-3'>One Quiz at a Time !</span> </h2>
        </div>
        <div className='divider'></div>
        {!showResult ? (
          <div className='quiz-container flex justify-center align-middle items-center flex-col mt-10 mb-20 '>
            <div className='label-div justify-center align-middle items-center flex flex-row'>
              <label className='label-quiz text-xl text-purple-400 p-6'>Select Language: </label>
              <select onChange={(e) => setLanguage(e.target.value)} value={language} className='bg-slate-950 border rounded-sm '>
                <option value="en" className='p-8'>English</option>
                <option value="hi" className='p-8'>Hindi</option>
              </select>
            </div>
            <div className="question mt-4">
              <p className='text-3xl'>Q : {questions[currentQuestionIndex].question[language]}</p>
            </div>
            <div className='quiz-answers flex justify-center align-middle items-center flex-row mt-4'>
              <button onClick={() => handleAnswer(true)} className=' btn-1-hero m-4'>True</button>
              <button onClick={() => handleAnswer(false)} className=' btn-1-hero m-4'>False</button>
            </div>
            <div className='quiz-results flex justify-center items-center align-middle flex-row mt-4'>
              <p className='text-purple-400 mx-6 text-xl'>Score: {score}</p>
              <p className='text-white mx-6 text-xl'>Streak: {streak}</p>
            </div>

            <div>

            </div>
          </div>
        ) : (
          <div className="result flex justify-center align-middle items-center flex-col">
            <h2 className='text-4xl text-white mt-20 text-center font-semibold mx-3'>Quiz Finished!</h2>
            <p className='text-2xl text-purple-400  text-center font-semibold mx-3 mt-5'>Your Score : {score}</p>
            <p className='text-2xl text-white  text-center font-semibold mx-3 mt-5'>Your Streak : {streak}</p>
            {streak >= 7 ? (
              <div className='rewards-badges flex justify-center align-middle items-center flex-col'>
              <p className='text-2xl text-purple-400 text-center font-semibold mx-3 mt-5'>
                Congratulations! You’ve earned the BATMAN badge for 7 streaks!
    
              </p>
              <img src={Quiz3} className='h-72 w-72 rewards-img mt-4'/>
              </div>
            ) : streak >= 5 ? (
              <div className='rewards-badges flex justify-center align-middle items-center flex-col'>
              <p className='text-2xl text-purple-400 text-center font-semibold mx-3 mt-5'>
                Congratulations! You’ve earned the NIGHTOWL badge for 5 streaks!
              </p>
              <img src={Quiz1} className='h-72 w-72 rewards-img mt-4'/>
              </div>
            ) : streak >= 3 ? (
              <div className='rewards-badges flex justify-center align-middle items-center flex-col'>
              <p className='text-2xl text-purple-400 text-center font-semibold mx-3 mt-5'>
                Congratulations! You’ve earned the EXPLORE badge for 3 streaks!
              </p>
              <img src={Quiz2} className='h-72 w-72 rewards-img mt-4'/>
              </div>
            ) : null}


            <button onClick={resetQuiz} className='btn-3-hero mt-5 mb-60 '>Play Again</button>
          </div>
        )}
      </div>
      <FAQ />
    </>
  );
}

export default Quiz;
