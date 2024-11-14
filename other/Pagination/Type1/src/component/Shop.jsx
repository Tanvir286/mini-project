
import React from 'react';
import Pagination from './Pagination';


const Shop = () => {
    return (
        <div className='container mx-auto my-14'>
              <div className='flex gap-x-4'>
                 <div className='w-[25%] bg-red-600'>4</div>
                 <div className='w-[75%] relative px-5'>
                    <div className='mt-3'>
                       <Pagination itemsPerPage={12} />
                    </div>
                 </div>
              </div>
        </div>
    );
};

export default Shop;