import React from 'react';
import heroBg from '../../assets/heroBg.jpg';

const WhatWeDo = () => {
  return (
    <div className="container mx-auto border md:px-36 px-10">
      <div className="flex flex-col items-center">
        <div className="md:flex items-center justify-around mb-4">
          <h1 className="text-2xl font-bold w-full md:w-1/2">What we do</h1>
          <p className="text-gray-700 w-full md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam laudantium iure facere corporis sequi
            illo, quae necessitatibus quas qui quasi accusamus excepturi, distinctio id quos quis quisquam ratione eos
            voluptate vitae labore error consequuntur nostrum! At nam voluptates laborum? Nostrum!
          </p>
        </div>
        <div className="flex items-center justify-center space-x-3 w-full">
          <div className="flex-auto relative" style={{ maxWidth: '33.3%' }}>
            <img src={heroBg} alt="Image 1" className="object-cover w-full h-36 rounded-md" />
            <p className="  text-center py-2 bg-primary text-gray-300 font-bold">
              Image 1
            </p>
          </div>
          <div className="flex-auto" style={{ maxWidth: '33.3%' }}>
            <img src={heroBg} alt="Image 2" className="object-cover w-full h-36 rounded-md" />
            <p className="text-center py-2 bg-primary text-gray-300 font-bold">Image 2</p>
          </div>
          <div className="flex-auto" style={{ maxWidth: '33.3%' }}>
            <img src={heroBg} alt="Image 3" className="object-cover w-full h-36 rounded-md" />
            <p className="text-center py-2 bg-primary text-gray-300 font-bold">Image 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;