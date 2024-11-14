import React, { useState } from 'react'; 
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import Banner from "../assets/bannerReg.png"
import Glogin from "../assets/Google.png"

import { FaEye,FaEyeSlash } from "react-icons/fa6";

import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification } from "firebase/auth";
import {  signInWithPopup,GoogleAuthProvider } from "firebase/auth";


import { LineWave } from 'react-loader-spinner'
import { toast } from 'react-toastify';

import { useNavigate, Link } from 'react-router-dom';


const registration = () => {


    const auth = getAuth();
    
    

    let navigate = useNavigate();  

    const [eye,setEye] = useState(false);
    const [loader,setLoader] =  useState(false);
 
    const [registration, setRegistration] = useState({
        email:"",
        name: "",
        password: "",
      });

    const [regError, setRegError] = useState({
        email:"",
        name: "",
        password: "",
      });



    const handleChange = (e) => {
        // console.log(e.target.name);
        //console.log(e.target.value);
        setRegistration({ ...registration, [e.target.name]: e.target.value });
        setRegError({ ...regError, [e.target.name]: ""});
      };  

    const handleSubmit = () => {

  
      let email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //let result = pattern.test(text);


       if(!registration.email){
           setRegError({...regError, email: "Email Required" });
       }
       else if(!email_pattern.test(registration.email)){
        setRegError({...regError, email: "Valid Email Required" });
       }
       else if(!registration.name){
        setRegError({...regError, name: "Name Required" });
       }
        else if(!registration.password){
        setRegError({...regError, password: "Password Required" });
       }
       else if (registration.password.length < 6){
        setRegError({...regError, password: "Password must be greater then 6" });
       }
       else{
        setLoader(true);
        createUserWithEmailAndPassword(auth, registration.email, registration.password)
        .then((userCredential) => {

          console.log(userCredential);
          console.log(userCredential.user.emailVerified);
         

          setLoader(false);
          sendEmailVerification(auth.currentUser).then(() => {
           toast.success("Registration Successful,Please check your email for verification",
            {
            position: "top-center",
            autoClose: 5000,
            theme:"dark",
            }
            );
           navigate("/login");
           });

          console.log("usercreated",userCredential);
        })
        .catch((error) => {
          setLoader(false);
          setRegistration({email:"",name:"",password:""});   
        
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
          console.log(error.message.includes("email-already-in-use"));
          if(error.message.includes("email-already-in-use")){
            setRegError({...regError, email: "Email already in use" });
          }
        });
       }

    };   


    const handleGlogin = () => {
      console.log("ami clicked ");
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
  .then((result) => {
   
    toast("Done");

  }).catch((error) => {
     console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message; 
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    
  });
    };
    

    return (
       
        <Grid container spacing={4}>
       
          <Grid  xs={6}>   

            <div className='regBox'>
 
              {/* Heading Part  start */}

              <h1>Get started with easily register</h1>
              <p className='para' >Free register and you can enjoy it</p>

              <img src={Glogin} alt="" onClick={handleGlogin}  /> 

               {/* Heading Part  end */}



               {/* Email Part  start */}

              <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleChange} />
              {regError.email && (
                 <Alert severity="warning">{regError.email}</Alert>
              )}
              
               {/* Email Part  end */}


               {/* Name Part  start */}

              <TextField id="outlined-basic" label="Name" variant="outlined" name="name" onChange={handleChange}  />
              {regError.name && (
                 <Alert severity="warning">{regError.name}</Alert>
              )}

               {/* Name Part  end */}


               {/* Password Part  start */}
               <div className='one'>
                <TextField id="outlined-basic" label="Password" variant="outlined" name="password" onChange={handleChange} type={ eye ? "text" : "password"} /> 
                {regError.password && (
                  <Alert severity="warning">{regError.password}</Alert>
                )}
               </div>
             

               {/* Password Part  end */} 

               {/* Icon Part  start */}
               {
                 eye && 
                 <FaEye  className='two' onClick={()=>setEye(!eye)} />
               }
              
               {
                 !eye && 
                 <FaEyeSlash  className='two' onClick={()=>setEye(!eye)} />
               }
               
              {/*Icon Part end */}
              {/* Loader Item  start */ }
              {
                !loader &&
                <Button variant="contained" onClick={handleSubmit} >Submit</Button>
              }
              {
                loader &&
                <LineWave
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
                />
              }
                  
              {/* Loader Item  end */ }

              <p>Already Have an account? <Link to="/login">Login</Link> </p>

             </div>
            
          </Grid>

          <Grid  xs={6}>
            <img  id="banner" src={Banner} alt="" /> 
          </Grid>

        
        </Grid>
      
    );
};

export default registration;