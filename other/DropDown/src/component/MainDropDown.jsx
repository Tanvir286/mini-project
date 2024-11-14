import React, { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

const MainDropDown = ({dropdown}) => {
 
     let [show,setShow] = useState(dropdown);

     let handleClick = () => {
         setShow(!show);
     }

    return (
        <div className='bg-blue-500 mt-10 cursor-pointer'>
             {/* Items part here */}
             <div className='flex items-center text-2xl gap-x-3' onClick={handleClick}>
                 <h1>This is Main Drop Page one</h1>
                 {show ?  <FaPlus /> :  <BiSolidDownArrow />  }
                 
             </div>
              {/* Items part here */}
              {/* Dropdown part here */}
             <div>
             { !show &&
                    <div>
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                        <p>Item 4</p>
                    </div>
                 }
             </div>
        </div>
    );
};

export default MainDropDown;