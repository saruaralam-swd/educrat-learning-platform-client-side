import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;


    createUser(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        setError('')
        handleUpdateUserProfile(name, photoURL);
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name, 
      photoURL: photoURL
    };
    return updateUserProfile(profile);
  };

  return (
    <div className='bg-[#EFEBFA] flex items-center justify-center py-10'>
      <div className='bg-[#F6F6FD] rounded-xl'>
        <form onSubmit={handleSubmit} className='px-8 pt-8 space-y-5 w-[400px] '>
          <input className='border-b-2 p-2 w-full focus:outline-2 outline-blue-600 rounded-md' type="text" name="name" placeholder='Your Full Name' />
          <input className='border-b-2 p-2 w-full focus:outline-2 outline-blue-600 rounded-md' type="text" name="photoURL" placeholder='Photo URL' required/>
          <input className='border-b-2 p-2 w-full focus:outline-2 outline-blue-600 rounded-md' type="email" name="email" placeholder='example@gmail.com' required/>
          <input className='border-b-2 p-2 w-full focus:outline-2 outline-blue-600 rounded-md' type="password" name="password" placeholder='Password' required/>

          <p className='text-red-400'>{error}</p>

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