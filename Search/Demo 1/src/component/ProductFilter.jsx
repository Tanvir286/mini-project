import React, { useState } from 'react';
import { Products } from './Data';
import Picture from './Picture';

const ProductFilter = () => {


  const [searchTerm, setSearchTerm] = useState('');


  return (
    <div>
      {/* Search Input Start*/}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='p-2 mb-5 border border-slate w-96 outline-none'/>
      {/* Search Input End*/}
      {/* Product List */}
      <div className=''>
        <ul className='flex justify-between flex-wrap gap-x-5 gap-y-5'>
          {Products.filter((item) =>
            item.description.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
            <div key={index} className='w-[23%] flex justify-center items-center p-5 flex-col border'>
              <Picture imageName={item.img} />
              <li className='text-xl'>{item.description}</li>            
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;
