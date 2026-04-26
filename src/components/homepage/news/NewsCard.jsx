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
//                 ></Image>
//             </figure>
//         </div>
//     );
// };

// export default NewsCard;

import Image from 'next/image';
import React from 'react';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    console.log(news);

    const authorImg =
        news?.author?.img || "https://i.ibb.co/2kRZ8FZ/user.png";

    const newsImg =
        news?.image_url || "https://i.ibb.co/4pDNDk1/no-image.png";

    return (
        <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden">

            {/* 🔹 Author */}
            <div className="flex justify-between items-center bg-slate-200 p-4">

                <div className="flex gap-2 items-center">
                    {/* 👉 Next Image OK here */}
                    <Image
                        src={authorImg}
                        alt="author"
                        height={40}
                        width={40}
                        className="rounded-full"
                    />

                    <div>
                        <h2 className="font-semibold text-sm">
                            {news?.author?.name || "Unknown"}
                        </h2>
                        <p className="text-xs text-gray-500">
                            {news?.author?.published_date || "No date"}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <FaShareAlt />
                    <FaBookmark />
                </div>
            </div>

            {/* 🔹 Title */}
            <div className="p-4">
                <h2 className="font-bold text-lg">{news?.title}</h2>
            </div>

            {/* 🔥 MAIN FIX HERE */}
            <figure className="px-4 pb-4">
                <img
                    src={newsImg}
                    alt="news"
                    className="w-full h-[250px] object-cover rounded-xl"
                />
            </figure>
        </div>
    );
};

export default NewsCard;