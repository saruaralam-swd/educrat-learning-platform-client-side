import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (

    <div className='flex items-center justify-center '>
      <div className='border'>
        <form className=' p-5 space-y-5 w-[400px]'>
          <div className='space-y-2'>
            <h2>Your Email</h2>
            <input className='border px-3 p-2 w-full focus:outline-2 outline-blue-600 rounded-md' type="email" name="email" placeholder='your email' required />
          </div>

          <div className='space-y-2'>
            <h2>Password</h2>
            <input className='border px-3 p-2 w-full focus:outline-2 outline-blue-600 rounded-md' type="password" name="password" placeholder='your password' required />
          </div>

          {/* error */}
          <p className='text-red-400'></p>

          <button className='bg-yellow-300 hover:bg-yellow-400 px-4 py-1 rounded-md'>Login</button><br></br>


          <hr></hr>
          <Link className='text-sm hover:underline text-blue-600'>Forget Password?</Link> <br></br>
          <Link to='/register' className='text-sm hover:underline text-blue-600'>Or, Sign Up Using E-mail Address </Link>
        </form>

        <div className='p-5'>
          <button className='flex items-center gap-3 w-full border hover:bg-gray-200 px-4 py-1 mb-3 rounded-md'> <span>sign in with google</span></button>
          <button className='flex items-center gap-3 w-full border hover:bg-gray-200 px-4 py-1 rounded-md'> <span>sign in with facebook</span></button>
        </div>
      </div>
    </div>
  );
};

export default Login;