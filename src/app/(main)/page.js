import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import { div, object } from "framer-motion/client";
import Image from "next/image";


async function getCategories () {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}



export default async function Home() {

  const categories = await getCategories();
  console.log(categories.news_category  , "categories")

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">


        <div className=" col-span-3">

              <LeftSidebar categories={categories} activeId={null}></LeftSidebar>
              
        </div>


        <div className="font-bold text-3xl bg-purple-100 col-span-6">
              All News
        </div>


        <div className="font-bold text-3xl bg-yellow-100 col-span-3">
              Social Icons
        </div>


        


    </div>
  )
}