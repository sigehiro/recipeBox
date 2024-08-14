import React, { useState } from 'react';
import { Routes, Route, useNavigate, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Top from './Top'
import Header from './Header'
import Footer from './Footer'
import RecipeSearch from './RecipeSearch'
import Quiz from './Quiz';
import Result from './Result';
import AddRecipe from './AddRecipe';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

function AppRoutes() {
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  // Function to handle when an answer is selected
  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    // Navigate to results page if 3 answers are selected
    if (newAnswers.length === 3) {
      navigate('/tasteprofilequiz/results');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/recipe-search" element={<RecipeSearch />} />
      <Route path="/tasteprofilequiz" element={<Quiz onAnswer={handleAnswer} />} />
      <Route path="/tasteprofilequiz/results" element={<Result answers={answers} />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
    </Routes>
  );
}

export default App;
