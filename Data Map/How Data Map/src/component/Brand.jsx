import React from 'react';
import {brands} from './Data';

const Brand = () => {
    return (
        <div>
             <ul className='border border-blue-500 text-center'>
                    <h1 className='bg-slate-400 text-2xl border-b-2 border-black'>Brand  Part</h1>
                    {brands.map((item, index) => (
                    <li key={index}>
                        {item.name}
                    </li>
                   ))}
                </ul>
        </div>
    );
};

export default Brand;