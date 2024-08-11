// Button.js
import React from 'react';

const Button = ({ onClick, text, type = 'button' }) => {
  return (
    <button className="btn btn-primary mt-3" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
