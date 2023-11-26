import React from 'react';
import heroBg from '../../assets/heroBg.jpg';
import Button from '../../components/ui/Button';
const OurworkSection = () => {
  const images = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMdGTatrbgcrG26h0FVdUfzuqZoUCuLfT2A&usqp=CAU", text: 'ELDERLY SUPPORT' },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rPmx_j6x97Lda1zFI-Oaejs774p1pK77fA&usqp=CAU", text: 'EDUCATION' },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYNMRfE_2lFdXUfTSl7akTgOd97XpuRIvqQ&usqp=CAU", text: 'MONTHLY GROCERIES' },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlxmrOyltf8AHtTRZ_yuJnPu26dSOcQ_IXQ&usqp=CAU", text: 'SUPPORT FAMILY BUSINESS' },
    { src: "https://miro.medium.com/v2/resize:fit:1400/0*4NH_KclNnZnf677E", text: 'HELP THE YOUTH' },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnFbGkNZrcDPq7H31iKE4I8Oq_16L4vS51A&usqp=CAU", text: 'DISASTER RELIEF' },
  ];

  const firstRowImages = images.slice(0, 3);
  const secondRowImages = images.slice(3);

  return (
    <div className="container mx-auto px-10 py-8">
      <div className="flex justify-center md:space-x-8 space-x-1 p-5">
      <a href="/ourwork"><Button text="Past" type="filled" /></a>
      <a href="/ourwork"><Button text="Current" type="filled" /></a>
      <a href="/ourwork"><Button text="Future" type="filled" /></a>
      </div>

      <div className="mt-8 md:grid grid-cols-3 gap-5">
        {firstRowImages.map((image, index) => (
          <div className="relative" key={index}>
          <img
            className="w-full h-full object-cover brightness-50 m-2 md:m-0 rounded-md"
            src={image.src}
            alt={`Image ${index + 1}`}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
            {image.text}
          </div>
        </div>
        ))}
      </div>

      <div className="md:mt-8 md:grid md:grid-cols-3 gap-5">
        {secondRowImages.map((image, index) => (
          <div className="relative" key={index}>
            <img
              className="w-full h-full object-cover brightness-50 m-2 md:m-0 rounded-md"
              src={image.src}
              alt={`Image ${index + 4}`}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              {image.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="md:w-2/3 w-full md:p-4 md:m-5 my-10">
          <p className="text-lg font-semibold">
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            non vel hic sit quod error delectus itaque quaerat soluta labore
            voluptatem, dicta laboriosam voluptatibus iste exercitationem sint
            illo at odio tenetur quisquam corporis neque nulla! Natus itaque
            sequi iure earum. "
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurworkSection;