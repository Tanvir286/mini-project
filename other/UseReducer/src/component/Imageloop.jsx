import React, { useState } from 'react';
import Image from './Image';
import { Images, Product } from './Data';

const Imageloop = () => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleImageClick = (imageName, productName) => {
        console.log(`Image clicked: ${imageName}, Product: ${productName}`);
    };

    const handleColorButtonClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <>
            <h1 className='text-center text-white bg-slate-400 mb-5 text-3xl'>This is the Images Part</h1>
            <div className='container mx-auto'>
                <div className='flex flex-wrap gap-y-5 justify-between '>
                    {Images.map((image, index) => (
                        <div key={index} className={`w-[32%] p-2 border  ${selectedColor}`}>
                            <Image
                                imageName={image.name}
                                altText={image.alt}
                                onClick={() => handleImageClick(image.name, Product[index].item)}
                            />
                            <div className='flex items-center justify-between gap-x-5'>
                                <h1 className='mt-3 text-2xl'>{Product[index].item}</h1>
                                <p className='text-xl mt-3'>12</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='my-5 flex gap-x-2 '>
                    <button className='border px-6 py-5 bg-blue-300 font-dm text-xl inline-block' onClick={() => handleColorButtonClick('text-blue-500')}>Blue</button>
                    <button className='border px-6 py-5 bg-red-300  font-dm text-xl  inline-block' onClick={() => handleColorButtonClick('text-red-500')}>Red</button>
                    <button className='border px-6 py-5 bg-orange-300 font-dm text-xl inline-block' onClick={() => handleColorButtonClick('text-orange-500')}>Orange</button>
                    <button className='border px-6 py-5 bg-yellow-300 font-dm text-xl inline-block' onClick={() => handleColorButtonClick('text-yellow-500')}>Yellow</button>
                    <button className='border px-6 py-5 bg-green-300  font-dm text-xl inline-block' onClick={() => handleColorButtonClick('text-green-500')}>Green</button>
                </div>
            </div>
        </>
    );
};

export default Imageloop;
