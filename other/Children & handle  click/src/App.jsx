import { useCallback, useEffect, useMemo, useState } from "react";
import Title from "./component/Title";
import Button from "./component/Button";
import File from "./component/File";



const App = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  

  const handleCountOne = useCallback( ()=>{
    setCount(count + 1);
  },[count] );
  
  // akane nuton nuton ref made hobe ata hobe na

  const handleCountTwo = useCallback( ()=>{
    setCount2((prev) => prev + 5);
  },[] );

  // but ata best .karon akta ref tik rakha
 
  
  const evenOrodd = () =>{

     for(let index = 0; index <10000000;index++) {}
      return count % 2 === 0;
  }
 
 
  const EvenOrOdd = useMemo ( () => {
      for(let index = 0; index<100000000;index++){}
      return count % 2 === 0;
    },[count]);




  return (
    <>   
         <h1>{EvenOrOdd ?"Even":"Odd"}</h1>
        
         <Title title="Counter One" value={count} /> 
         <Button handleClick={handleCountOne}>Button one</Button> 
         {/* <button onClick={handleCountOne}>Click 1</button> */}
         <hr />
         <Title title="Counter Two" value={count2} />
         {/* <button onClick={handleCountTwo}>Click 2</button> */}
         <Button handleClick={handleCountTwo}>Button Two</Button> 
         <hr />
     
        
    </>

  )};

export default App; 

 