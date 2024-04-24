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
  const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState({ question: "", answer: "" });

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

  const handleAddCard = (e) => {
    e.preventDefault();
    if (newCard.question.trim() && newCard.answer.trim()) {
      setCards([
        ...cards,
        {
          id: cards.length + 1,
          question: newCard.question,
          answer: newCard.answer,
          isFlipped: false,
        },
      ]);
      setNewCard({ question: "", answer: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="flashcards-container">
      <div className="header">
        <h2 className="flashcards-title">React Flashcards</h2>
        <button className="add-button" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Card"}
        </button>
      </div>

      {showForm ? (
        <form className="card-form" onSubmit={handleAddCard}>
          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <textarea
              id="question"
              value={newCard.question}
              onChange={(e) =>
                setNewCard({ ...newCard, question: e.target.value })
              }
              placeholder="Enter your question"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer:</label>
            <textarea
              id="answer"
              value={newCard.answer}
              onChange={(e) =>
                setNewCard({ ...newCard, answer: e.target.value })
              }
              placeholder="Enter your answer"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Add Flashcard
          </button>
        </form>
      ) : (
        <>
          <div className="card-container">
            <div
              className={`card ${
                cards[currentIndex].isFlipped ? "flipped" : ""
              }`}
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
        </>
      )}
    </div>
  );
};

export default Flashcards;
