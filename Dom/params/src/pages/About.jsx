import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const { id, name } = useParams(); // Destructure the parameters from the URL

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-3">About {name}</h1>
      <p className="text-lg text-gray-700">Product ID: {id}</p>
      <p className="text-lg text-gray-700">This page contains more details about {name}.</p>
    </div>
  );
};

export default About;
