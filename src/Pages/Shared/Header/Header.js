import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrandLogo from '../../../assets/img/BrandLogo.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  // log out
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  };

  return (
    <div className="navbar bg-[#002333] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>

          <label tabIndex={0} className='hidden lg:block'>
            <Link to='/'><img src={BrandLogo} alt="" /></Link>
          </label>

          <ul tabIndex={0} className="lg:hidden menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 text-white rounded-box w-52">
            <Link to='/'><img src={BrandLogo} alt="" /></Link>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink>FAQ</NavLink>
            <NavLink>Blog</NavLink>

          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:block ">
        <div className='space-x-5'>
          <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
          <NavLink to='/courses'>Courses</NavLink>
          <NavLink>FAQ</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>light/Dark</NavLink>
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