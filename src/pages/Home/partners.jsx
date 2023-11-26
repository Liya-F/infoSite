import React from 'react';
import Title from '../../components/ui/Title';
const PartnersSection = () => {
  const partnerLogos = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmZUT4_wDUcpk2RTJaDbH-BUe2fKs5gJ6rA&usqp=CAU', 
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcFBbn_4usKUt9YwFgXCquhv0MhN2A0j8eA&usqp=CAU', 
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmZUT4_wDUcpk2RTJaDbH-BUe2fKs5gJ6rA&usqp=CAU'];

  return (
    <div className=' bg-lightblue border'>
    <div className="container md:max-w-6xl md:mx-20 mx-10 w-auto md:mt-[50px] mt-[100px] ">
    <Title text="Partners"/>

   <div className="max-w-3xl mx-auto md:mt-8 flex justify-center space-x-5 md:space-x-1 mt-16 mb-10 md:mb-3">
   {partnerLogos.map((logo, index) => (
     <div key={index} className="w-1/4 md:p-12">
       <img
         src={logo}
         alt={`Partner ${index + 1}`}
         className="w-full h-auto rounded"
       />
     </div>
   ))}
 </div>

    </div>
    </div>
  );
};

export default PartnersSection;
