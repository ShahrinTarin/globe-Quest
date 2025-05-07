import React from 'react';
import { Link } from 'react-router';

const Card = ({card}) => {
    const {name,thumbnail,banner,description,tech_category,id,price,frequency}=card
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
		<img alt="" src={thumbnail} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-md font-semibold">{name}</a>
			<span className="text-md text-gray-700 font-bold">{price}$</span>
		</div>
	</div>
	<div>
		<img src={banner} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{tech_category}</h2>
		<p className="text-sm dark:text-gray-600">{description}</p>
	</div>
	<div className="flex flex-wrap items-center justify-between">
		<div className="space-x-2 md:mb-0 mb-5 btn btn-outline rounded-3xl font-semibold text-amber-600 text-lg">
			{frequency}
		</div>
		<div className="flex space-x-2 text-sm dark:text-gray-600">
        <Link to={`/details/${id}`} type="button" className="cursor-pointer hover:bg-white hover:text-black hover:border px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100">View More</Link>
		</div>
	</div>
</div>
    );
};

export default Card;