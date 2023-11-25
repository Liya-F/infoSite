import React, { useState, useEffect } from 'react';
import heroBg from '../../assets/heroBg.jpg';
import Button from '../../components/ui/Button.jsx';

const HeroSection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjd28qi9yZ3yyQYxjMpO3zHZ86m4mbYMBcj84sl0kCoaSMsf7IT9IywTz2k7xXg_5rns&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRphrevO7WWVykIWnjxsGpMqrpK_1PtfUvr7LJp6x4NTRfgBY3b2Cz7c-szy4ZkO2Ajw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtrPiV63OEbfoHXYbXKRWHQd7V2fDnwFew1lopb01o8JdzAEjQST_u4GkxppzvioVRwQ&usqp=CAU'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const handleImageChange = (event) => {
    const newIndex = parseInt(event.target.value);
    setSelectedImageIndex(newIndex);
  };

  const heroSectionStyle = {
    backgroundImage: `url(${images[selectedImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="relative h-[80vh]" style={heroSectionStyle}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
      <div className="relative flex items-center justify-start min-h-screen">
        <div className="container  md:mx-20 mx-10 w-auto md:mt-[-100px] mt-[-150px] ">
          <h1 className="text-6xl md:max-w-4xl text-white font-bold mb-8 relative z-10 md:text-left text-center">
            Building a Brighter Future Together
          </h1>
          <p className="text-white text-lg mb-8 relative z-10 md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget risus mauris. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vestibulum eget risus mauris.
          </p>
          <div className="space-x-4 relative z-10 text-center md:text-left">
            <Button text="Donate" type="outlined" />
          </div>
          <div className="flex justify-center space-x-3 mt-20">
            {images.map((image, index) => (
              <label key={index} className="mx-1">
                <input
                  type="radio"
                  name="imageSelection"
                  value={index}
                  checked={selectedImageIndex === index}
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span
                  className={`block w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer ${
                    selectedImageIndex === index ? 'bg-white' : 'bg-gray-400'
                  }`}
                ></span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;