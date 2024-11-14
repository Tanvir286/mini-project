// About.js
import React, { useContext } from 'react';
import { MyContext } from '../contexts/AMi';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const { apiData, setSelectedItem } = useContext(MyContext);
  const navigate = useNavigate();

  const students = [
    { id: 1, name: 'John Doe', age: 21 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Alice Johnson', age: 20 },
  ];

  const handleSelectStudent = (student) => {
    setSelectedItem(student);  
    navigate('/contact');      
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-6xl text-center font-bold mb-8 text-blue-500">About Page</h1>
      
      {apiData ? (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data from API:</h2>
          <p className="mb-2"><strong>Title:</strong> {apiData.title}</p>
          <p><strong>Body:</strong> {apiData.body}</p>
        </div>
      ) : (
        <p className="text-gray-500 text-center mb-8">No data received yet. Please fetch data from the Home page.</p>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Student List:</h2>
      <ul className="space-y-4">
        {students.map((student) => (
          <li key={student.id} className="flex items-center space-x-4">
            <button
              onClick={() => handleSelectStudent(student)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              {student.name} - {student.age} years old
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
