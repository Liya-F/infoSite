import React from 'react';

const NewsAndMediaSection = () => {
  const newsItems = [
    {
      id: 1,
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjd28qi9yZ3yyQYxjMpO3zHZ86m4mbYMBcj84sl0kCoaSMsf7IT9IywTz2k7xXg_5rns&usqp=CAU', 
      title: 'Emergency Blood Drive Saves Lives',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper nisl.',
      readMoreLink: '#',
    },
    {
      id: 2,
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRphrevO7WWVykIWnjxsGpMqrpK_1PtfUvr7LJp6x4NTRfgBY3b2Cz7c-szy4ZkO2Ajw&usqp=CAU', 
      title: 'Community Comes Together to Fight Hunger',
      description: 'Curabitur vel nisi nec metus dignissim efficitur. Ut euismod felis ac sem tincidunt. Ut euismod felis ac sem tincidunt.',
      readMoreLink: '#',
    },
    {
      id: 3,
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtrPiV63OEbfoHXYbXKRWHQd7V2fDnwFew1lopb01o8JdzAEjQST_u4GkxppzvioVRwQ&usqp=CAU', 
      title: 'Heartwarming Contributions Pour in for Children in Need',
      description: 'Sed eu justo ut ligula tristique dapibus. Duis tincidunt venenatis est id aliquet.',
      readMoreLink: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h2 className="text-4xl font-bold text-primary mb-6">News and Media</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-md shadow-md">
            <img src={item.imageSrc} alt={`News ${item.id}`} className="w-full h-auto mb-4 rounded-md" />

            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>

            <p className="text-gray-600 mb-4">{item.description}</p>

            <a href={item.readMoreLink} className="text-yellow-500 hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndMediaSection;
