import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
    return (
        <div className="card">
            <img src={recipe.image} className="card-img-top" alt={recipe.label} />
            <div className="card-body">
                <h5 className="card-title">{recipe.label}</h5>
                <p className="card-text">Calories: {Math.round(recipe.calories)}</p>
                <a href={recipe.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Recipe</a>
            </div>
        </div>
    );
}

export default RecipeCard;
