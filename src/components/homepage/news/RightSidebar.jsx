import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg mb-4'>login with</h2>

            <div className='flex flex-col gap-3'>
                <button className='btn border-blue-500 text-blue-500'> 
                <FaGoogle/>
                 Login with google
            </button>

            <button className='btn border-black font-bold'>
                <FaGithub />
                Login with github
            </button>
            </div>
        </div>
    );
};



export default RightSidebar;