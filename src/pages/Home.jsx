import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <header className='text-center mb-5 space-y-2'>
                <h1 className='text-4xl font-bold'><span className='text-amber-500'>Globe</span> Quest</h1>
                <p className='text-xl font-medium'>Unpack Your Next Nature Adventure !</p>
            </header>
         <Banner></Banner>
        </div>
    );
};

export default Home;