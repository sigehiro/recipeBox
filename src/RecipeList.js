import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
    if (!recipes || recipes.length === 0) {
        return <div>No recipes found.</div>;
    }

    return (
        <div className="row">
            {recipes.map((recipeData, index) => (
                <div key={index} className="col-md-4 mb-4">
                    <RecipeCard recipe={recipeData.recipe} />
                </div>
            ))}
        </div>
    );
}

export default RecipeList;
