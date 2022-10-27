import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const { id, cardImg, name, price, duration } = card;

  return (
    <div className='border rounded-md space-y-4'>
      <img className='rounded-t-md scale-100 hover:origin-center hover:scale-105  duration-500' src={cardImg} alt="" />
      <div className='p-2 space-y-3'>
        <h4 className=' font-bold'>{name}</h4>

        <div className='flex justify-between items-center'>
          <p className='flex items-center  gap-1 text-sm text-gray-500'><FaRegClock className='inline-block' /> {duration} months</p>
          <p className='text-sm text-gray-500'>TK {price}</p>
        </div>
      </div>
      <Link to={`/courses/${id}`}><button className='w-full bg-[#06425e] text-white font-semibold px-4 py-2 rounded-b-md '>See Details</button></Link>
    </div>
  );
};

export default Card;