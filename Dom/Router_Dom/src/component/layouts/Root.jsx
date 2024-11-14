import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="h-[10%]">
                <Navbar />
            </div>
            <div className="">
                <Outlet />
            </div>
            <div className="h-[10%]">
                <Footer />
            </div>
        </div>
    );
};

export default Root;
