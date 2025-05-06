import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import CardContainer from '../components/CardContainer';
import OtherStuff from '../components/OtherStuff';
import Enjoy from '../components/Enjoy';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const data = useLoaderData()
    const [pageTitle, setPageTitle] = useState('Globe Quest');

    useEffect(() => {
    const newTitle = 'Globe Quest || Home';
        setPageTitle(newTitle);
        document.title = newTitle;
  
    }, [])
    return (
        <div>
            <Helmet>
            <title>{pageTitle}</title>
            </Helmet>
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