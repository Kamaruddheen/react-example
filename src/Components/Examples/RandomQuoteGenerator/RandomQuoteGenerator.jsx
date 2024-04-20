import React, { useState } from "react";
import "./RandomQuoteGenerator.css";

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState({
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomQuote = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/zenquotes/random");
      const [data] = await response.json();

      setQuote({
        text: data.q,
        author: data.a,
      });
    } catch (err) {
      setError("Failed to fetch quote. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="quote-container">
      <h2 className="quote-title">Random Quote Generator</h2>
      <div className="quote-box">
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <>
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">- {quote.author}</p>
          </>
        )}
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
