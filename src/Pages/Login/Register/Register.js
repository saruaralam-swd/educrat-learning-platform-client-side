import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex items-center justify-center '>
      <div className=''>
        <form  className='p-5 space-y-5 w-[400px] border rounded-md'>

          <input className='border-b-2 p-2 w-full focus:outline-2 outline-blue-600' type="text" name="firstName" placeholder='Enter First Name' required />
          
          <input className='border-b-2 p-2 w-full focus:outline-2 outline-blue-600' type="text" name="photoURL" placeholder='PhotoURL' />
          <input className='border-b-2 p-2 w-full focus:outline-2 outline-blue-600' type="email" name="email" required placeholder='Enter Your Email' />
          <input className='border-b-2 p-2 w-full focus:outline-2 outline-blue-600' type="password" name="password" required placeholder='Password' />
          <input className='border-b-2 p-2 w-full focus:outline-2 outline-blue-600' type="password" name="confirm" required placeholder='Confirm Password' />

          {/* error */}
          <p className='text-red-400'></p>
          <button className='bg-[#f9a51a] hover:bg-[#eca93d] px-4 py-3 w-full font-semibold rounded-md'>Crate a account</button>
          
          <p className='text-center mt-4'>Already have account ? <Link to='/login' className='hover:underline text-[#F9A51A]'>Login</Link></p>
        </form>

        <p className='text-center'>or</p>
        <div className='p-5'>
          <button className='flex items-center gap-24 w-full border hover:bg-gray-200 px-4 py-1 mb-3 rounded-full'> <span>sign in with google</span></button>
          <button className='flex items-center gap-24 w-full border hover:bg-gray-200 px-4 py-1 rounded-full'> <span>sign in with facebook</span></button>
        </div>
      </div>
    </div>
  );
};

export default Register;

/* <FaGoogle className='text-red-400 text-lg' />
<FaFacebook className='text-[#3076FF] text-lg' />
 */