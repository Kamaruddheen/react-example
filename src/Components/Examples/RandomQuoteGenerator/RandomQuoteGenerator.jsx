import React, { useState } from "react";
import "./RandomQuoteGenerator.css";

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState({
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  });

  const [isLoading, setIsLoading] = useState(false);

  const dummyQuotes = [
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      text: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
  ];

  const getRandomQuote = () => {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * dummyQuotes.length);

    // Simulate API call with setTimeout
    setTimeout(() => {
      setQuote(dummyQuotes[randomIndex]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="quote-container">
      <h2 className="quote-title">Random Quote Generator</h2>
      <div className="quote-box">
        <p className="quote-text">&quot;{quote.text}&quot;</p>
        <p className="quote-author">- {quote.author}</p>
      </div>
      <button
        className="generate-button"
        onClick={getRandomQuote}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Generate Quote"}
      </button>
    </div>
  );
};

export default RandomQuoteGenerator;
