import React from 'react';
import { FcBearish } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";


import Bike from "./assets/bike.jpg"
import Title from "./component/Title"
import Pragraph from './component/Pragraph';
import Images from './component/Images';

import Button from './component/Button';





let App = () => {
  
  return (
    <div className='flex'>

      <div className='bg-blue-300 ml-36 border-2 border-indigo-500'>
           {/* Image part start */}
     <Images link={Bike} altText="Bike" style="w-full" />
     {/* Image part end */}
     

     {/* Title part start */}
      <Title 
           tag="h1" 
           text="Suzuki Gixxer Fi Disc" 
           style = "text-3xl font-bold text-blue-600 text-red-600 px-3"
           />
      {/* Title part end */}
      {/* Description part start */}

      <Pragraph style="text-xl px-3 w-[340px] mt-1" text="The New Gixxer is featured with the muscular street bike styling right, the overall ethos of the appearance is premium & stylish. " />

      {/* Description part end */}
      {/* Price part Start */}

      <Pragraph style="text-xl px-3 font-semibold mt-2" text="Price: 350,000" />

      {/* Price part End */}
      {/* Button part Start */}
 
      <Button link="https://www.bikebd.com/price/suzuki-gsx-s150-price-in-bangladesh" 
              text="View Deatils" 
              style=" text-blue-500 inline-block border-2 text-xl px-3 border-lime-600 rounded-xl mx-2 my-2 " 
             
              icon={<FaArrowRight />}
              icon2={<FaHome />}
              css="text-2xl inline-block ml-2"

              /> 
   
      {/* Button part End */}

      {/* Icon part Start */}

      
      </div>
    
      
       
    </div>
  )
}

export default App
