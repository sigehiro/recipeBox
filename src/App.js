import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import Result from './Result';
import Top from './Top';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  // Function to handle when an answer is selected
  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    console.log('Selected answer type:', answer);
    console.log('New answers array:', newAnswers);

    // Navigate to results page if 3 answers are selected
    if (newAnswers.length === 3) {
      navigate('/tasteprofilequiz/results');
    }
  };

  return (
    <div className="App">
      <Top />
      <Routes>
        <Route path="/tasteprofilequiz" element={<Quiz onAnswer={handleAnswer} />} />
        <Route path="/tasteprofilequiz/results" element={<Result answers={answers} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
