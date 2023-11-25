import React from 'react';
import Title from '../../components/ui/Title';

const WhoWeAre = () => {
  return (
    <div className='bg-gray-100 border pb-10'>
    <div className="container md:max-w-6xl md:mx-20 mx-10 w-auto md:mt-[50px] mt-[100px]">
      <Title text="Who We Are" />

      <p className="m-5 leading-8 text-lg">
        Welcome to NGO Name, where passion meets purpose to create positive change in the world. Founded in 2001, our
        non-profit organization is driven by a collective commitment to making a meaningful impact on the lives of those
        in need.
      </p>

      <p className="m-5 leading-8 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam laudantium iure facere corporis sequi illo,
        quae necessitatibus quas qui quasi accusamus excepturi, distinctio id quos quis quisquam ratione eos voluptate
        vitae labore error consequuntur nostrum! At nam voluptates laborum? Nostrum! accusamus excepturi, distinctio id
        quos quis quisquam ratione eos voluptate vitae labore error consequuntur nostrum! At nam voluptates laborum?
        Nostrum!
      </p>
    </div>
    </div>
  );
};

export default WhoWeAre;