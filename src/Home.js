import React from 'react';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to the Recipe Box</h1>
            <p>Explore our collection of delicious recipes.</p>
            <div className="trend-menu">
                <h2>Energy Boost</h2>
                <p>590Kcal</p>
                <img src="path/to/your/image.png" alt="Energy Boost" />
                <p>Feel your best this summer with our energy-boosting dishes.</p>
                <button>Shop Now</button>
            </div>
        </div>
    );
}

export default Home;
