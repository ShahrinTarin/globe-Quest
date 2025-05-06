import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';


const MyProfile = () => {
  const { user } = use(AuthContext)
  console.log(user);
  return (
    <div className='w-11/12 mx-auto flex flex-col justify-around md:flex-row py-8'>
      <div>
        <img src="https://i.ibb.co.com/2YpXbGD1/profile.gif" alt="gif" />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto py-10  px-5 shadow-lg rounded-xl  bg-blue-50 text-gray-800 space-y-4">
        <div className='avatar'>
          <div className='w-32 rounded-full'>
            <img src={user.photoURL
            } alt="User Photo" />
          </div>
        </div>
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-lg font-medium text-gray-500"> <span className=' font-bold '>Name : </span>{user.
              displayName
            } </h2>
            <h2 className="text-lg font-medium text-gray-500"><span className=' font-bold '>Email : </span> {user.email
            } </h2>
            <h2 className="text-lg font-medium text-gray-500"> <span className='font-bold '>PhotoURL: </span>{user.photoURL
            } </h2>
            <h2 className="text-lg font-medium text-gray-500"> <span className='font-bold '>UID : </span>{user.uid
            } </h2>

          </div>

        </div>
        <div>
        <Link to='/auth/updateprofile'><button className="btn btn-neutral btn-outline text-gray-600 hover:text-white">Update Profile</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;