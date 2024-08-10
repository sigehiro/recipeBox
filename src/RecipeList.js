import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

function RecipeList({ recipes }) {
    const rows = [[], []]; // Create two rows

    recipes.forEach((recipeData, index) => {
        if (index < 6) {
            rows[Math.floor(index / 3)].push(
                <RecipeCard key={index} recipe={recipeData.recipe} />
            );
        }
    });

    return (
        <div className="recipe-list">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="recipe-row">
                    {row}
                </div>
            ))}
            {recipes.length > 6 && (
                <div className="extra-recipes">
                    {recipes.slice(6).map((recipeData, index) => (
                        <RecipeCard key={index + 6} recipe={recipeData.recipe} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default RecipeList;
