import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const HomeLayout = () => {
 
    return (
        <div className=''>
            <header>
            <Nav></Nav>
            </header>
            <main className='min-h-[calc(100vh-330px)] w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
         <footer>
            <Footer></Footer>
         </footer>
        </div>
    );
};

export default HomeLayout;