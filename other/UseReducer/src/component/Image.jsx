
import React from 'react';

const Image = ({imageName,altText,onClick}) => {
    return (
         <img src={`./assets/${imageName}`} alt={altText}  onClick={onClick} className='w-full' />
    );
};

export default Image;