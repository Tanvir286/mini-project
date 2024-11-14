import { useEffect, useState } from "react";
import Title from "./title";
import Button from "./component/Button";
import File from "./component/File";



const App = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  

  const handleCountOne = () => {
     setCount(count + 1);
  }
  const handleCountTwo = () => {
     setCount2(count2 + 5);
  }
  
  
  return (
    <>   
      
        
         <Title title="Counter One" value={count} /> 
         <Button handleClick={handleCountOne}>Button one</Button> 
         {/* <button onClick={handleCountOne}>Click 1</button> */}
         <hr />
         <Title title="Counter Two" value={count2} />
         {/* <button onClick={handleCountTwo}>Click 2</button> */}
         <Button handleClick={handleCountTwo}>Button Two</Button> 
         <hr />
     
         <File>
          <h1>jveoijjed</h1>
          <h2>dfewyguygyg</h2>
          <h4>wfguwegf</h4>
         </File> 
    </>

  )};

export default App; 

 