import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { h2 } from 'framer-motion/client';
import React from 'react';


async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );

  const data = await res.json();
  return data.data;
}

async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );

  const data = await res.json();
  return data.data;
}

const NewsCategoryPage = async ({ params }) => {

  const { id } = await params;
  console.log(id, "paramsRes")

const categories = await getCategories();
const news = await getNewsByCategoryId(id)


  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={null}></LeftSidebar>
      </div>

      <div className="font-bold  bg-purple-100 col-span-6">
        All News
        <div className="space-y-4">
          {news.length > 0 ?  news.map((n) => {
            return <div key={n._id} className="p-6 rounded-md border">{n.title}</div>;
          }): <h2 className='font-bold text-4xl text-center my-7'>No news found</h2>}
        </div>
      </div>

      <div className="  col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;