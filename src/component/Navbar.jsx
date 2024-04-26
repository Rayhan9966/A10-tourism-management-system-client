import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
<div>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
        {/* <li><a>Home</a></li> */}
        <li>
          <a>AllTouristSpot</a>
          <ul className="p-2">
          <li><a>Bangladesh</a></li>
            <li><a>Thailand</a></li>
            <li><a>Indonesia</a></li>
            <li><a>Malaysia</a></li>
            <li><a>Vietnam</a></li>
            <li><a>Cambodia</a></li>
          </ul>
        </li>
        <li><Link to='/about'>About</Link></li>
      <li><Link to='/addtouristspot'>AddTouristSpot</Link></li>
      <li><Link to='/mylist'>MyList</Link></li>
      </ul>
    </div>
    <img className="flex items-center justify-center w-20 h-20  rounded-full bg-violet-400" src="https://i.postimg.cc/2jxLBCnM/travel-tour-landscape-sun-airplane-260nw-366089225.webp" alt="" />
    <a className="btn btn-ghost text-xl">UnitedTrip</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>AllTouristSpot</summary>
          <ul className="p-2">
            <li><a>Bangladesh</a></li>
            <li><a>Thailand</a></li>
            <li><a>Indonesia</a></li>
            <li><a>Malaysia</a></li>
            <li><a>Vietnam</a></li>
            <li><a>Cambodia</a></li>
          </ul>
        </details>
      </li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/addtouristspot'>AddTouristSpot</Link></li>
      <li><Link to='/mylist'>MyList</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">Update Profile</span>
          </a>
        </li>
       
        <li><a>LogIN</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>

    );
};

export default Navbar;