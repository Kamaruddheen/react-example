import React, { useState } from "react";
import "./Flashcards.css";

const Flashcards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      isFlipped: false,
    },
    {
      id: 2,
      question: "What is JSX?",
      answer:
        "A syntax extension for JavaScript that allows you to write HTML-like code",
      isFlipped: false,
    },
    {
      id: 3,
      question: "What is a Component?",
      answer: "An independent, reusable piece of the user interface",
      isFlipped: false,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const flipCard = () => {
    setCards(
      cards.map((card, index) =>
        index === currentIndex ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    // Reset flip state when moving to next card
    setCards(cards.map((card) => ({ ...card, isFlipped: false })));
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    // Reset flip state when moving to previous card
    setCards(cards.map((card) => ({ ...card, isFlipped: false })));
  };

  return (
    <div className="flashcards-container">
      <h2 className="flashcards-title">React Flashcards</h2>

      <div className="card-container">
        <div
          className={`card ${cards[currentIndex].isFlipped ? "flipped" : ""}`}
          onClick={flipCard}
        >
          <div className="card-front">
            <p>{cards[currentIndex].question}</p>
          </div>
          <div className="card-back">
            <p>{cards[currentIndex].answer}</p>
          </div>
        </div>
      </div>

      <div className="controls">
        <button className="control-button" onClick={prevCard}>
          Previous
        </button>
        <span className="card-counter">
          {currentIndex + 1} / {cards.length}
        </span>
        <button className="control-button" onClick={nextCard}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
