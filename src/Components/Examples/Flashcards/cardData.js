export const CATEGORIES = {
  react: "React",
  javascript: "JavaScript",
  css: "CSS",
  html: "HTML",
};

export const initialCards = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "A JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components that manage their own state.",
    category: "react",
    isFlipped: false,
  },
  {
    id: 2,
    question: "What are React Hooks?",
    answer:
      "Functions that allow you to 'hook into' React state and lifecycle features from function components. Common hooks include useState, useEffect, useContext, and useRef.",
    category: "react",
    isFlipped: false,
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "A syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes it easier to describe what the UI should look like.",
    category: "react",
    isFlipped: false,
  },
  {
    id: 4,
    question: "What is JavaScript?",
    answer:
      "A high-level, interpreted programming language that enables interactive web pages. It's an essential part of web applications, supporting both object-oriented and functional programming.",
    category: "javascript",
    isFlipped: false,
  },
  {
    id: 5,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is the combination of a function and the lexical environment within which that function was declared. It allows a function to access variables in its outer scope even after the outer function has returned.",
    category: "javascript",
    isFlipped: false,
  },
  {
    id: 6,
    question: "What is CSS Flexbox?",
    answer:
      "A CSS layout model that allows responsive elements within a container to be automatically arranged depending on screen size. It provides an efficient way to layout, align and distribute space among items.",
    category: "css",
    isFlipped: false,
  },
  {
    id: 7,
    question: "What is CSS Grid?",
    answer:
      "A two-dimensional CSS layout system that lets you organize content in rows and columns. It provides more complex and sophisticated layouts than Flexbox, ideal for larger-scale layouts.",
    category: "css",
    isFlipped: false,
  },
  {
    id: 8,
    question: "What is semantic HTML?",
    answer:
      "HTML that uses tags that clearly describe their meaning to both the browser and the developer. Examples include <header>, <nav>, <main>, <article>, <section>, and <footer>.",
    category: "html",
    isFlipped: false,
  },
  {
    id: 9,
    question: "What is the difference between <div> and <span>?",
    answer:
      "A <div> is a block-level element that starts on a new line and takes up the full width available. A <span> is an inline element that only takes up as much width as necessary.",
    category: "html",
    isFlipped: false,
  },
  {
    id: 10,
    question: "What is the Virtual DOM in React?",
    answer:
      "A lightweight copy of the actual DOM that React uses to improve performance. React first updates the Virtual DOM, compares it with the real DOM, and then efficiently updates only the necessary parts of the actual DOM.",
    category: "react",
    isFlipped: false,
  },
];
