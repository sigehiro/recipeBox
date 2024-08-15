//AddRecipe.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddRecipe.css';

const AddRecipe = () => {
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
      // Clear form fields after submission
      setRecipeName('');
      setIngredients('');
      setInstructions('');
      setCalories('');
      setPicture(null);
      // Alert the user of a successful submission
      alert('Recipe submitted successfully!');
    }
  };

  return (
    <div className="container customContainer">
      <h2 className="text-center mb-4">Add Recipe Form</h2>
      <Form onSubmit={handleSubmit} className="mt-2 recipe-form">
        <Form.Group className="mb-3" controlId="recipeName">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter recipe name"
            name="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            isInvalid={!!error && error.includes('Recipe name')}
          />
          {error && error.includes('Recipe name') && (
            <div className="alert alert-danger">{error}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="ingredients">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter ingredients"
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            isInvalid={!!error && error.includes('Ingredients')}
          />
          {error && error.includes('Ingredients') && (
            <div className="alert alert-danger">{error}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="instructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter instructions"
            name="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            isInvalid={!!error && error.includes('Instructions')}
          />
          {error && error.includes('Instructions') && (
            <div className="alert alert-danger">{error}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="calories">
          <Form.Label>Calories</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter calories"
            name="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            isInvalid={!!error && error.includes('Calories')}
          />
          {error && error.includes('Calories') && (
            <div className="alert alert-danger">{error}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="picture">
          <Form.Label>Picture</Form.Label>
          <Form.Control
            type="file"
            name="picture"
            accept="image/*"
            onChange={(e) => setPicture(e.target.files[0])}
            isInvalid={!!error && error.includes('picture')}
          />
          {error && error.includes('picture') && (
            <div className="alert alert-danger">{error}</div>
          )}
        </Form.Group>

        <Button type="submit" className="w-100 mt-4 submit-button">
          Submit Recipe
        </Button>
      </Form>

      {/* Display all submitted recipes */}
      <div className="submitted-recipes mt-5">
        {submittedRecipes.length > 0 && <h3>Recipes:</h3>}
        {submittedRecipes.map((recipe, index) => (
          <div key={index} className="submitted-recipe mb-4">
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

export default AddRecipe;
