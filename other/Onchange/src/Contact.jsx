import React, { useState } from 'react';
import Input from './component/Input';
import Button from './component/Button';

const Contact = () => {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    

    return (
        <div className='container mx-auto mt-5'>

             <div className='border border-blue-600 p-5'>
                 <h1>Hello {fname} and {lname}</h1>
             </div>
           <form>            
               <p>Text here</p>
               <Input type='text' 
                      placeholder="fName" 
                      className='border-2 border-blue-300 block mb-5 bg-slate-100' 
                      value={fname}
                      onChange={(e)=>setFname(e.target.value)}
                       />
               <p>Email here</p>
               <Input type='text' 
                       placeholder="lName"  
                       className='border-2 border-blue-300 block mb-5 bg-slate-100'
                       value={lname}
                       onChange={(e)=>setLname(e.target.value)}
                       />
               {/* <p>Password here</p>
               <Input   className='border-2 border-blue-300 block mb-5 bg-slate-100' /> */}

               <Button btnName="Click Here" className="border border-black p-2 bg-blue-300" />

           </form>
        </div>
    );
};

export default Contact;