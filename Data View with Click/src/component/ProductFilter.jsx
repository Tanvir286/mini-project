import React, { useState } from 'react';
import { Products } from './Data'; 
import Picture from './Picture';

const ProductFilter = () => {

  const categories = ['All', 'Clock', 'Mobile', 'Rice'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' ? Products: Products.filter(product => product.category === selectedCategory);


  return (
    <div>

       {/* ===========================
              Click Button find 
       ===============================*/}
      <div className='py-4 px-5 border border-slate mb-5 flex gap-x-5 text-xl'>
        {categories.map(category => (
          <button
            key={category}
            className={`bg-blue-500 py-3 px-4 ${selectedCategory === category ? 'bg-red-500' : ''}`}
            onClick={() => setSelectedCategory(category)}>
            {category}
          </button>       
        ))}
      </div>
      {/* ==============================
              Click Button find 
       ===============================*/}
      {/* ==============================
              Product Part Start 
       ===============================*/}
      <div className=''>
        <ul className='flex justify-between flex-wrap gap-x-5 gap-y-5'>
          {filteredProducts.map((item, index) => (       
            <div key={index} className='w-[23%] flex justify-center items-center p-5 flex-col border'>
              <Picture imageName={item.img} />
              <li className='text-xl'>{item.description}</li>
            </div>                 
          ))}
        </ul>
      </div>
       {/* ==============================
              Product Part End 
       ===============================*/}
    </div>
  );
};

export default ProductFilter;
