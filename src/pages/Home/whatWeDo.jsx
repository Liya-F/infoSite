import React from 'react';
import heroBg from '../../assets/heroBg.jpg';
import Title from '../../components/ui/Title';
const WhatWeDo = () => {
  const items = [
    {
      imageSrc: heroBg,
      alt: 'Image 1',
      description: 'Sponsor A Business',
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At et ut quo, necessitatibus tenetur excepturi?",
    },
    {
      imageSrc: heroBg,
      alt: 'Image 2',
      description: 'Support A Family',
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At et ut quo, necessitatibus tenetur excepturi?",
    },
    {
      imageSrc: heroBg,
      alt: 'Image 3',
      description: 'Support A Business',
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At et ut quo, necessitatibus tenetur excepturi?",
    },
  ];

  return (
    <div className=' bg-lightpink border pb-10'>
    <div className="container mx-auto md:px-36 px-10 md:max-w-6xl md:mx-20 w-auto md:mt-[50px] mt-[100px]">
      <div className="md:flex md:flex-col items-center">
        <div className="md:flex items-center justify-around mb-4">
          <Title text="What We Do"/>
        </div>
        <div className="md:flex items-center justify-center md:space-x-8 w-full">
          {items.map((item, index) => (
            <div className="flex-auto relative mb-5" key={index}>
              <img src={item.imageSrc} alt={item.alt} className="object-cover w-full h-36 rounded-t-lg" />
              <p className="text-center py-2 bg-lightblue text-primary font-bold rounded-b-lg">{item.description}</p>
              <p className='my-3 leading-7 '>{item.text}</p>
              <a href="#" className="text-gray-900 hover:underline">
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