import React from 'react';

const Electronic = () => {
    return (
        <div>
              <div className='flex justify-between mt-5'>
              <img src="data:image/jpeg;base64,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" alt="" className='  w-full' />
              <img src="https://i5.walmartimages.com/seo/Hyper-Bicycle-26-Men-s-Havoc-Mountain-Bike-Black_598552b8-96fc-4e95-9fbd-10b48c25f76a.ab643dd657a02399f80cfcc2adcc9b22.jpeg" alt="" className='w-full' />
              <img src="https://smartdeal.com.bd/public/uploads/all/sVEEo1bmgQRTmGpQuGaAByUGsBVy9GundgTFjcci.jpg" alt="" className='  w-full' />
              <img src="data:image/jpeg;base64,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" alt="" className='w-full' />
            </div>
        </div>
    );
};

export default Electronic;