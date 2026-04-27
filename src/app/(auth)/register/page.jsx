'use client'

import Link from 'next/link';
import React from 'react';
import { useForm, Watch } from 'react-hook-form';

const RegisterPage = () => {

    const {
        register, 
        handleSubmit,
        watch, 
        formState: {errors},
    }  = useForm()

    const handleRegisterFunc = (data)=> {
        console.log(data,"data")
        const {email, name, photo, password} = data;
        console.log(name,email,photo,password)
    }

    console.log(watch("email"))
    console.log(watch("password"))



    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>

                    {/* your name */}

                    <fieldset className="fieldset" >
                        <legend className="fieldset-legend">Your Name</legend>
                        <input 
                        type="text" 
                        className="input" 
                        //name='email'
                        {...register("name",{ required: "name field is required" })}
                        placeholder="Type your name" />
                        {errors.name  && <p className='text-red-500'>{errors.name.message}</p>}
                        
                    </fieldset>

                    {/* your photo URL */}

                    <fieldset className="fieldset" >
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input 
                        type="text" 
                        className="input" 
                        //name='email'
                        {...register("photo",{ required: "photo URL field is required" })}
                        placeholder="Type your photo URL" />
                        {errors.photo  && <p className='text-red-500'>{errors.photo.message}</p>}
                        
                    </fieldset>

                    {/* your email */}

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

                    {/* your password */}

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

                    <button type="submit" className="btn btn-active w-full bg-slate-800 text-white">Register</button>

                </form>
                
            </div>
        </div>
    );
};

export default RegisterPage;