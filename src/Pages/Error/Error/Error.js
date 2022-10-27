import React from 'react';
import Header from '../../Shared/Header/Header';
import img from '../../../assets/error/404.png'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <Header></Header>
      <div className='w-4/5 mx-auto m-20'>
        <div className='grid md:grid-cols-2 gap-5 shadow-2xl border rounded-md'>
          <img className='w-full rounded-l-md' src={img} alt="" />

          <div className='flex items-center justify-center md:border-r-4 md:border-indigo-500 rounded-r-md'>
            <div className='p-5'>
              <div className='flex gap-4 items-center placeholder'>
                <h4 className='text-5xl text-center '>404</h4>
                <div>
                  <p className='text-lg text-slate-500'>Oops! You're lost.</p>
                  <p className='text-lg text-slate-500'>The page you are looking for was not found.</p>
                </div>
              </div>
              <Link to='/'><button className='bg-[#002333] text-white px-4 py-1 rounded-md mt-3'>Homepage</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;