import React, { useState } from 'react';
import Button from './Button';

const RecipeForm = ({ onSubmit }) => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [calories, setCalories] = useState('');
  const [picture, setPicture] = useState(null);
  const [error, setError] = useState('');
  const [submittedRecipes, setSubmittedRecipes] = useState([]);

  const validateForm = () => {
    if (!recipeName.trim() || !ingredients.trim() || !instructions.trim()) {
      setError('All fields are required.');
      return false;
    }

    if (/^\d/.test(recipeName)) {
      setError('Recipe name cannot have only numbers.');
      return false;
    }

    const hasLetters = /[a-zA-Z]/.test(recipeName);
    const hasNumbers = /\d/.test(recipeName);

    if (hasNumbers && hasLetters) {
      setError('Recipe name cannot have numbers.');
      return false;
    }

    if (hasNumbers && !hasLetters) {
      setError('Recipe name cannot have numbers.');
      return false;
    }

    if (!/^\d+$/.test(calories) && calories.trim() !== '') {
      setError('Calories must have numbers and cannot have letters.');
      return false;
    }

    if (!picture) {
      setError('Please add a picture for your recipe.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formData = {
        recipeName,
        ingredients,
        instructions,
        calories,
        picture: URL.createObjectURL(picture), // Create a URL for the picture
      };
      setSubmittedRecipes([...submittedRecipes, formData]); // Add new recipe to the list
      onSubmit(formData);
      // Clear form fields after submission
      setRecipeName('');
      setIngredients('');
      setInstructions('');
      setCalories('');
      setPicture(null);
    } 
  };

  return (
    <div className="recipe-form-container">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="recipeName">Recipe Name:</label>
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
        <div className="form-group">
          <label htmlFor="calories">Calories:</label>
          <input
            type="text"
            className="form-control"
            id="calories"
            name="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="picture">Picture:</label>
          <input
            type="file"
            className="form-control"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={(e) => setPicture(e.target.files[0])}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <Button type="submit" text="Submit Recipe" />
      </form>

      {/* Display all submitted recipes */}
      <div className="submitted-recipes">
        {submittedRecipes.length > 0 && <h3> Recipes:</h3>}
        {submittedRecipes.map((recipe, index) => (
          <div key={index} className="submitted-recipe">
            <div className="recipe-details">
              <div className="recipe-header">
                <h4>{recipe.recipeName}</h4>
                {recipe.picture && (
                  <img
                    src={recipe.picture}
                    alt="Recipe"
                    className="recipe-image"
                  />
                )}
              </div>
              <p><strong>Ingredients:</strong></p>
              <p>{recipe.ingredients}</p>
              <p><strong>Instructions:</strong></p>
              <p>{recipe.instructions}</p>
              <p><strong>Calories:</strong> {recipe.calories}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeForm;
