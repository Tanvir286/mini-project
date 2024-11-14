import React from 'react';

const Input = ({type="text",className,placeholder="This is deafult Text",...all}) => {
   
    return(

        <input type={type} className={className} placeholder={placeholder} {...all} />
        
        )  
};

export default Input;