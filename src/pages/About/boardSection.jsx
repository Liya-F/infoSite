import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import heroBg from '../../assets/heroBg.jpg'

const BoardMembers = () => {
  const members = [
    {
      id: 1,
      photo: heroBg,
      fullName: 'John Doe',
      position: 'Chairperson',
      facebookUrl: 'https://www.facebook.com/johndoe',
      linkedinUrl: 'https://www.linkedin.com/in/johndoe',
    },
    {
      id: 2,
      photo: heroBg,
      fullName: 'Jane Smith',
      position: 'Vice Chair',
      facebookUrl: 'https://www.facebook.com/janesmith',
      linkedinUrl: 'https://www.linkedin.com/in/janesmith',
    },
    {
        id: 3,
        photo: heroBg,
        fullName: 'Jane Smith',
        position: 'Vice Chair',
        facebookUrl: 'https://www.facebook.com/janesmith',
        linkedinUrl: 'https://www.linkedin.com/in/janesmith',
      },
      {
        id: 4,
        photo: heroBg,
        fullName: 'Jane Smith',
        position: 'Vice Chair',
        facebookUrl: 'https://www.facebook.com/janesmith',
        linkedinUrl: 'https://www.linkedin.com/in/janesmith',
      },
      {
        id: 5,
        photo: heroBg,
        fullName: 'Jane Smith',
        position: 'Vice Chair',
        facebookUrl: 'https://www.facebook.com/janesmith',
        linkedinUrl: 'https://www.linkedin.com/in/janesmith',
      },
      {
        id: 6,
        photo: heroBg,
        fullName: 'Jane Smith',
        position: 'Vice Chair',
        facebookUrl: 'https://www.facebook.com/janesmith',
        linkedinUrl: 'https://www.linkedin.com/in/janesmith',
      },
    
  ];

  return (
    <div className="container mx-auto px-32 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div key={member.id} className="text-center">
            <img
              src={member.photo}
              alt={member.fullName}
              className=" w-52 h-56 object-cover rounded-lg mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">{member.fullName}</h3>
            <p className="text-gray-500 text-sm mb-1">{member.position}</p>
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href={member.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;