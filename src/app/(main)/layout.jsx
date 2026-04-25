import BreakingNewsPage from '@/components/BreakingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <BreakingNewsPage></BreakingNewsPage>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;