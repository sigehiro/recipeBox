import React, { useState } from 'react';
import RecipeForm from './RecipeForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App'; // Import custom styles

const AddRecipe = () => {

    const handleFormSubmit = (formData) => {
      alert('Recipe added successfully!'); // Alert message
    };
  
    return (
      <div className="container my-4">
        <h2 className="text-center mb-4">Add a New Recipe</h2>
        <RecipeForm onSubmit={handleFormSubmit} />
      </div>
    );
  };
  
  export default AddRecipe;
