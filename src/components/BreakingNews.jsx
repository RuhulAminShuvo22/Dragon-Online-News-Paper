import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNewsPage = () => {
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 py-4" >
            <button className="btn bg-red-500">Latest News </button>
            <Marquee>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et delectus velit inventore impedit soluta quae, at illo voluptatem quidem maiores deserunt corporis voluptatibus animi perspiciatis officia veniam temporibus! Consequatur, voluptatem. Asperiores, impedit accusamus quae qui amet facilis reiciendis, excepturi earum saepe quaerat, ipsa vitae quo. Recusandae blanditiis iusto non aliquid porro expedita dolore nostrum nihil, alias exercitationem placeat culpa illum, est tenetur quod, voluptas deserunt minus dolorem rerum eum? Earum maiores, eveniet quia voluptas reiciendis consequuntur eligendi nesciunt, dicta numquam obcaecati laboriosam iste iusto, eaque labore animi minima inventore. Sit ipsum laborum maiores consequuntur unde nemo animi aliquid ex.</p>
            </Marquee>
        </div>
    );
};

export default BreakingNewsPage;