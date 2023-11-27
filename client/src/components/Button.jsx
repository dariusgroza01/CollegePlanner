import React from 'react';

const Button = () => {
  const buttonStyle = {
    backgroundColor: '#3498db', // Change this to your desired background color
    color: '#fff', // Change this to your desired text color
    padding: '10px 15px',
    fontSize: '1.2em',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle box shadow
    transition: 'background-color 0.3s ease',
  };

  const handleButtonClick = () => {
    // Handle button click event if needed
    console.log('Button clicked!');
  };

  return (
    <button style={buttonStyle} onClick={handleButtonClick}>
      Click me
    </button>
  );
};

export default Button;
