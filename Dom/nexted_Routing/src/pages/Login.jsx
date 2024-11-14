import React, { useState } from 'react'; 
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Banner from "../assets/bannerReg.png"
import { FaEye,FaEyeSlash } from "react-icons/fa6";

import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification ,  signInWithEmailAndPassword } from "firebase/auth";
import { LineWave } from 'react-loader-spinner'
import { toast } from 'react-toastify';

import { useNavigate , Link } from 'react-router-dom';

const Login = () => {

    const auth = getAuth();

    let navigate = useNavigate();

    const [eye,setEye] = useState(false);
    const [loader,setLoader] =  useState(false);
 
    const [registration, setRegistration] = useState({
        email:"",   
        password: "",
      });

    const [regError, setRegError] = useState({
        email:"",  
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
        else if(!registration.password){
        setRegError({...regError, password: "Password Required" });
       }
       else if (registration.password.length < 6){
        setRegError({...regError, password: "Password must be greater then 6" });
       }
       else{
        setLoader(true);
        signInWithEmailAndPassword(auth, registration.email, registration.password)
        .then((userCredential) => {

          setLoader(false);
          console.log(userCredential.user.emailVerified);
          if(!userCredential.user.emailVerified){
            toast.error('Please verfy your email first', {
              position: "top-center",
              autoClose: 5000,
              theme:"colored"
            });
          }else{
            toast.success('Login Succesfull', {
              position: "top-center",
              autoClose: 5000,
              theme:"colored"
            });
            navigate('/home');
          }

          console.log("usercreated",userCredential);
        })
        .catch((error) => {
          setLoader(false);
          setRegistration({email:"",name:"",password:""});   
        
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
       
          if(error.message.includes("auth/invalid-credential")){
            setRegError({...regError, email: "invalid-credential" });
          }
        });
       }

    };   

    return (
        <Grid container spacing={4}>
       
        <Grid  xs={6}>

          <div className='regBox'>

            {/* Heading Part  start */}

            <h1>Login to your account!</h1>
            

             {/* Heading Part  end */}



             {/* Email Part  start */}

            <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleChange} />
            {regError.email && (
               <Alert severity="warning">{regError.email}</Alert>
            )}
            
             {/* Email Part  end */}


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
            <Link to="/forgotpassword">Forgot Password    </Link>

            <p>Don't Have an account? <Link to="/">Create account</Link> </p>

           </div>
          
        </Grid>

        <Grid  xs={6}>
          <img  id="banner" src={Banner} alt="" /> 
        </Grid>

      
      </Grid>
    ); 
};

export default Login;

