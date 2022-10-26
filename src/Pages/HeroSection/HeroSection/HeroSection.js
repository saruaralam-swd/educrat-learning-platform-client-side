import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../../assets/img/hero_img.png'

const HeroSection = () => {
  return (
    <div className='grid md:grid-cols-2 mb-10'>
      <div className='order-2 md:order-1 flex items-center justify-center m-5 md:m-0'>
        <div className='space-y-2'>
          <h2 className='text-4xl md:text-4xl lg:text-5xl font-semibold text-[#002333]'>Learn Soft Skills</h2>
          <h2 className='text-4xl md:text-4xl lg:text-5xl font-semibold text-[#002333]'>From Anywhere</h2>
          <p className='text-gray-500'>We are ready to help you to learn any topic you are interested in</p>
          <p><Link to='/courses'><button className='bg-[#002333] text-white px-4 py-2 rounded-md'>Gettin Started</button></Link></p>
        </div>
      </div>

      <div className='order-1 md:order-2 flex justify-center '>
        <img className='w-4/5 md:w-full lg:w-9/12' src={heroImg} alt="hero section img" />
      </div>
    </div>
  );
};

export default HeroSection;