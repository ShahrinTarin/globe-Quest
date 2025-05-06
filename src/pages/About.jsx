import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [pageTitle, setPageTitle] = useState('Globe Quest');
    
        useEffect(() => {
        const newTitle = 'About';
            setPageTitle(newTitle);
            document.title = newTitle;
      
        }, [])
    return (
        <div>
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
           <Nav></Nav>
           <main className='min-h-[calc(100vh-330px)] w-11/12 mx-auto'>
           <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      
      <div className="grid gap-5 mb-8 md:grid-cols-2 ">
        <div className="p-5 duration-300 transform bg-white border  border-amber-700 rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Take a ride on a Horse</h6>
          <p className="text-sm text-gray-900">
          Embark on a thrilling horseback adventure with Globe Quest! Explore scenic trails, guided by experts, and enjoy exclusive riding gear.  Subscribe for your unforgettable equestrian journey today!
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border  border-amber-700 rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Discover typical Food</h6>
          <p className="text-sm text-gray-900">
          Savor global flavors with Globe Quest! Discover typical foods from each destination with curated
          recipes and tasting kits. Subscribe to explore authentic culinary delights on your adventure journey!
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border  border-amber-700 rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Learn to cook deliciuos food</h6>
          <p className="text-sm text-gray-900">
          Learn to cook delicious global dishes with Globe Quest! Get curated recipes, cooking kits,
          and expert tips monthly. Subscribe to master authentic cuisines on your culinary adventure!
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border border-amber-700 rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Farm activities</h6>
          <p className="text-sm text-gray-900">
          Enjoy farm activities with Globe Quest! Experience harvesting, animal care, and rural workshops with
          expert guides. Subscribe for hands-on fun and authentic countryside adventures every month!
          </p>
        </div>
        
        
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-amber-200 hover:bg-gray-700 hover:text-white focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
    </div>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default About;