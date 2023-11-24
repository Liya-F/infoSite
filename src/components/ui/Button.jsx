import React from 'react';

const Button = ({ text, type }) => {
  const isFilled = type === 'filled';

  return (
    <button
      className={` w-28 px-6 py-3 ${isFilled ? 'bg-secondary text-primary' : 'border border-secondary text-secondary'} rounded-2xl hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;