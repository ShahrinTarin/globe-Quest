import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Logout = () => {
    return (
        <div className="w-full max-w-lg mx-auto p-8 space-y-3 rounded-xl bg-gray-600 text-gray-100 shadow-2xl">
        <h1 className="text-2xl font-bold text-center">Register Your Account</h1>
        <form noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Name</label>
                <input type="text" name="Name" id="Name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="Photo URL" className="block dark:text-gray-600">Photo URL</label>
                <input type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                <div className="flex justify-end text-xs dark:text-gray-600">
                    <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                </div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-amber-600">Register</button>
        </form>
        <div className="flex items-center w-full my-4">
            <hr className="w-full text-gray-100" />
            <p className="px-3 text-gray-100">OR</p>
            <hr className="w-full text-gray-100" />
        </div>
        <div className="flex items-center justify-center pt-4 space-x-1">
            
        <button className="btn bg-white text-black border-[#e5e5e5]">
               <FcGoogle size={20}></FcGoogle>
                Login with Google
            </button>
       
        </div>

        <p className="text-xs text-center sm:px-6 text-gray-100">Already have an account ?
            <Link to='/auth/login' rel="noopener noreferrer" className="underline text-lg font-medium text-amber-400">Login</Link>
        </p>
    </div>
    );
};

export default Logout;