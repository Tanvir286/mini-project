import React, { useState } from 'react';
import Input from './component/Input';
import Button from './component/Button';

const Contact = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [nameShow, setNameShow] = useState(false);
  

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the default form submission behavior
        setNameShow(true);
        
    }

    return (
        <div className='container mx-auto mt-5'>
            <div className='border border-blue-600 p-5'>
                {nameShow && <h1>Hello {fname} and {lname}</h1>}
            </div>
            <form>
                <p>Text here</p>
                <Input
                    type='text'
                    placeholder="fName"
                    className='border-2 border-blue-300 block mb-5 bg-slate-100'
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <p>Email here</p>
                <Input
                    type='text'
                    placeholder="lName"
                    className='border-2 border-blue-300 block mb-5 bg-slate-100'
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <Button
                    btnName="Click Here"
                    className="border border-black p-2 bg-blue-300"
                    onClick={handleSubmit}
                    disabled = {fname && lname ? false : true}
                     
                />
            </form>
        </div>
    );
};

export default Contact;
