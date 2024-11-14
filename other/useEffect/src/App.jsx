import { useEffect, useState } from "react";



const App = () => {

  const [count, setCount] = useState(0);
  

  useEffect(() => {
    console.log("run every time");
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  },[])

  
  return (
    <>
         <h1>{count}</h1>
        
         <button onClick={() => {setCount(count => count + 1)}}>Click</button>
        
     
    </>

  )};

export default App; 

 