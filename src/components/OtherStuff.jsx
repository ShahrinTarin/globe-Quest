import React from 'react';

const OtherStuff = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-2'>Other stuff you may consider</h1>
            <p className='text-center font-thin mb-12 text-lg'>Discover travel accessories, join our adventurer community, or customize your box  with Globe Quest. <br /> Enjoy gear rentals and trip planning for an unforgettable journey. Subscribe today!</p>
            <div className='w-11/12 mx-auto mb-12 p-5 lg:grid lg:grid-cols-9'>
                <div className='col-span-6'>
                    <div className='space-y-10'>
                        <div className="card  card-side flex-col lg:flex-row ">
                            <div className="avatar">
                                <div className="w-50 rounded-full">
                                    <img src="https://i.postimg.cc/SNMG4vR5/horse.jpg" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">Take a ride on a Horse</h2>
                                <p className=' text-[16px] text-gray-500'>Embark on a thrilling horseback adventure with Globe Quest! Explore scenic trails, guided by experts, <br /> and enjoy exclusive riding gear.  Subscribe for your unforgettable equestrian journey today!</p>

                            </div>
                        </div>

                        <div className="card  card-side  flex-col lg:flex-row">
                            <div className="avatar">
                                <div className="w-50 rounded-full">
                                    <img src="https://i.postimg.cc/VLP4nfgF/food.jpg" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">Discover typical Food
                                </h2>
                                <p className=' text-[16px] text-gray-500'>Savor global flavors with Globe Quest! Discover typical foods from each destination with curated <br /> recipes and tasting kits. Subscribe to explore authentic culinary delights on your adventure journey!</p>

                            </div>
                        </div>

                        <div className="card  card-side  flex-col lg:flex-row">
                            <div className="avatar">
                                <div className="w-50 rounded-full">
                                    <img src="https://i.postimg.cc/9FS9ZJcH/cook.jpg" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">Learn to cook deliciuos food
                                </h2>
                                <p className=' text-[16px] text-gray-500'>Learn to cook delicious global dishes with Globe Quest! Get curated recipes,  cooking kits, <br /> and expert tips monthly. Subscribe to master authentic cuisines on your culinary adventure!</p>

                            </div>
                        </div>

                        <div className="card  card-side  flex-col lg:flex-row">
                            <div className="avatar">
                                <div className="w-50 rounded-full">
                                    <img src="https://i.postimg.cc/k4NBwWgT/farm.webp" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">Farm activities
                                </h2>
                                <p className=' text-[16px] text-gray-500'>Enjoy farm activities with Globe Quest! Experience harvesting, animal care, and rural workshops with <br /> expert guides. Subscribe for hands-on fun and authentic countryside adventures every month!</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className='  lg:max-w-sm p-6 mb-8 rounded-md  text-gray-900 space-y-1 shadow-md'>
                        <img src="https://i.ibb.co.com/n8zPbbrD/Screenshot-2025-05-05-095936.png" alt="" className="object-cover object-center w-full rounded-full" />
                        <div className="mt-3 mb-2">

                            <h2 className="block font-bold text-green-700 tracking-widest uppercase text-xl ">Milestone: Celebrating 1,000 Happy Adventurers!</h2>
                        </div>
                        <p className="text-gray-800"><b>Globe Quest</b> proudly marks a remarkable achievement, delivering curated travel experiences to over <b>1,000</b> adventurers worldwide since our launch. From Santorini sunsets to Patagonian trails, our boxes have inspired countless journeys and fostered a thriving global community. Join us as we continue to unlock the world’s wonders!</p>
                        </div>
                <img className='w-full lg:max-w-sm rounded-lg shadow-md ' src="https://i.ibb.co.com/5Wf86TDL/Screenshot-2025-05-05-130446.png" alt="discount offer" />
            </div>
                    </div>
               
        </div>


    );
};

export default OtherStuff;