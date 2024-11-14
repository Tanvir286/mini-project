import React from 'react';

const Picture = ({imageName,altText}) => {
    return (
        <img src={`./assets/${imageName}`} alt={altText}   className='w-full' />
    );
};

export default Picture;