// import Image from 'next/image';
// import React from 'react';
// import { FaBookmark, FaShareAlt } from 'react-icons/fa';

// const NewsCard = ({ news }) => {
//     console.log(news, "news")

//     return (
//         <div className="card bg-base-100  shadow-sm">
//             <div className="card-body">
//                 {/* author info */}

//                 <div className='flex justify-between items-center bg-slate-200 p-4'>

//                     <div className='flex gap-1 items-center'>
//                         <Image 
//                             src={news.author?.img} 
//                             alt={news.author?.name} 
//                             height={40} 
//                             width={40}
//                             className='rounded-full'
//                             >
//                         </Image>

//                         <div>
//                             <h2 className='font-semibold'>{news.author?.name}</h2>
//                             <p className='text-xs'>{news.author?.published_date}</p>
//                         </div>

//                     </div>

//                     <div className='flex justify-between items-center'>
//                         <FaShareAlt className='text-xl' />
//                         <FaBookmark className='text-xl'/>

//                     </div>

//                 </div>


//                 <h2 className="card-title">{news.title}</h2>
//                 <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//             </div>
//             <figure>
//                 <Image 
//                     src={news.image_url}
//                     alt={news.title}
//                     height={300}
//                     width={300}
//                     className='w-full'
//                 ></Image>
//             </figure>
//             <p>{news.details}</p>
//         </div>
//     );
// };

// export default NewsCard;


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    console.log(news, "news");

    return (
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
                <p className='line-clamp-3'>{news.details}</p>

                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-2 '>
                        <h2 className='flex items-center gap-2 '><FaStar className='text-lg text-red-500'/>{news.rating.number} </h2>
                        <h2 className='flex items-center gap-2 '><FaEye className='text-lg'/>{news.total_view}</h2>
                    </div>
                    <Link href={`/news/${news._id}`}>
                        <button className='btn'>
                            See Details
                        </button>
                    </Link>
                    
                </div>

            </div>


        </div>
    );
};

export default NewsCard;