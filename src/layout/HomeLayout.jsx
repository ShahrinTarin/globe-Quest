import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../components/Nav';


const HomeLayout = () => {
    return (
        <div className='mx-2 md:w-11/12 md:mx-auto '>
            <header>
            <Nav></Nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default HomeLayout;