import React from 'react';

const Inputtwo = ({type,className,placeholder}) => {
    return(
        type ?

        <input type={type} className={className} placeholder={placeholder} />:

        <input type="number" placeholder='This is demo'  className={className} />
        
        )  
};

export default Inputtwo;