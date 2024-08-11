// AddRecipe.js
import React, { useState } from 'react';
import RecipeForm from './RecipeForm';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddRecipe = () => {
  const [recipeData, setRecipeData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setRecipeData(formData);
    try {
      const response = await fetch('https://api.edamam.com/doc/open-api/food-db-v2.yaml' + formData.recipeName + '&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Recipes retrieved successfully:', result);
        // Display result or store it as needed
      } else {
        console.error('Error retrieving recipes');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Add a New Recipe</h2>
      <RecipeForm onSubmit={handleFormSubmit} />
      {loading && <p className="text-center">Loading...</p>}
    </div>
  );
};

export default AddRecipe;
