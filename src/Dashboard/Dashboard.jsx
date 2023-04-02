import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { RxCross2 } from 'react-icons/rx';
import { TfiMenu } from 'react-icons/tfi';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-black bg-white">
                <label htmlFor="my-drawer" className="btn ml-5 mt-5 bg-lime-500 drawer-button">
                <TfiMenu></TfiMenu>
                </label>
                <div className="mx-auto">
                <Outlet></Outlet>
                </div>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            
                <label htmlFor="my-drawer" className="flex bg-lime-500  text-white justify-end  hover:bg-lime-600 cursor-pointer drawer-button ml-64 rounded-lg"><RxCross2 className='text-3xl' ></RxCross2></label>
                <li> <Link to="/dashboard/addProduct">Add Product</Link> </li>
                <li> <Link to="/dashboard/adminOrderList">Product List</Link>  </li>
                <li> <Link>Order List</Link>  </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;