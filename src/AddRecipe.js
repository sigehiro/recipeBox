import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './AddRecipe.css'

const AddRecipe = () => {
    const [formData, setFormData] = useState({
        recipeName: '',
        ingredients: '',
        instructions: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const validate = () => {
        let tempErrors = {}
        if (!formData.recipeName) tempErrors.recipeName = 'Recipe name is required.'
        if (!formData.ingredients) tempErrors.ingredients = 'Ingredients are required.'
        if (!formData.instructions) tempErrors.instructions = 'Instructions are required.'

        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            console.log('送信データ：', formData)
            alert('Good Job! The recipe was successfully created.')
            setFormData({ recipeName: '', ingredients: '', instructions: '' })
            setErrors({})
        }
    }

    return (
        <div className={`container customContainer`}>
            <h2 className="text-center mb-4">Add Recipe Form</h2>
            <Form onSubmit={handleSubmit} className="mt-2">
                <Form.Group className="mb-3" controlId="recipeName">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter recipe name"
                        name="recipeName"
                        value={formData.recipeName}
                        onChange={handleChange}
                        isInvalid={!!errors.recipeName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.recipeName}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="ingredients">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter ingredients"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        isInvalid={!!errors.ingredients}
                    />
                    <Form.Control.Feedback type="invalid">{errors.ingredients}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="instructions">
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter instructions"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                        isInvalid={!!errors.instructions}
                    />
                    <Form.Control.Feedback type="invalid">{errors.instructions}</Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="w-100 mt-4 submit-button">
                    Submit Recipe/送信
                </Button>
            </Form>
        </div>
    )
}

export default AddRecipe;
