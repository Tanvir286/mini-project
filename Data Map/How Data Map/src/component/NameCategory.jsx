import React from 'react';
import { nameCatagory} from './Data';

const NameCategory = () => {
    return (
        <div>
             {/* First Part Here Start */}
             <div>
            <ul className='border border-blue-500 text-center'>
                <h1 className='bg-slate-400 text-2xl border-b-2 border-black'>Name Catagory Part</h1>
                {nameCatagory.map((item, index) => (
                    <li key={index}>
                        {item.name}
                    </li>
                ))}
            </ul>
             </div>
              {/* First Part Here  end*/}
              {/* Second Part Here Start*/}
              <div>
                {/* Second Part Here Start */}
                <ul className='border border-blue-500 text-center'>
                    <h1 className='bg-slate-400 text-2xl border-b-2 border-black'>Name Catagory Others [0]</h1>
                    {nameCatagory.map((item, index) => (
                        <li key={index}>
                            {item.Others[0].subname}
                        </li>
                    ))}
                </ul>
                {/* Second Part Here  end*/}
              </div>
               {/* Second Part Here end*/}
               {/* Third Part Here Start*/}
               <div>
                <ul className='border border-blue-500 text-center'>
                    <h1 className='bg-slate-400 text-2xl border-b-2 border-black'>Others Map</h1>
                    {nameCatagory.map((item, index) => (
                        <li key={index}>
                            <ul>
                                {item.Others.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        {subItem.subname}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
               </div>          
               {/* Third Part Here Start*/}
        </div>
       

    );
};

export default NameCategory;
