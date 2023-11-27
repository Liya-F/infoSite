import React from 'react';

const JoinUsForm = () => {
  return (
    <div className="max-w-f mx-2 bg-secondary p-6 rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-primary mb-4">Join Us and Get Involved</h2>

      <div className="md:flex md:items-center mb-4">
        <div className="md:w-1/3 md:mr-4">
          <label htmlFor="firstName" className="block text-gray-600 text-sm font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-primary text-gray-900"
            placeholder="Your First Name"
          />
        </div>

        <div className="md:w-1/3 md:mr-4">
          <label htmlFor="lastName" className="block text-gray-600 text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-primary text-gray-900"
            placeholder="Your Last Name"
          />
        </div>

        <div className="md:w-1/3">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-primary text-gray-900"
            placeholder="Your Email Address"
          />
        </div>

        <button className="bg-primary mt-5 ml-4 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-primary">
        JOIN
      </button>

      </div>

      
    </div>
  );
};

export default JoinUsForm;
