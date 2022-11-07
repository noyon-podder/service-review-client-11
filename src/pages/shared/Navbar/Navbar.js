import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-icon.png';
const Navbar = () => {
    return (
        <header className='bg-black'>
            <div className="navbar max-w-6xl mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link><li className='text-black font-3xl font-semibold'>Home</li></Link>
          <Link><li className='text-black font-3xl font-semibold'>Services</li></Link>
            </ul>
          </div>
          <Link className="normal-case text-xl flex items-center"><img src={logo} alt="" className='w-12 mr-3' /> <span className='font-bold text-3xl text-white uppercase '>Justice</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <Link><li className='text-white font-3xl font-semibold mr-5 hover:text-orange-600'>Home</li></Link>
          <Link><li className='text-white font-3xl font-semibold mr-5 hover:text-orange-600'>Services</li></Link>
              
          </ul>
        </div>
        <div className="navbar-end">
        <Link> <button className='btn btn-warning px-6 text-black font-semibold'>Register</button></Link>
        </div>
      </div>
        </header>
    );
};

export default Navbar;