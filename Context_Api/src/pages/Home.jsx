// Home.js
import React, { useContext, useState } from 'react';
import { MyContext } from '../contexts/AMi'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { setApiData } = useContext(MyContext); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setApiData(response.data);
      setError(null); 
      navigate('/about'); 
    } catch (error) {
      console.error('Error fetching data', error);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <h1 className="text-6xl text-center mb-96">Home Page</h1>
      <button 
        onClick={fetchData} 
        className="bg-blue-500 text-white p-2 rounded" 
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch API Data'}
      </button>
    </>
  );
};

export default Home;
