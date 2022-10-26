import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const notifySuccess = () => toast.success('successfully')

const Login = () => {
  const { providerLogin,  signIn } = useContext(AuthContext);
  const [error, setError] = useState('');

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  const navigate = useNavigate();

  // google 
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        notifySuccess()
        setError('')
        navigate('/')
      })
      .catch(error => {
        console.error('error', error);
        setError(error.message)
      })
  };

  // github
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        notifySuccess()
        setError('')
        navigate('/')
      })
      .catch(error => {
        console.error('error', error);
        setError(error.message)
      })
  };

  // email & password
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        notifySuccess()
        form.reset()
        setError('')
        navigate('/')
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })
  };

  return (
    <div className='bg-[#EFEBFA] flex justify-center min-h-[600px] py-10'>
      <div className='bg-[#F6F6FD] rounded-xl h-[500px]'>
        <form onSubmit={handleSubmit} className=' px-8 pt-8 space-y-5 w-[400px]'>
          <div className='space-y-2'>
            <h2>Your Email</h2>
            <input className='border px-3 p-2 w-full focus:outline-2 outline-blue-600 rounded-md' type="email" name="email" placeholder='your email' />
          </div>

          <div className='space-y-2'>
            <h2>Password</h2>
            <input className='border px-3 p-2 w-full focus:outline-2 outline-blue-600 rounded-md' type="password" name="password" placeholder='your password' />
          </div>

          <p className='text-red-400'>{error}</p>

          <button className='bg-yellow-300 hover:bg-yellow-400 px-4 py-1 rounded-md'>Login</button><br></br>


          <hr></hr>
          <Link className='text-sm hover:underline text-blue-600'>Forget Password?</Link> <br></br>
          <Link to='/register' className='text-sm hover:underline text-blue-600'>Or, Sign Up Using E-mail Address </Link>
        </form>

        <div className='p-5'>
          <button onClick={handleGoogleSignIn} className='flex items-center gap-3 w-full border hover:bg-gray-200 px-4 py-1 mb-3 rounded-md'><FaGoogle className='text-lg' /> <span>sign in with Google</span></button>
          <button onClick={handleGithubSignIn} className='flex items-center gap-3 w-full border hover:bg-gray-200 px-4 py-1 rounded-md'> <FaGithub className='text-lg' /> <span>sign in with Github</span></button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Login;