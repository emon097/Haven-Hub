import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCartDownload } from 'react-icons/bi';
import { AuthContext } from '../../context/Authprovider';


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut =()=> {
    logOut().then(res => {
    const user = res.user;
    })}
    return (
        <div>
        <div className="navbar  bg-slate-200 text-black">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li >
                <Link to="/" className='hover:text-white hover:bg-lime-500 ' >
                Home
                </Link>
                </li>
                <li>
                <Link to="/dashboard" className='hover:text-white hover:bg-lime-500 ' >
                Dashboard
                </Link>
                </li>
               
                   <li>
                  <Link to="/product" className='hover:text-white hover:bg-lime-500 ' >
                  Product
                  </Link>
                  </li>
                  <li>
              
                <Link to="/cart" className='hover:text-white hover:bg-lime-500 ' >
                  <BiCartDownload className='text-2xl'></BiCartDownload>
                Cart  
                
                </Link>
              </li>
              </ul>
            </div>
            <Link to="/" className="flex items-center relative">
            <img className='w-14' src="https://i.ibb.co/tqPW58H/haven-hub-removebg-preview.png" alt="haven-hub-removebg-preview" />
               <p className='mr-8 font-extrabold'>Haven Hub</p> </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li >
                <Link to="/" className='hover:text-white hover:bg-lime-500 ' >
                Home
                </Link>
              </li>
              <li>
                
                <Link to="/dashboard" className='hover:text-white hover:bg-lime-500 ' >
                Dashboard
                </Link>
              </li>
              <li>
                <Link to="/product" className='hover:text-white hover:bg-lime-500 ' >
                Product
                </Link>
              </li>
               <li>
              
                <Link to="/cart" className='hover:text-white hover:bg-lime-500 ' >
                  <BiCartDownload className='text-2xl'></BiCartDownload>
                Cart  
                
                </Link>
              </li>
             
             
            </ul>
          </div>
          {
            user?.uid ? <div onClick={handleLogOut} className="navbar-end">
            <p className="bg-red-500 rounded-xl hover:bg-red-400 p-3 px-6 cursor-pointer hover:text-white text-white">LogOut</p>
          </div> :<div className="navbar-end">
            <Link to="/login" className="bg-lime-500 rounded-xl hover:bg-lime-400 p-3 px-6 cursor-pointer hover:text-white text-white">LogIn</Link>
          </div>
          }
        </div>
      </div>
    );
};

export default Navbar;