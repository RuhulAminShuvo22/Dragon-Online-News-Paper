import { param, title } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { getNewsDetailsById } from '@/lib/data';
import { BsArrowRight } from 'react-icons/bs'; 


export const generateMetadata = async ({params})=>{
    const {id} = await params;
    console.log(id, " params");
    const news = await getNewsDetailsById(id);
    console.log(news, "news");

    return{
        title: news.title,
        description: news.details,
    }
}
  

const NewsDetailsPage = async ({params}) => {
    const {id} = await params
    console.log(id,"params")


    const news = await getNewsDetailsById(id)
    console.log(news, "news")
    return (
        <div className='max-w-4xl mx-auto my-8 card'>

            {/* <h2>news details page</h2> */}
             <div className="card bg-base-100 shadow-sm">
                        <div className="card-body">
            
                            {/* author info */}
                            <div className='flex justify-between items-center bg-slate-200 p-4'>
            
                                <div className='flex gap-1 items-center'>
                                    <Image
                                        src={news.author?.img || "https://i.ibb.co/2kRZ8FZ/user.png"}
                                        alt={news.author?.name || "author"}
                                        height={40}
                                        width={40}
                                        className='rounded-full'
                                    />
            
                                    <div>
                                        <h2 className='font-semibold'>
                                            {news.author?.name || "Unknown"}
                                        </h2>
                                        <p className='text-xs'>
                                            {news.author?.published_date || "No date"}
                                        </p>
                                    </div>
                                </div>
            
                                <div className='flex justify-between items-center gap-2'>
                                    <FaShareAlt className='text-xl' />
                                    <FaBookmark className='text-xl' />
                                </div>
            
                            </div>
            
                            <h2 className="card-title">{news.title}</h2>
                            <p>
                                {news.details?.slice(0, 100) || "No description"}...
                            </p>
                            {/* 🔥 MAIN FIX (Image → img) */}
                            <figure>
                                <img
                                    src={news.image_url || "https://i.ibb.co/4pDNDk1/no-image.png"}
                                    alt={news.title}
                                    className="w-full h-[250px] object-cover"
                                />
                            </figure>
                            <p className=''>{news.details}</p>
            
                            <div className='flex items-center justify-between gap-2'>
                                <div className='flex items-center gap-2 '>
                                    <h2 className='flex items-center gap-2 '><FaStar className='text-lg text-red-500'/>{news.rating.number} </h2>
                                    <h2 className='flex items-center gap-2 '><FaEye className='text-lg'/>{news.total_view}</h2>
                                </div>
                                <Link href={`/category/${news.category_id}`}>
                                    <button className='btn bg-purple-500 text-white'>
                                        See Other News for this category <BsArrowRight></BsArrowRight>
                                    </button>
                                </Link>
                                
                            </div>
            
                        </div>
            
            
                    </div>

            
            
        </div>
    );
};

export default NewsDetailsPage;