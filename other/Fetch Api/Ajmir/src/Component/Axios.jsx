import axios from 'axios';
import React, { useEffect, useState } from 'react';

/*
  1. npm i axios
*/

const Axios = () => {

    const [info, setInfo] = useState([]); // Initialize as an empty array

    const fetchQuote = async () => {      
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts"); // Correct destructuring
            setInfo(data); 
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }; 
 
    /*===========This is useEffect ==============*/
    useEffect(() => {
        fetchQuote(); // Call the function to fetch the data
    }, []);
    /*===========This is useEffect ==============*/

    return (
        <div>
            {
                info.length > 0 ? (
                    info.map((item) => (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )
            }
             
        </div>
    );
};

export default Axios;
