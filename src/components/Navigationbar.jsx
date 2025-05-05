import React from 'react';
import { NavLink } from 'react-router';

const Navigationbar = () => {
    return (
        <div>
            <nav className="bg-gray-50 shadow-sm py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Website Name/Logo */}
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-2xl font-bold no-underline transition-colors duration-300 ${
              isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'
            }`
          }
        >
          Country Holidays
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `no-underline transition-colors duration-300 ${
                isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
              }`
            }
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              `no-underline transition-colors duration-300 ${
                isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
              }`
            }
          >
            About
          </NavLink>
          
          <NavLink 
            to="/contact-us"
            className={({ isActive }) => 
              `no-underline transition-colors duration-300 ${
                isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
              }`
            }
          >
            Contact Us
          </NavLink>
          
          <NavLink 
            to="/my-profile"
            className={({ isActive }) => 
              `no-underline transition-colors duration-300 ${
                isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
              }`
            }
          >
            My Profile
          </NavLink>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Navigationbar;