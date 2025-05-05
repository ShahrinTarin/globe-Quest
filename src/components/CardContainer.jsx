import React from 'react';
import Card from './Card';

const CardContainer = ({data}) => {
    return (
        <div className='mb-8 w-11/12 mx-auto'>
           <h2 className='text-4xl font-bold mb-2 text-center'>Our services</h2>
           <p className='text-center font-thin text-lg mb-8'>Discover global adventures with Globe Quest! Curated holiday boxes with guides, gear, and exclusive <br /> experiences for beach lovers, mountain explorers, and cultural enthusiasts. Subscribe now!</p>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
            {
                data.map(card=><Card key={card.id} card={card}></Card>)
            }
           </div>
        </div>
    );
};

export default CardContainer;