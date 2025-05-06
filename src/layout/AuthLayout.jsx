import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-base-200  min-h-screen'>
           <header className='w-11/12 mx-auto py-4'>
           <Nav></Nav>
           </header>


<main className='w-11/12 mx-auto py-5 min-h-[calc(100vh-380px)]'>
    <Outlet></Outlet>
</main>

<footer>
    <Footer></Footer>
</footer>
            
        </div>
    );
};

export default AuthLayout;