import React from 'react';

const MyProfile = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col justify-around md:flex-row py-8'>
      <div>
        <img src="https://i.ibb.co.com/2YpXbGD1/profile.gif" alt="gif" />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto py-10 md:py-0 w-sm shadow-lg rounded-xl sm:px-12 bg-blue-50 text-gray-800">
      <div className='avatar'>
                    <div className='w-32 rounded-full'>
                    <img  src= 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg' alt="User Photo" />
                    </div>
                  </div>
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;