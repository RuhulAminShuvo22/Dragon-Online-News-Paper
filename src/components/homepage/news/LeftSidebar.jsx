import React from 'react';

const LeftSidebar = ({categories}) => {
    return (
        <div>
            <h2 className="font-bold text-lg">
                All Categories
            </h2>

            <ul className="flex flex-col gap-3 mt-6">
                {
                    categories.news_category.map(category => {
                        return( 
                        <li key={category.category_id} className="bg-slate-100 p-2 rounded-md font-bold text-center text-md">{category.category_name}
                        </li>
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default LeftSidebar;