import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const items = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ];

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-5">Product List</h1>
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/page2/${item.id}/${item.name}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700"
          >
            Go to {item.name} (ID: {item.id})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
