import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
           <div></div>
           <div className='flex gap-3 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>about</NavLink>
                <NavLink to='/'>career</NavLink>
           </div>
           <div className='flex gap-4'>
                <img src={user} alt="" />
                <button className='btn btn-primary'>Login</button>
           </div>
        </div>
    );
};

export default Navbar;