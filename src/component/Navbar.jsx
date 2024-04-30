import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  console.log(user);
    const [theme, setTheme]= useState('light')
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-them', localTheme)

    },[theme])
    const handleToggle =(e)=>{
        if (e.target.checked){
            setTheme('synthwave')
        }
        else{
            setTheme('synthwave') 
        }


    }

    return (
<div>
<div className="navbar bg-base-100 z-10 px-4">
  <div className="navbar-start">
    <div className="dropdown dropdown-start">
      <div tabIndex={0} role="button" className="btn m-1 btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/touristspot'>Added All Tourist Spot</Link></li>
        {/* <li><a>Home</a></li> */}
        <li>
        <details>
          <summary>Countries</summary>
          <ul className="ml-10 p-1">
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
      {
      user && 
      <li><Link to='/addtouristspot'>Add Tourist Spot</Link>
      </li>
      }
      <li><Link to='/mylist'>MyList</Link></li>
      </ul>
    </div>
    <img className="flex items-center justify-center w-20 h-20  rounded-full bg-violet-400" src="https://i.postimg.cc/2jxLBCnM/travel-tour-landscape-sun-airplane-260nw-366089225.webp" alt="" />
    <a className="btn btn-ghost text-xl">UnitedTrip</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/touristspot'>Added All Tourist Spot</Link></li>
      <li>
        <details>
          <summary>Countries</summary>
          <ul className="ml-10 p-1">
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
      {
      user && 
      <li><Link to='/addtouristspot'>Add Tourist Spot</Link>
      </li>
      }
      <li><Link to='/mylist'>MyList</Link></li>
    </ul>
  </div>

  <div className="navbar-end">
  {user ? <div>
      {user.email}
     <Link to="/"> <button onClick={()=>logOut()}>Logout</button> </Link>
    </div>:""}
  <label className="cursor-pointer grid place-items-center">
  <input onChange={handleToggle} type="checkbox" 
  value="synthwave" 
  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
  
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.postimg.cc/632cXxf5/south-asia-travel-week-in-india-1.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">Update Profile</span>
          </a>
        </li>
       
        <li><Link to='/login'>LogIN</Link></li>
      </ul>
    </div>
  </div>
  </div>
</div>

    );
};

export default Navbar;