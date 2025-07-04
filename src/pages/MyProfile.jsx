import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';


const MyProfile = () => {
  const { user } = use(AuthContext)
  const [pageTitle, setPageTitle] = useState('Globe Quest');
  
      useEffect(() => {
      const newTitle = 'My Profile';
          setPageTitle(newTitle);
          document.title = newTitle;
    
      }, [])
  
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className='w-11/12 mb-12 gap-8 justify-center items-center px-2 mx-auto flex flex-col lg:flex-row py-8'>
      <div className='w-full'>
        <img  src="https://i.ibb.co.com/2YpXbGD1/profile.gif" alt="gif" />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto md:px-5 py-10 px-8 shadow-lg rounded-xl  bg-base-200 text-gray-800 space-y-4">
        <div className='avatar'>
          <div className='w-34 rounded-full'>
            <img src={user.photoURL
            } alt="User Photo" />
          </div>
        </div>
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-lg font-medium text-gray-500"> <span className=' font-bold'>Name : </span>{user.
              displayName
            } </h2>
            <h2 className="text-sm font-medium text-gray-500"><span className=' font-bold '>Email : </span> {user.email
            } </h2>
            <h2 className="text-sm hidden md:block font-medium text-gray-500"> <span className='font-bold'>PhotoURL: </span>{user.photoURL
            } </h2>
            <h2 className="text-sm font-medium text-gray-500"> <span className='font-bold'>UID : </span>{user.uid
            } </h2>

          </div>

        </div>
        <div>
        <Link to='/auth/updateprofile'><button className="btn btn-neutral  btn-outline text-gray-600 hover:text-white">Update Profile</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyProfile;