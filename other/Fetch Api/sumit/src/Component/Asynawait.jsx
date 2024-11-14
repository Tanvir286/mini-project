
/* This is Asyn await part */

import React, { useEffect, useState } from 'react';

const Asynawit = () => {
 
 const [first, setFirst] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
    
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setFirst(data);
    
    };

    fetchQuote(); // Call the function to fetch the data
  }, []);



    return (
        <div>
            <h1>{first?.content}</h1>
        </div>
    );
};

export default Asynawit;