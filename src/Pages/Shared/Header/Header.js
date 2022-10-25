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
    <header className='flex justify-between items-center p-2 bg-gray-400'>
      <Link to='/'><img src={BrandLogo} alt="" /></Link>

      <div className='space-x-5'>
        <NavLink className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
        <NavLink>Courses</NavLink>
        <NavLink>FAQ</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>light</NavLink>
        <NavLink>Dark</NavLink>
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
      </div>
      <div>
        {
          user?.uid ?
            <img title={user?.displayName} src={user?.photoURL} className='w-10 h-10 rounded-full' alt='img'></img>
            :
            <FaUserCircle />
        }
      </div>
    </header>
  );
};

export default Header;