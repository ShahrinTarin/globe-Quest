import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import CardContainer from '../components/CardContainer';
import OtherStuff from '../components/OtherStuff';
import Enjoy from '../components/Enjoy';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <header className='text-center mb-5 space-y-2'>
                <h1 className='text-4xl font-bold'><span className='text-amber-500'>Globe</span> Quest</h1>
                <p className='text-xl font-medium'>Unpack Your Next Nature Adventure !</p>
            </header>
         <Banner></Banner>
         <CardContainer data={data}></CardContainer>
         <OtherStuff></OtherStuff>
         <Enjoy></Enjoy>
        </div>
    );
};

export default Home;