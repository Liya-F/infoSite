import React from 'react'
import { FaDonate, FaHandHoldingHeart, FaUserFriends } from 'react-icons/fa';
import Title from '../../components/ui/Title';
const data = [
  {
    icon: <FaDonate size={38} />,
    title: 'Make Donation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/donation',
  },
  {
    icon: <FaHandHoldingHeart size={38} />,
    title: 'Fundraising',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/fundraising',
  },
  {
    icon: <FaUserFriends size={38} />,
    title: 'Become a Volunteer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/volunteer',
  },
];
const GetInvolved = () => {
  return (
    <div className=' pb-10 md:mt-10 mt-20'>
    <Title text="Get Involved" /> 
    <div className="border shadow-2xl p-10 md:w-2/3 md:m-auto mx-5">
      <div className="md:flex md:justify-between">
        {data.map((item, index) => (
          <div key={index} className="flex-1 p-5 border-b-2 md:border-0">
            <div className=" items-center mb-2 flex space-x-2 md:block md:space-x-0">
              <div className="mr-2 m-5 text-yellow-500">{item.icon}</div>
              <h3 className=' font-bold text-lg'>{item.title}</h3>
            </div>
            <p className='mb-3'>{item.description}</p>
            <a href={item.link} className="text-gray-500 hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>

  )
}

export default GetInvolved;