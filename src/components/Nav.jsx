import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import userIcon from '../assets/user.png'
import Swal from 'sweetalert2'
const Nav = () => {
    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {
        logOut().then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "You Logged Out Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch(() => {
            // An error happened.
        });
    }

    const links = <>
        <li><NavLink className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-50  text-amber-500' : 'text-gray-700 hover:bg-gray-100'
            }`} to='/'>Home</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-50  text-amber-500' : 'text-gray-700 hover:bg-gray-100'
            }`} to='/about'>About</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-50 text-amber-500' : 'text-gray-700 hover:bg-gray-100'
            }`} to='/contactus'>Contact Us</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-50 text-amber-500' : 'text-gray-700 hover:bg-gray-100'
            }`} to='/myprofile'>My Profile</NavLink></li>

    </>

    return (
        <div className="navbar shadow-md  md:px-8 lg:px-12 mb-5 bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to='/' className="text-2xl font-bold"><span className='text-amber-500'>Globe</span> Quest</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-6 flex">
                <p className='font-medium'> {user && user.displayName}</p>
                <div className='avatar'>
                    <div className='w-10 rounded-full'>
                    <img  src={
                        user ? user.photoURL : userIcon
                    } alt="User Photo" />
                    </div>
                </div>
                {
                    user ? <button onClick={handleLogOut} className='btn font-semibold'>LogOut</button> : <NavLink to='/auth/login' className="btn font-semibold">Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Nav;