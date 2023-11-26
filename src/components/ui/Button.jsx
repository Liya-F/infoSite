import React from 'react';

const Button = ({ text, type }) => {
  const isFilled = type === 'filled';

  return (
    <button
      className={` md:w-32 w-28 px-6 py-3 ${isFilled ? 'bg-primary text-gray-100' : 'border border-secondary text-secondary'} rounded-xl hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;