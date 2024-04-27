import React, { useState, useRef, useEffect } from "react";
import { CATEGORIES, initialCards } from "./cardData";
import "./Flashcards.css";

const Flashcards = () => {
  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editMode, setEditMode] = useState(false);
  const [newCard, setNewCard] = useState({
    question: "",
    answer: "",
    category: "react",
  });
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCards =
    selectedCategory === "all"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  const handleEditCard = () => {
    const currentCard = filteredCards[currentIndex];
    setNewCard({
      id: currentCard.id,
      question: currentCard.question,
      answer: currentCard.answer,
      category: currentCard.category,
    });
    setEditMode(true);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCard.question.trim() && newCard.answer.trim()) {
      if (editMode) {
        // Update existing card
        setCards(
          cards.map((card) =>
            card.id === newCard.id ? { ...newCard, isFlipped: false } : card
          )
        );
      } else {
        // Add new card
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
      }
      setNewCard({ question: "", answer: "", category: "react" });
      setShowForm(false);
      setEditMode(false);
    }
  };

  const handleDeleteCard = () => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      const newCards = cards.filter(
        (card) => card.id !== filteredCards[currentIndex].id
      );
      setCards(newCards);
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const flipCard = () => {
    setCards(
      cards.map((card, index) =>
        index === currentIndex ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  };

  const toggleAnswer = (e) => {
    e.stopPropagation();
    setShowAnswer(!showAnswer);
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    setCards(cards.map((card) => ({ ...card, isFlipped: false })));
    setShowAnswer(false);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredCards.length) % filteredCards.length
    );
    setCards(cards.map((card) => ({ ...card, isFlipped: false })));
    setShowAnswer(false);
  };

  // Hide tooltip after first flip
  const handleFirstFlip = () => {
    setShowTooltip(false);
    flipCard();
  };

  return (
    <div className="flashcards-container">
      <div className="header">
        <h2 className="flashcards-title">React Flashcards</h2>
        <div className="options-container" ref={optionsRef}>
          <button
            className="options-trigger"
            onClick={() => setShowOptions(!showOptions)}
          >
            <span className="dots">⋮</span>
          </button>

          {showOptions && (
            <div className="options-dropdown">
              <button
                className="option-item"
                onClick={() => {
                  setEditMode(false);
                  setNewCard({ question: "", answer: "", category: "react" });
                  setShowForm(!showForm);
                  setShowOptions(false);
                }}
              >
                <span className="option-icon">+</span>
                {showForm ? "Cancel" : "Add Card"}
              </button>

              {!showForm && filteredCards.length > 0 && (
                <>
                  <button
                    className="option-item"
                    onClick={() => {
                      handleEditCard();
                      setShowOptions(false);
                    }}
                  >
                    <span className="option-icon">✎</span>
                    Edit Card
                  </button>

                  <button
                    className="option-item delete"
                    onClick={() => {
                      handleDeleteCard();
                      setShowOptions(false);
                    }}
                  >
                    <span className="option-icon">×</span>
                    Delete Card
                  </button>
                </>
              )}
            </div>
          )}
        </div>
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
        <form className="card-form" onSubmit={handleSubmit}>
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
            {editMode ? "Update Flashcard" : "Add Flashcard"}
          </button>
        </form>
      ) : filteredCards.length > 0 ? (
        <>
          <div className="card-container">
            <div
              className={`card ${
                filteredCards[currentIndex].isFlipped ? "flipped" : ""
              }`}
              onClick={handleFirstFlip}
            >
              <div className="card-front">
                <div className="category-tag">
                  {CATEGORIES[filteredCards[currentIndex].category]}
                </div>
                <p>{filteredCards[currentIndex].question}</p>
                {showTooltip && (
                  <div className="card-tooltip">Click card to view answer</div>
                )}
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
