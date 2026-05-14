import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-2.5'>
           <img className='w-[400px]' src={logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>{format(new Date(),'EEEE , MMMM MM , yyyy')}</p>
        </div>
    );
};

export default Header;