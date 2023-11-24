import React from 'react';
import heroBg from '../../assets/heroBg.jpg';
import Button from '../../components/ui/Button.jsx';

const HeroSection = () => {
  return (
    <div
      className="relative h-[80vh]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
      <div className="relative flex items-center justify-start min-h-screen">
        <div className="container md:max-w-4xl md:mx-20 mx-10 w-auto md:mt-[-100px] mt-[-150px] ">
          <h1 className="text-6xl text-white font-bold mb-8 relative z-10 md:text-left text-center ">Building a Brighter Future Together</h1>
          <p className="text-white text-lg mb-8 relative z-10  md:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget risus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget risus mauris.</p>
          <div className="space-x-4 relative z-10 text-center md:text-left">
          <Button text="Explore" type="filled" color="yellow" />
          <Button text="Donate" type="outlined" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;