import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Top from './Top'
import Header from './Header'
import Footer from './Footer'
import RecipeSearch from './RecipeSearch'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Top />} />
                    <Route path="/recipe-search" element={<RecipeSearch />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App