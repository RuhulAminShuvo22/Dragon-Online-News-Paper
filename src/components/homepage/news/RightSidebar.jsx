
import React from 'react';
import { FaGithub, FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div className="space-y-6">

            {/* Your Existing Code (UNCHANGED) */}
            <div>
                <h2 className='font-bold text-lg mb-4'>login with</h2>

                <div className='flex flex-col gap-3'>
                    <button className='btn border-blue-500 text-blue-500 flex items-center gap-2'> 
                        <FaGoogle/>
                        Login with google
                    </button>

                    <button className='btn border-black font-bold flex items-center gap-2'>
                        <FaGithub />
                        Login with github
                    </button>
                </div>
            </div>

            {/* Find Us On Section */}
            <div>
                <h2 className='font-bold text-lg mb-4'>Find Us On</h2>

                <div className="border rounded-lg overflow-hidden">
                    <div className="flex items-center gap-3 p-3 border-b hover:bg-gray-100 cursor-pointer">
                        <FaFacebookF className="text-blue-600"/>
                        <span>Facebook</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 border-b hover:bg-gray-100 cursor-pointer">
                        <FaTwitter className="text-blue-400"/>
                        <span>Twitter</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
                        <FaInstagram className="text-pink-500"/>
                        <span>Instagram</span>
                    </div>
                </div>
            </div>

            {/* Q-Zone Section */}
            <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className='font-bold text-lg mb-4'>Q-Zone</h2>

                <div className="space-y-4">
                    <div className="bg-white p-2 rounded shadow text-center">
                        <img 
                            src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=500" 
                            alt="Swimming" 
                            className="mx-auto"
                        />
                        <p className="mt-2 text-sm font-medium">Swimming</p>
                    </div>

                    <div className="bg-white p-2 rounded shadow text-center">
                        <img 
                            src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=500" 
                            alt="Class" 
                            className="mx-auto"
                        />
                        <p className="mt-2 text-sm font-medium">Class</p>
                    </div>

                    <div className="bg-white p-2 rounded shadow text-center">
                        <img 
                            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500" 
                            alt="Playground" 
                            className="mx-auto"
                        />
                        <p className="mt-2 text-sm font-medium">Play Ground</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightSidebar;