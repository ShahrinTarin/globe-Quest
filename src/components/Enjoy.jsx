import React from 'react';

const Enjoy = () => {
    return (
        <section className=" text-gray-800 bg-base-200">
	<div className="container flex flex-col justify-between lg:flex-row lg:justify-between">
		<div className="flex mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co.com/J1bhXsz/resort.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
            "Enjoy spectacular countryside"
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Enjoy spectacular countryside with Globe Quest Trove! Immerse in scenic landscapes, guided tours, and outdoor adventures. Subscribe for curated experiences that bring rural beauty to life every month!
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button type="button" className="cursor-pointer bg-white text-black border px-8 py-3 font-semibold rounded-full hover:bg-gray-800 hover:text-gray-100"><a href="#">View More</a></button>
			</div>
		</div>
	</div>
</section>
    );
};

export default Enjoy;