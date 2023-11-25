import React from 'react';
import heroBg from '../../assets/heroBg.jpg';
import Button from './Button';

const PagesHero = ({ title }) => {
  return (
    <div
      className="relative h-[60vh]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl text-white font-bold mb-8 relative z-10 md:text-left text-center">{title}</h1>          
          <div className="space-x-4 relative z-10 text-center md:text-left">
            {/* Additional content */}
          </div>
        </div>
    </div>
  );
};

export default PagesHero;