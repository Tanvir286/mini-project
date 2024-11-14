import React from 'react';
import useSWR from 'swr';

/*
  1.npm install swr
*/
 
const fetcher = async (...url) => {
    const response = await fetch(...url);
    const data = await response.json()
    return data;
};

 const SWR = () => {

    const { data, error } = useSWR('https://api.quotable.io/random', fetcher,{
         suspense: true,
    });

    // if (error) return <div>Failed to load</div>;
    // if (!data) return <h1>Loading...</h1>;
   

    return (
        <div>
            <h1>This is me</h1>
            <p>{data.content} — {data.author}</p>
        </div>
    );
};

export default SWR;