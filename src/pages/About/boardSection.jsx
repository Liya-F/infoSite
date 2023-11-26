import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Title from '../../components/ui/Title';

const BoardMembers = () => {
  const members = [
    {
      id: 1,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcJKlkD0jgxu_zvB-2QiuD7V3YAq75r9NtA&usqp=CAU",
      fullName: 'Oliver Davis',
      position: 'Chairperson',
      facebookUrl: 'https://www.facebook.com/johndoe',
      linkedinUrl: 'https://www.linkedin.com/in/johndoe',
    },
    {
      id: 2,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yCMBpekD57G4-5FTZcs2CiZUbspx-hA6mQ&usqp=CAU",
      fullName: 'Samuel Carter',
      position: 'Treasurer, Volunteer Coordinator',
      facebookUrl: 'https://www.facebook.com/janesmith',
      linkedinUrl: 'https://www.linkedin.com/in/janesmith',
    },
    {
        id: 3,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJtY0pB9Q5zoHI57bmesfl4U7vC8rqtyDlQ&usqp=CAU",
        fullName: 'Emily Rodriguez',
        position: 'Vice Chair, Program Manager',
        facebookUrl: 'https://www.facebook.com/janesmith',
        linkedinUrl: 'https://www.linkedin.com/in/janesmith',
      },
      {
        id: 4,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeTMv6b3rGnb7YCoPTpjhZH22wagg0sLzqw&usqp=CAU",
        fullName: 'Oliver Davis',
        position: 'Chief Financial Officer',
        facebookUrl: 'https://www.facebook.com/janesmith',
        linkedinUrl: 'https://www.linkedin.com/in/janesmith',
      },
      {
        id: 5,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhcrz2BZ4hfvYj1XJixNjlVm30sB-3M3tFQ&usqp=CAU",
        fullName: 'Sophia Patel',
        position: 'Director of Community Outreach',
        facebookUrl: 'https://www.facebook.com/janesmith',
        linkedinUrl: 'https://www.linkedin.com/in/janesmith',
      },
      {
        id: 6,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61B6gKPKZqDLR7NJY0EO7I_Xz_l665Nja4OALBzRGHbPWbyfArZrRuU2hNWxfn0Lq-nU&usqp=CAU",
        fullName: 'Ethan Foster',
        position: 'Communications Specialist, Secretary',
        facebookUrl: 'https://www.facebook.com/janesmith',
        linkedinUrl: 'https://www.linkedin.com/in/janesmith',
      },
    
  ];

  return (
    <div className="container mx-auto px-32 py-8">
    <Title text="Board Members" />
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
              <li>
                <a
                  href={member.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaTwitter />
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