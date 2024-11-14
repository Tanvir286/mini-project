import React, { useState } from 'react'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate ,Link} from 'react-router-dom';




const ForgotPassword = () => {

    const auth = getAuth();

    let navigate = useNavigate();

    let [value,setValue] =  useState(""); 

    let handleClick = () => { 
        
        sendPasswordResetEmail(auth, value)
       .then(() => {
          toast("Done"); 
          navigate("/login");
          })
          
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
       });
    }

    return (
        <div className='forgotbox'>
             <div className='containbox'>
               <h4>Forgot Password</h4>
               <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=> setValue(e.target.value)} />

               <Button variant="contained" onClick={handleClick} >Submit</Button>
             </div>
        </div>
    );
};

export default ForgotPassword;