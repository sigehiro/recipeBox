//App.js 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipe from './AddRecipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AddRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
