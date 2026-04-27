'use client'

import Link from 'next/link';
import React from 'react';

const LoginPage = () => {

    const handleLoginFunc = (e)=> {
        e.preventDefault();
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        console.log(email, password)
    }



    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your Account</h2>

                <form className='space-y-4' onSubmit={handleLoginFunc}>

                    <fieldset className="fieldset" >
                        <legend className="fieldset-legend">Email Address</legend>
                        <input 
                        type="email" 
                        className="input" 
                        name='email'
                        placeholder="Type your email" />
                        
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                        type="password" 
                        className="input" 
                        name='password'
                        placeholder="Type your password" />
                        
                    </fieldset>

                    <button type="submit" className="btn btn-active w-full bg-slate-800 text-white">Login</button>

                </form>
                <br />
                <p className='mt-4'>Do Not Have An Account ? <Link href={"/register"} className='text-blue-500'>Register</Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;