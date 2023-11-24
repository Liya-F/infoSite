import React from 'react';

const PartnersSection = () => {
  const partnerLogos = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcFBbn_4usKUt9YwFgXCquhv0MhN2A0j8eA&usqp=CAU', 
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmZUT4_wDUcpk2RTJaDbH-BUe2fKs5gJ6rA&usqp=CAU', 
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcFBbn_4usKUt9YwFgXCquhv0MhN2A0j8eA&usqp=CAU', 
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmZUT4_wDUcpk2RTJaDbH-BUe2fKs5gJ6rA&usqp=CAU'];

  return (

    <div className="container md:max-w-6xl md:mx-20 mx-10 w-auto md:mt-[50px] mt-[100px] ">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-center">
    PARTNERS
   </h2>

   <div className="max-w-3xl mx-auto mt-8 flex space-x-8">
   {partnerLogos.map((logo, index) => (
     <div key={index} className="w-1/4">
       <img
         src={logo}
         alt={`Partner ${index + 1}`}
         className="w-full h-auto border border-gray-300 rounded"
       />
     </div>
   ))}
 </div>

    </div>
  );
};

export default PartnersSection;
