// Button.js

import React from 'react';
import './button.css'; // Основные стили кнопки

const Button = ({ onClick, label, customClass }) => {
  const buttonClasses = `my-button ${customClass}`;

return (
  <button className={buttonClasses} onClick={onClick}>
    {label}
    </button>
  );
};

export default Button;
