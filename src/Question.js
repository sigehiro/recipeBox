import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option.text); // Track selected option
    onAnswer(option.type); // Call onAnswer with option type
  };

  return (
    <div className="question">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className={`button ${selectedOption === option.text ? 'selected' : ''}`}
          >
            <img src={option.image} alt={option.text} className="option-image" />
            <p>{option.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
