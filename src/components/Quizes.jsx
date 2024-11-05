// src/Quiz.js

import React, { useState } from 'react';
import { questions } from './questions';

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
        <div className="quiz-container">
            {!showResult ? (
                <>
                    <h2>Fact or Fiction Quiz</h2>
                    <p>Score: {score}</p>
                    <p>Streak: {streak}</p>
                    <div className="question">
                        {questions[currentQuestionIndex].question[language]}
                    </div>
                    <button onClick={() => handleAnswer(true)}>True</button>
                    <button onClick={() => handleAnswer(false)}>False</button>

                    <div>
                        <label>Select Language: </label>
                        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                        </select>
                    </div>
                </>
            ) : (
                <div className="result">
                    <h3>Quiz Finished!</h3>
                    <p>Your Score: {score}</p>
                    <p>Your Streak: {streak}</p>
                    {streak >= 5 && <p>Congratulations! You’ve earned a badge for high streaks!</p>}
                    <button onClick={resetQuiz}>Play Again</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;
