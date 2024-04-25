import React, { useState } from "react";
import "./Flashcards.css";

const CATEGORIES = {
  react: "React",
  javascript: "JavaScript",
  css: "CSS",
  html: "HTML",
};

const Flashcards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      category: "react",
      isFlipped: false,
    },
    {
      id: 2,
      question: "What is JSX?",
      answer:
        "A syntax extension for JavaScript that allows you to write HTML-like code",
      category: "react",
      isFlipped: false,
    },
    {
      id: 3,
      question: "What is JavaScript?",
      answer: "A programming language that enables interactive web pages",
      category: "javascript",
      isFlipped: false,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [newCard, setNewCard] = useState({
    question: "",
    answer: "",
    category: "react",
  });

  const filteredCards =
    selectedCategory === "all"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  const handleAddCard = (e) => {
    e.preventDefault();
    if (newCard.question.trim() && newCard.answer.trim()) {
      setCards([
        ...cards,
        {
          id: cards.length + 1,
          question: newCard.question,
          answer: newCard.answer,
          category: newCard.category,
          isFlipped: false,
        },
      ]);
      setNewCard({ question: "", answer: "", category: "react" });
      setShowForm(false);
    }
  };

  const flipCard = () => {
    setCards(
      cards.map((card, index) =>
        index === currentIndex ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    setCards(cards.map((card) => ({ ...card, isFlipped: false })));
  };

  const prevCard = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredCards.length) % filteredCards.length
    );
    setCards(cards.map((card) => ({ ...card, isFlipped: false })));
  };

  return (
    <div className="flashcards-container">
      <div className="header">
        <h2 className="flashcards-title">React Flashcards</h2>
        <button className="add-button" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Card"}
        </button>
      </div>

      <div className="category-filter">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentIndex(0);
          }}
          className="category-select"
        >
          <option value="all">All Categories</option>
          {Object.entries(CATEGORIES).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {showForm ? (
        <form className="card-form" onSubmit={handleAddCard}>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={newCard.category}
              onChange={(e) =>
                setNewCard({ ...newCard, category: e.target.value })
              }
              className="category-select"
            >
              {Object.entries(CATEGORIES).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
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
      ) : filteredCards.length > 0 ? (
        <>
          <div className="card-container">
            <div
              className={`card ${
                filteredCards[currentIndex].isFlipped ? "flipped" : ""
              }`}
              onClick={flipCard}
            >
              <div className="card-front">
                <div className="category-tag">
                  {CATEGORIES[filteredCards[currentIndex].category]}
                </div>
                <p>{filteredCards[currentIndex].question}</p>
              </div>
              <div className="card-back">
                <div className="category-tag">
                  {CATEGORIES[filteredCards[currentIndex].category]}
                </div>
                <p>{filteredCards[currentIndex].answer}</p>
              </div>
            </div>
          </div>

          <div className="controls">
            <button className="control-button" onClick={prevCard}>
              Previous
            </button>
            <span className="card-counter">
              {currentIndex + 1} / {filteredCards.length}
            </span>
            <button className="control-button" onClick={nextCard}>
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="no-cards">No cards found in this category</div>
      )}
    </div>
  );
};

export default Flashcards;
