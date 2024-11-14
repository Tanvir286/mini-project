import React from 'react';

const Picture = ({imageName,altText}) => {
    return (
        <div>

            <img src={`./assets/${imageName}`} alt={altText}   className='w-full' />
            
        </div>
    );
};

export default Picture;