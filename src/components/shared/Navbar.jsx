
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'

const Navbar = () => {
    return (
        <div className="container mx-auto flex justify-between mt-6">

            <div>

            </div>


            <ul className="flex justify-between items-center gap-3 text-gray-700" >
                <li>
                    <Link href={'/'}>Home</Link>
                </li>

                <li>
                    <Link href={'/about-us'}>About</Link>
                </li>

                <li>
                    <Link href={'/career'}>Career</Link>
                </li>
                
            </ul>

            <div className="flex items-center gap-2">
                <Image src={userAvatar} alt="User avatar" width={60} hight={60}>

                </Image>

                <button className="btn bg-purple-500 text-white">  
                    <Link href={"/login"}>Login</Link> 
                </button>

            </div>

        </div>
    );
};

export default Navbar;