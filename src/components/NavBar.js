import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


export default function NavBar() {
  return (
    <>
    <div>
            <nav className='border-2 p-4 bg-blue-600 rounded-b-lg'>
              <h3 className='text-white'>TextUtils</h3>
              <div className='flex items-center justify-end '>
                <NavLink to="/Textform" className="pr-3 text-white hover:text-orange-600">Home</NavLink>
                <NavLink to="/about" className="pl-2 text-white hover:text-orange-600">About</NavLink>
              </div>
            </nav>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  );
}
