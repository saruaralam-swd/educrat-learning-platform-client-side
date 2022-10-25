import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // signIn with google 
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  };

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
          <button onClick={handleGoogleSignIn} className='flex items-center gap-3 w-full border hover:bg-gray-200 px-4 py-1 mb-3 rounded-md'> <span>sign in with Google</span></button>
          <button onClick={handleGithubSignIn} className='flex items-center gap-3 w-full border hover:bg-gray-200 px-4 py-1 rounded-md'> <span>sign in with Github</span></button>
        </div>
      </div>
    </div>
  );
};

export default Login;