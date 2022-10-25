import React from 'react';
import { NavLink } from 'react-router-dom';
import BrandLogo from '../../../assets/img/BrandLogo.svg'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-2 bg-gray-400'>
      <img src={BrandLogo} alt="" />
      <div className='space-x-5'>
        <NavLink>Courses</NavLink>
        <NavLink>FAQ</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>light</NavLink>
        <NavLink>Dark</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Sign Up</NavLink>
      </div>
    </header>
  );
};

export default Header;