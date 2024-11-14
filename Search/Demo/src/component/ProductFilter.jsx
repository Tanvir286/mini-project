import React, { useState } from 'react';
import { Products } from './Data';
import Picture from './Picture';
import { FaSearch,FaShopify } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import Tata from './Tata';

const ProductFilter = () => {


  const [searchTerm, setSearchTerm] = useState('');


  return (
    <div>
      {/* Header List Start */}
      <div className='bg-third py-3'>
           <div className='container mx-auto'>
             <div className='flex  items-center justify-between gap-x-10 container mx-auto'>
                      {/* logo */}
                      <div className='w-[10%]' >
                          <img src="assets/logo.png" alt=""   />
                      </div>
                       {/* logo */}
                       {/* Search */}
                      <div className='w-[30%] relative flex justify-center mt-5 ml-8'  >
             
                       <input
                          type="text"
                          placeholder="Search products..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className='p-2 mb-5 border border-slate w-96 outline-none '/>
                       
                         <div>
                           <FaSearch  className=' absolute  text-black text-xl top-3 right-2.5' />
                         </div>
                       

                      </div>
                      {/* Search */}
                      {/* 3 Component  */}
                      <div className='w-[45%] ml-16 '>

                        <div className='flex justify-between gap-x-8'>
                      
                        <div className='flex items-center'>
                                <FaShopify className=' text-4xl text-red-400' />
                                <div className='ml-4'>
                                        <p className='text-white text-base font-dm'>Offer</p>
                                        <p className='text-slate-200 text-xs font-dm'>Latest Offers</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <BsLightningChargeFill className=' text-4xl text-red-400' />
                                <div className='ml-4'>
                                        <p className='text-white text-base font-dm'>17th Deals</p>
                                        <p className='text-slate-200 text-xs font-dm'>Special Offers</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <IoMdPerson className=' text-4xl text-red-400' />
                                <div className='ml-4'>
                                        <p className='text-white text-base font-dm'>Offer</p>
                                        <p className='text-slate-200 text-xs font-dm'>Latest Offers</p>
                                </div>
                            </div>

                        </div>

                      </div>
                      {/* 3 Component  */}
                      <div className='w-[15%] flex justify-end' >
                           <button className='py-3 px-5 text-white bg-[#2256a1] font-dm ml-1'>PC Builder</button>
                      </div>
             </div>
           </div>
      </div>    
      {/* Header List End */}

      <div className='container mx-auto'>
     
          {/* Product List */}
          <div className='mt-5'>
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
          {/* Product List */}
          </div>

          
     
    </div>
  );
};

export default ProductFilter;
