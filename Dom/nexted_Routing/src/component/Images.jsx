import React from 'react';

const Images = ({imageName,altText}) => {
    return (
        <img src={`./assets/${imageName}`} alt={altText} />
    );
};

export default Images;