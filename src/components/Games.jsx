import React, { useState, useEffect } from 'react';
import Nav2 from '../components/navbar'
import FAQ from '../components/faq'
import User1 from '../assets/images/game1.webp'
import User2 from '../assets/images/game2.jpg'
import User3 from '../assets/images/game3.jpg'
import User4 from '../assets/images/game4.png'
import User5 from '../assets/images/game5.jpg'
import Quiz1 from '../assets/images/quiz1.png'
import Quiz2 from '../assets/images/quiz2.png'
import Quiz3 from '../assets/images/quiz3.png'


const cardsData = [
  { id: 1, name: "Person 1", type: "person", image: User1 },
  { id: 2, name: "Person 2", type: "person", image: User2 },
  { id: 3, name: "Person 3", type: "person", image: User3 },
  { id: 4, name: "Person 4", type: "person", image: User4 },
  { id: 5, name: "Person 5", type: "person", image: User5 },
  { id: 6, name: "Messi Won the World Cup for Argentina", type: "fact", matchId: 1 },
  { id: 7, name: "India Lifts T20 World Cup after 17 years ", type: "fact", matchId: 2 },
  { id: 8, name: "RG Kar Hooror Rape Case Shocks the entire Nation", type: "fact", matchId: 3 },
  { id: 9, name: "India Loses a Home Test Series after 12 years", type: "fact", matchId: 4 },
  { id: 10, name: "Trump Wins Tenses the White House Race", type: "fact", matchId: 5 },
];

function shuffleCards(cards) {
  return cards.sort(() => Math.random() - 0.5);
}

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [score, setScore] = useState(0);
  const [reward, setReward] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const shuffledCards = shuffleCards([...cardsData]);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setTurns(0);
    setScore(0);
    setReward("");
    setGameOver(false);
  };

  const handleFlip = (card) => {
    if (flippedCards.length === 2 || matchedCards.includes(card.id) || gameOver) return;

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setTurns(turns + 1);

      const [firstCard, secondCard] = newFlippedCards;

      if (
        (firstCard.type === "person" && secondCard.type === "fact" && secondCard.matchId === firstCard.id) ||
        (firstCard.type === "fact" && secondCard.type === "person" && firstCard.matchId === secondCard.id)
      ) {
        setMatchedCards((prev) => [...prev, firstCard.id, secondCard.id]);
        setScore(score + 1);
        setFlippedCards([]);

        // Check if all cards are matched
        if (matchedCards.length + 2 === cardsData.length) {
          setGameOver(true);
        }
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  // Reward logic based on turns
  useEffect(() => {
    if (turns <= 5) setReward("BatMan Badge!");
    else if (turns <= 10) setReward("NightOwl Badge!");
    else setReward("Explorer Badge!");
  }, [turns]);

  return (
    <>
      <Nav2 />
      <div className="App">
        <h1 className='text-4xl lg:text-5xl my-4 mt-12 py-3 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent  text-center'>Fact Card Game</h1>

        {gameOver ? (
          <div className="game-over mt-10">
            <h2 className='text-purple-400 mx-6 text-6xl p-2'>Game Over!</h2>
            <p className='text-white mx-6 text-2xl p-2'>Your Final Score: {score}</p>
            <p className='text-slate-400 mx-6 text-xl p-2'>Total Turns: {turns}</p>
            <p className='text-slate-400 mx-6 text-xl p-2'>Reward: {reward}</p>
            {turns <= 5 ? (
              <div className='rewards-badges flex justify-center align-middle items-center flex-col'>
                <p className='text-2xl text-purple-400 text-center font-semibold mx-3 mt-5'>
                  Congratulations! You’ve earned the BATMAN badge!

                </p>
                <img src={Quiz3} className='h-72 w-72 rewards-img mt-4' />
              </div>
            ) : turns <= 10 ? (
              <div className='rewards-badges flex justify-center align-middle items-center flex-col'>
                <p className='text-2xl text-purple-400 text-center font-semibold mx-3 mt-5'>
                  Congratulations! You’ve earned the NIGHTOWL badge!
                </p>
                <img src={Quiz1} className='h-72 w-72 rewards-img mt-4' />
              </div>
            ) : turns <= 15 ? (
              <div className='rewards-badges flex justify-center align-middle items-center flex-col'>
                <p className='text-2xl text-purple-400 text-center font-semibold mx-3 mt-5'>
                  Congratulations! You’ve earned the EXPLORE badge!
                </p>
                <img src={Quiz2} className='h-72 w-72 rewards-img mt-4' />
              </div>
            ) : null}
            <button onClick={startNewGame} className='btn-1-hero mt-4'>New Game</button>
          </div>
        ) : (
          <>


            <p className='text-purple-400 mx-6 text-2xl p-2'>Turns: {turns}</p>
            <p className='text-white mx-6 text-2xl p-2'>Score: {score}</p>
            <div className="cards">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`card ${flippedCards.includes(card) || matchedCards.includes(card.id) ? "flipped" : ""}`}
                  onClick={() => handleFlip(card)}
                >
                  {(flippedCards.includes(card) || matchedCards.includes(card.id)) ? (
                    <div className="card-content">
                      {card.type === "person" ? (
                        <img src={card.image} alt={card.name} className="card-image" />
                      ) : (
                        <p>{card.name}</p>
                      )}
                    </div>
                  ) : (
                    <h1>?</h1>
                  )}
                </div>
              ))}
            </div>
            <button onClick={startNewGame} className='btn-1-hero mt-6'>New Game</button>
          </>
        )}
      </div>
      <FAQ />
    </>
  );
}

export default App;
