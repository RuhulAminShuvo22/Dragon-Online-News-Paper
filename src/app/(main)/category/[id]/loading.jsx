import React from 'react';

const loading = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center'>
            Please wait...
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default loading;