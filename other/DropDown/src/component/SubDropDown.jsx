
import React, { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import CoreSubDropDown from './CoreSubDropDown';

const SubDropDown = () => {

    let [subShow,setSubShow] = useState(false);

    let handleSubClick = () => {
        setSubShow(!subShow);
    }

    return (
        <div>
             <div className='bg-green-500 mt-10 cursor-pointer'>
                {/* Items part here */}
                <div className='flex items-center text-2xl gap-x-3' onClick={handleSubClick}>
                  <h1>This is Main Drop Page one</h1>
                  {subShow ?  <FaPlus /> :  <BiSolidDownArrow />  }             
                </div>
                {/* Items part here */}
                <div>
                { subShow &&
                    <div>
                        <CoreSubDropDown add={true}/>
                        <CoreSubDropDown add={false}/>
                        <CoreSubDropDown add={true}/>
                        <CoreSubDropDown add={false}/>
                    </div>
                 }

                </div>
             </div>
        </div>
    );
};

export default SubDropDown;