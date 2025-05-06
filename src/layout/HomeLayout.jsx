import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Loading from '../components/Loading';


const HomeLayout = () => {
 const {state}=useNavigation()
    return (
        <div className=''>
            <header>
            <Nav></Nav>
            </header>
            <main className='min-h-[calc(100vh-330px)] w-11/12 mx-auto'>
               {state=='loading' ?<Loading/>:<Outlet></Outlet>} 
            </main>
         <footer>
            <Footer></Footer>
         </footer>
        </div>
    );
};

export default HomeLayout;