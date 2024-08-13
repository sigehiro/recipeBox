import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import './RecipeSearch.css';

function RecipeSearch() {
    const [recipes, setRecipes] = useState([]);

    const fetchSampleRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=46caeb3f&app_key=cde6d97695ffa877fbcfe79bc7801263`);
        const data = await response.json();
        setRecipes(data.hits.slice(0, 6)); // Display only 6 recipes initially
    };

    const fetchRecipes = async (query) => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=46caeb3f&app_key=cde6d97695ffa877fbcfe79bc7801263`);
        const data = await response.json();
        setRecipes(data.hits); // Display all recipes based on the search term
    };

    useEffect(() => {
        fetchSampleRecipes(); // Fetch sample recipes on initial load
    }, []);

    return (
        <div className="recipe-search">
            <h1 className="page-title">Find Your Favorite Recipes</h1>
            <SearchBar fetchRecipes={fetchRecipes} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default RecipeSearch;
