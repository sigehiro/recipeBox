// RecipeForm.js
import React, { useState } from 'react';
import Button from './Button'
const RecipeForm = ({ onSubmit }) => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      recipeName,
      ingredients,
      instructions,
      imageURL,
    };
    onSubmit(formData);
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="recipeName">Recipe Name: </label>
        <input
          type="text"
          className="form-control"
          id="recipeName"
          name="recipeName"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          className="form-control"
          id="ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          className="form-control"
          id="instructions"
          name="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        ></textarea>
      </div>
      <Button type="submit" text="Submit Recipe" />
    </form>
  );
};

export default RecipeForm;
