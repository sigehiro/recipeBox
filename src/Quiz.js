// src/Quiz.js
import React from 'react';
import Question from './Question';

const questions = [
  {
    text: "What kind of dessert do you prefer?",
    options: [
      { text: "Cake", type: "sweet", image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { text: "Lemon Tart", type: "sour", image: "https://images.unsplash.com/photo-1543508185-225c92847541?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { text: "Cheese Platter", type: "savory", image: "https://plus.unsplash.com/premium_photo-1687975124335-ebd2268d4fe8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ],
  },
  {
    text: "Which type of snack do you like the most?",
    options: [
      { text: "Chocolate Bar", type: "sweet", image: "https://images.unsplash.com/photo-1522249341405-3871994ac062?q=80&w=424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { text: "Pickles", type: "sour", image: "https://plus.unsplash.com/premium_photo-1705003210300-57cac20232fd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { text: "Beef Jerky", type: "savory", image: "https://www.thechoppingblock.com/hs-fs/hubfs/Blog/Beef%20Jerky.png?width=600&height=503&name=Beef%20Jerky.png" },
    ],
  },
  {
    text: "What do you enjoy drinking?",
    options: [
      { text: "Milkshake", type: "sweet", image: "https://images.unsplash.com/photo-1586985289071-36f62f55ce44?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { text: "Lemonade", type: "sour", image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?q=80&w=393&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { text: "Tomato Juice", type: "savory", image: "https://plus.unsplash.com/premium_photo-1680113323665-798f1f5f3935?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ],
  }
];

const Quiz = ({ onAnswer }) => {
  const handleAnswer = (type) => {
    console.log('Answer received:', type);
    onAnswer(type);
  };

  return (
    <div>
      <h1>Taste Profile Quiz</h1>
      <p>What flavours best match you?</p>
      {questions.map((question, index) => (
        <Question key={index} question={question} onAnswer={handleAnswer} />
      ))}
    </div>
  );
};


export default Quiz;