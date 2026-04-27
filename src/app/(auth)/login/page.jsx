'use client'

import Link from 'next/link';
import React from 'react';
import { useForm, Watch } from 'react-hook-form';

const LoginPage = () => {

    const {
        register, 
        handleSubmit,
        watch, 
        formState: {errors},
    }  = useForm()

    const handleLoginFunc = (data)=> {
        console.log(data,"data")
    }

    // console.log(watch("email"))
    // console.log(watch("password"))



    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>

                    <fieldset className="fieldset" >
                        <legend className="fieldset-legend">Email Address</legend>
                        <input 
                        type="email" 
                        className="input" 
                        //name='email'
                        {...register("email",{ required: "email field is required" })}
                        placeholder="Type your email" />
                        {errors.email  && <p className='text-red-500'>{errors.email.message}</p>}
                        
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                        type="password" 
                        className="input" 
                        //name='password'
                        {...register("password",{ required: "password field is required" })}
                        placeholder="Type your password" />
                        {errors.password  && <p className='text-red-500'>{errors.password.message}</p>}
                        
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