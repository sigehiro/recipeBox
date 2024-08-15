import React, { useState, useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './AddRecipe.css'

const AddRecipe = () => {
    const [recipeName, setRecipeName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [calories, setCalories] = useState('')
    const [picture, setPicture] = useState(null)
    const [error, setError] = useState({
        recipeName: '',
        ingredients: '',
        instructions: '',
        calories: '',
        picture: '',
    })
    const [submittedRecipes, setSubmittedRecipes] = useState([])

    const submittedRecipesRef = useRef(null)

    const validateForm = () => {
        let valid = true
        let newError = {
            recipeName: '',
            ingredients: '',
            instructions: '',
            calories: '',
            picture: '',
        }

        if (!recipeName) {
            newError.recipeName = 'Recipe name is required.'
            valid = false
        }

        if (!ingredients) {
            newError.ingredients = 'Ingredients are required.'
            valid = false
        }

        if (!instructions) {
            newError.instructions = 'Instructions are required.'
            valid = false
        }

        if (calories && isNaN(calories)) {
            newError.calories = 'Calories must be a number.'
            valid = false
        }

        if (!picture) {
            newError.picture = 'Please add a picture for your recipe.'
            valid = false
        }

        setError(newError)
        return valid
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (validateForm()) {
            const formData = {
                recipeName,
                ingredients,
                instructions,
                calories,
                picture: URL.createObjectURL(picture),
            }

            const updatedRecipes = [...submittedRecipes, formData]

            setSubmittedRecipes(updatedRecipes)
            setRecipeName('')
            setIngredients('')
            setInstructions('')
            setCalories('')
            setPicture('')

            // alert message
            console.log('送信データ：', formData)
            const successMessage = 'Recipe submitted successfully!'
            alert(successMessage)
        }
    }

    // Scroll to the submitted recipes section when recipes are submitted
    useEffect(() => {
        if (submittedRecipes.length > 0 && submittedRecipesRef.current) {
            submittedRecipesRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [submittedRecipes])

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
                        isInvalid={!!error.recipeName}
                    />
                    {error.recipeName && <div className="alert alert-danger">{error.recipeName}</div>}
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
                        isInvalid={!!error.ingredients}
                    />
                    {error.ingredients && <div className="alert alert-danger">{error.ingredients}</div>}
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
                        isInvalid={!!error.instructions}
                    />
                    {error.instructions && <div className="alert alert-danger">{error.instructions}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="calories">
                    <Form.Label>Calories</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter calories"
                        name="calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        isInvalid={!!error.calories}
                    />
                    {error.calories && <div className="alert alert-danger">{error.calories}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="picture">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control
                        type="file"
                        name="picture"
                        accept="image/*"
                        onChange={(e) => setPicture(e.target.files[0])}
                        isInvalid={!!error.picture}
                    />
                    {error.picture && <div className="alert alert-danger">{error.picture}</div>}
                </Form.Group>

                <Button type="submit" className="w-100 mt-4 submit-button">
                    Submit Recipe
                </Button>
            </Form>

            {/* Display all submitted recipes */}
            <div ref={submittedRecipesRef} className="submitted-recipes mt-5 ">
                {submittedRecipes.length > 0 && <h3 className="submitted-title mb-3">Submitted Recipe</h3>}
                {submittedRecipes.map((recipe, index) => (
                    <div key={index} className="submitted-recipe mb-4 card">
                        <div className="card-header">
                            {recipe.picture && <img src={recipe.picture} alt="Recipe" className="recipe-image" />}
                        </div>
                        <div>
                            <p>Recipe Name: {recipe.recipeName}</p>
                            <p>Ingredients: {recipe.ingredients}</p>
                            <p>Instructions: {recipe.instructions}</p>
                            <p>Calories: {recipe.calories}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddRecipe
