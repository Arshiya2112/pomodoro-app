// src/components/QuoteBox.jsx
import React, { useState, useEffect } from "react";
import "./QuoteBox.css";

const quotes = [
  {
    text: "Do something today that your future self will thank you for.",
    author: "Unknown",
  },
  {
    text: "Focus is more important than intelligence.",
    author: "Robin Sharma",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    text: "Work hard in silence. Let success make the noise.",
    author: "Frank Ocean",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
    author: "Marie Forleo",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  {
    text: "Small daily improvements are the key to staggering long-term results.",
    author: "Robin Sharma",
  },
  {
    text: "If you get tired, learn to rest, not to quit.",
    author: "Banksy",
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    text: "Stay focused and never give up.",
    author: "Unknown",
  },
  {
    text: "Don’t be busy. Be productive.",
    author: "Tim Ferriss",
  },
  {
    text: "Clarity comes from engagement, not thought.",
    author: "Marie Forleo",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
];

const QuoteBox = () => {
  const [quote, setQuote] = useState({});

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="quote-box">
      <p className="quote-text">“{quote.text}”</p>
      <p className="quote-author">— {quote.author}</p>
      <button className="quote-btn" onClick={getRandomQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;
