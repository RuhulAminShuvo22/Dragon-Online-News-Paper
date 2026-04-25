import { span } from 'framer-motion/client';
import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
    _id: "1",
    title:  " Breaking News: Major Event Unfolds in the City. ",
    },
    {
    _id: "2",
    title:  " Breaking News: News Policy Announced by the Government. ",
    },
    {
    _id: "3",
    title:  " Breaking News: Sports Team wins Championship. ",
    },

];


const BreakingNewsPage = () => {
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto" >
            <button className="btn bg-red-500">Latest News </button>
            <Marquee pauseOnHover={true} speed={100}>
               {news.map(n=>{
                   return <span key={n._id}>{n.title}</span>
               })}
            </Marquee>
        </div>
    );
};

export default BreakingNewsPage;