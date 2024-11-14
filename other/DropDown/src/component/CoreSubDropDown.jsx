import React, { useState } from 'react';
import { LuBadgePlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";
import Item from './Item';

const CoreSubDropDown = ({add}) => {

    let [show,setShow] = useState(add);
    
    let handleClick = () => {
        setShow(!show);
    }

    return (
       add?
           <div>

                <div className='flex items-center gap-x-5' onClick={handleClick}>
                 
                  { show ? <span>Minimize Me</span> : <span> Add me </span> }
                  { show ? <FaMinus /> : <LuBadgePlus />  }
                 
                </div>

                <div>
                  {show && 
                      <Item/>              
                    }
                </div>
           </div>
            
           
       :
       <div>
             <p>Just me</p>
       </div>
    );
};

export default CoreSubDropDown;