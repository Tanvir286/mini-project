import React, { useState } from 'react';
import Computer from './Computer';

import Moblie from './Moblie';
import Electronic from './Electronic';

const Product = () => {
 

    const Page = ['All', 'Computer',  'Moblie', 'Electronics']
    const [category, setCategory] = useState("All");
    console.log(category);

    const handleCategory = (selectedCategory) => {
      setCategory(selectedCategory);
    };

    return (
        <div className='container mx-auto'>
          {/* Title Part Start Here */}
          <div className='py-5 px-3 border border-slate '> 
            <ul className='flex font-dm text-xl gap-x-10'>
              {Page.map((item) => ( 
                <li
                  key={item}
                  className={`cursor-pointer font-dm hover:text-primary ${category === item && 'text-secondary text-2xl'}`}
                  onClick={() => handleCategory(item)}>
                  {item} 
                </li>
              ))}   
            </ul>
          </div>
          {/* Title Part End Here */}
    
          {/* Render Component Based on Category */}
          <div>

          </div>
          {category === 'All' && (
            <>
              <Computer />           
              <Moblie />
              <Electronic />
            </>
          )}
          {category === 'Computer' && <Computer />}       
          {category === 'Moblie' && <Moblie />}
          {category === 'Electronics' && <Electronic />}
        </div>
      );
};

export default Product;