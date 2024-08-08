import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import './RecipeSearch.css';

function RecipeSearch() {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async (query) => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=46caeb3f&app_key=cde6d97695ffa877fbcfe79bc7801263`);
        const data = await response.json();
        setRecipes(data.hits);
    };

    return (
        <div className="recipe-search">
            <SearchBar fetchRecipes={fetchRecipes} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default RecipeSearch;
