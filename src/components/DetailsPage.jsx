import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2'

const DetailsPage = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const singlecard = data.find(card => card.id === parseInt(id))
    const { name, thumbnail, banner, price, description, tech_category, frequency, subscription_benefits, features } = singlecard
    const handleRatings = (e) => {
        e.preventDefault()
        const rate = e.target.rate.value;
        if (rate > 5) {
            Swal.fire({
                icon: "error",
                title: "Invalid Ratings",
                text: "You Can Rate between (1-5)...",

            });
        }
        else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Review has been Successfully Submitted",
                showConfirmButton: false,
                timer: 1500
            });
        }


    }
    return (
        <div className='flex  w-120 shadow-lg mx-auto my-10 md:my-16 '>
            <div className="py-4 rounded-md shadow-md  bg-gray-50 text-gray-800">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={thumbnail} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 border-gray-300" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">{name}</h2>
                            <span className="inline-block text-xs leading-none text-gray-600">{tech_category}</span>
                        </div>
                    </div>
                    <div className="space-x-2 btn btn-outline rounded-3xl font-semibold text-amber-600 text-lg">
                        {frequency}
                    </div>
                </div>
                <img src={banner} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        {description}
                    </div>
                    <div className="flex flex-wrap items-center pt-3 pb-1">
                        <div className="flex items-center space-x-2">
                            <button className='font-bold text-lg' title="Open options" type="button">
                                {price}$
                            </button>

                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="text-sm space-y-2">
                            <p className='mb-2 text-md font-semibold'>Our Benefits :</p> {
                                subscription_benefits.map((benefits, index) => <div key={index} >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{benefits}</span>
                                </div>)
                            }
                            <p className='mb-2 text-md font-semibold'>Our Feature :</p> {
                                features.map((features, index) => <div key={index} >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{features}</span>
                                </div>)
                            }
                        </div>
                        <form onSubmit={handleRatings} className='space-y-2 text-center'>
                            <input type="text" placeholder="Add a Feedback..." className="w-full py-1 px-10 hover:border rounded text-sm pl-4 dark:text-gray-800 focus-within:bg-amber-50" required />
                            <input type="number" placeholder="Rate the Plan..." name='rate' className="w-full py-1 px-10 hover:border rounded text-sm pl-4 dark:text-gray-800 focus-within:bg-amber-50" required />

                            <button type='submit' className='cursor-pointer  hover:bg-white hover:text-black hover:border px-4 py-1 font-semibold rounded-full bg-gray-800 text-gray-100 '>Review</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;