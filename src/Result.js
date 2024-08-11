// src/Result.js
import React from 'react';
import './Question.css';
import './Result.css';

const getResult = (answers) => {
  console.log('Answers received:', answers);

  // Count the occurrences of each type
  const counts = answers.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  // Get unique types and their counts
  const uniqueTypes = Object.keys(counts);
  console.log('Unique Types:', uniqueTypes);

  // Determine the result based on counts and combinations
  if (uniqueTypes.length === 1) {
    return uniqueTypes[0]; // Single type
  } else if (uniqueTypes.length === 2) {
    // For two types - check combinations
    if (uniqueTypes.includes("sweet") && uniqueTypes.includes("sour")) {
      return "sweet-sour";
    } else if (uniqueTypes.includes("sweet") && uniqueTypes.includes("savory")) {
      return "sweet-savory";
    } else if (uniqueTypes.includes("sour") && uniqueTypes.includes("savory")) {
      return "savory-sour";
    }
  }

  // Default to mixed if more than two types or something else
  return "mixed";
};

// Function to get the summary based on the result
const getSummary = (result) => {
  switch (result) {
    case "sweet":
      return {
        text: (
          <>
            <p className="summary-text">You have a sweet tooth! 🍰</p>
            <p className="description-text">You love sweet flavors, which might mean you have a natural inclination towards comfort foods and indulgent treats.</p>
            <p className="description-text">People with a sweet preference often find joy in desserts and sugary snacks.</p>
            <p className="description-text">Did you know? Your preference for sweet flavors might also indicate a higher sensitivity to sweetness compared to others.</p>
          </>
        ),
        image: "https://images.unsplash.com/photo-1502174832274-bc176e52765a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      };
    case "sour":
      return {
        text: (
          <>
            <p className="summary-text">You prefer sour flavors! 🍋</p>
            <p className="description-text">This suggests you enjoy bold and tangy tastes. Sour profiles often correlate with a taste for citrus fruits, pickled items, and vinegar-based dishes.</p>
            <p className="description-text">This might also mean you appreciate complexity in your food, as sourness can add depth and contrast to flavors.</p>
            <p className="description-text">Fun fact: Sour flavors can stimulate saliva production and enhance the overall taste experience.</p>
          </>
        ),
        image: "https://plus.unsplash.com/premium_vector-1711987499345-53d8f64a1638?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      };
    case "savory":
      return {
        text: (
          <>
            <p className="summary-text">You love savory flavors! 🍖</p>
            <p className="description-text">This indicates a preference for rich, hearty, and umami tastes. You might gravitate towards foods like meats, cheeses, and broths that deliver a satisfying depth of flavor.</p>
            <p className="description-text">Savory tastes can also contribute to a sense of fullness and satisfaction.</p>
            <p className="description-text">Did you know? Savory flavors are often associated with foods that provide essential nutrients and energy.</p>
          </>
        ),
        image: "https://images.unsplash.com/photo-1602192103300-47e66756152e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      };
    case "sweet-sour":
      return {
        text: (
          <>
            <p className="summary-text">You enjoy a mix of sweet and sour flavors! 🍭🍋</p>
            <p className="description-text">This showcases a balanced palate that appreciates contrast.</p>
            <p className="description-text">This combination often appears in dishes like sweet and sour chicken or citrus desserts.</p>
            <p className="description-text">Your taste preference might indicate an adventurous side, as you enjoy flavors that play off each other for a harmonious yet dynamic taste experience.</p>
          </>
        ),
        image: "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      };
    case "sweet-savory":
      return {
        text: (
          <>
            <p className="summary-text">You like a mix of sweet and savory flavors! 🍯🍖</p>
            <p className="description-text">This combination creates a delightful and complex taste profile.</p>
            <p className="description-text">This blend is often found in dishes like teriyaki or bacon with maple syrup.</p>
            <p className="description-text">Your taste for both sweet and savory might mean you enjoy layered flavors and culinary creativity, bringing out the best in both taste profiles.</p>
          </>
        ),
        image: "https://plus.unsplash.com/premium_photo-1695658519365-70ca7801998d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      };
    case "savory-sour":
      return {
        text: (
          <>
            <p className="summary-text">You prefer a combination of savory and sour flavors! 🥨🍋</p>
            <p className="description-text">This indicates a taste for bold and contrasting profiles.</p>
            <p className="description-text">This mix can often be found in foods like sourdough bread or certain types of fermented products.</p>
            <p className="description-text">Your preference may reflect an appreciation for unique and tangy flavors that enhance savory dishes with a distinctive twist.</p>
          </>
        ),
        image: "https://images.unsplash.com/photo-1586187524207-71b5dcf0fb84?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      };
    default:
      return {
        text: (
          <>
            <p className="summary-text">You have a diverse taste profile! 🌟</p>
            <p className="description-text">This versatility means you appreciate a wide range of flavors and are open to experimenting with different taste combinations.</p>
            <p className="description-text">Your broad palate might lead you to enjoy everything from complex multi-flavor dishes to simple and straightforward tastes.</p>
            <p className="description-text">Fun fact: A mixed taste profile often correlates with a love for culinary diversity and exploration.</p>
          </>
        ),
        image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      };
  }
};

// Display the summary based on answers
const Result = ({ answers }) => {
  // Determine the result based on the answers
  const result = getResult(answers);
  // Get the summary text and image for the result
  const { text, image } = getSummary(result);

  return (
    <div>
      <h2>Your Taste Profile</h2>
      <img src={image} alt="Taste Profile" className="result-image" />
      <div>{text}</div>
    </div>
  );
};

export default Result;