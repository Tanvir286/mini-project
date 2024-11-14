import axios from 'axios';
import React, { useEffect, useState } from 'react';

/*
  1.npm i axios
*/
 
const Axios = () => {

    const [first, setFirst] = useState(null);

    const fetchQuote = async () => {
       
      const response = await axios.get("https://api.quotable.io/random");
      setFirst(response.data);
    
    }; 

    useEffect(() => {
  
      fetchQuote(); // Call the function to fetch the data
    }, []);


    return (
        <div>
            <h1>{first?.content}</h1>
        </div>
    );
};

export default Axios;