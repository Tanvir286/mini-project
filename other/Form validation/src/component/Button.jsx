import React from 'react';

const Button = ({btnName,className,...props}) => {
    return (
         <button className={className} {...props}>{btnName} </button>
    );
};

export default Button;