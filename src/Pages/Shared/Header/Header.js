import React, { useContext } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import BrandLogo from '../../../assets/img/BrandLogo.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaHome, FaUserCircle } from "react-icons/fa";
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'


const Header = () => {
  const { user, logOut, theme, setTheme } = useContext(AuthContext)

  // log out
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  };

  return (
    <div className="navbar bg-[#002333] text-white sticky top-0 px-5 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden btn btn-ghost btn-circle">
            <Bars3Icon className="h-7 w-7" />
          </label>

          <label tabIndex={0} className='hidden lg:block'>
            <Link to='/'><img src={BrandLogo} alt="" /></Link>
          </label>

          <ul tabIndex={0} className="lg:hidden menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#002333] text-white rounded-box w-52">
            <Link to='/'><img src={BrandLogo} alt="" /></Link>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'><FaHome className='inline-block' /> Home</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/fag'>FAQ</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            {
              theme === 'light' ?
                <NavLink onClick={() => setTheme("black")} title='Dark'><MoonIcon className="h-6 w-6 text-blue-500" /></NavLink>
                :
                <NavLink onClick={() => setTheme("light")} title='Light'><SunIcon className="h-6 w-6 text-blue-500" /></NavLink>
            }
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:block ">
        <div className='space-x-5 md:flex'>
          <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'> Home</NavLink>
          <NavLink to='/courses'>Courses</NavLink>
          <NavLink to='/fag'>FAQ</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          {
            theme === 'light' ?
              <NavLink onClick={() => setTheme("black")} title='Dark'><MoonIcon className="h-6 w-6 text-blue-500" /></NavLink>
              :
              <NavLink onClick={() => setTheme("light")} title='Light'><SunIcon className="h-6 w-6 text-blue-500" /></NavLink>
          }
        </div>
      </div>

      <div className="navbar-end space-x-5">
        {
          user?.uid ?
            <>
              <NavLink><button onClick={handleLogOut}>Log Out</button></NavLink>
            </>
            :
            <>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/register'>Sign Up</NavLink>
            </>
        }

        {
          user?.uid ?
            <img title={user?.displayName} src={user?.photoURL} className='w-10 h-10 rounded-full' alt='img'></img>
            :
            <FaUserCircle />
        }
      </div>
    </div>
  );
};

export default Header;