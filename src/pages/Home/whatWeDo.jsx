import React from 'react';
import heroBg from '../../assets/heroBg.jpg';
import Title from '../../components/ui/Title';
const WhatWeDo = () => {
  const items = [
    {
      imageSrc: heroBg,
      alt: 'Image 1',
      description: 'Sponsor A Business',
    },
    {
      imageSrc: heroBg,
      alt: 'Image 2',
      description: 'Support A Family',
    },
    {
      imageSrc: heroBg,
      alt: 'Image 3',
      description: 'Support A Business',
    },
  ];

  return (
    <div className=' bg-lightpink border pb-10'>
    <div className="container mx-auto md:px-36 px-10 md:max-w-6xl md:mx-20 w-auto md:mt-[50px] mt-[100px]">
      <div className="flex flex-col items-center">
        <div className="md:flex items-center justify-around mb-4">
          <Title text="What We Do"/>
        </div>
        <div className="flex items-center justify-center space-x-8 w-full">
          {items.map((item, index) => (
            <div className="flex-auto relative" style={{ maxWidth: '33.3%' }} key={index}>
              <img src={item.imageSrc} alt={item.alt} className="object-cover w-full h-36 rounded-t-lg" />
              <p className="text-center py-2 bg-gray-200 text-primary font-bold">{item.description}</p>
              <p className='my-3 leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At et ut quo, necessitatibus tenetur excepturi?</p>
              <a href="#" className="text-primary hover:underline">
              Read More...
            </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhatWeDo;