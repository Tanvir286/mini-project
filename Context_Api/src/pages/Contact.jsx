// Contact.js
import React, { useContext } from 'react';
import { MyContext } from '../contexts/AMi';

const Contact = () => {
  const { selectedItem } = useContext(MyContext);

  return (
    <>
      <h1 className="text-6xl text-center mb-96">Contact Page</h1>
      
      {selectedItem ? (
        <div>
          <h2>Selected Student:</h2>
          <p><strong>Name:</strong> {selectedItem.name}</p>
          <p><strong>Age:</strong> {selectedItem.age}</p>
        </div>
      ) : (
        <p>No student selected.</p>
      )}
    </>
  );
};

export default Contact;
