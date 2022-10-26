import React from 'react';
import { FaUserFriends, FaBusinessTime } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseMain = ({ course }) => {
  const { id, img, name, price, type, body, deadLine, enroll, time, startCourse } = course;

  return (
    <div>
      <div className='border flex min:h-[350px] rounded-md mb-8'>
        <img src={img} className="h-[350px] hidden lg:block" alt="course img" />

        <div className='space-y-5'>
          <div className='space-y-2 ml-8 mt-5'>
            <Link to={`/courses/${id}`} className='font-semibold flex items-center gap-3 hover:text-blue-600 hover:underline'>
              <span className='text-lg'>{name}</span>
            </Link>
            <p className='bg-[#E9C46B] inline-block px-2 rounded-md'>{type}</p>
            <p className='text-gray-500'>{body?.length > 200 ? ((body.slice(0, 200)) + '...') : body}</p>
            <p>TK {price}</p>
          </div>

          <div className='md:flex items-center gap-20 ml-8'>
            <div className='space-y-1'>
              <p className='text-sm text-gray-500'>REGISTRATION </p>
              <p className='font-semibold'>{deadLine}</p>
              <p className='text-xs'><FaUserFriends className='inline-block' /> {enroll}</p>
            </div>

            <div className=' space-y-1 mt-5 md:mt-0'>
              <p className='text-sm text-gray-500'>SCHEDULE</p>
              <p className='font-semibold'>{time}</p>
              <p className='text-xs'><FaBusinessTime className='inline-block' /> {startCourse}</p>
            </div>
          </div>

          <div className='bg-gray-200 h-[75px] text-right'>
            <Link to={`/courses/${id}`}><button className='border-2 border-violet-500 outline-1 hover:bg-violet-500 px-4 py-1 rounded-md transition duration-500 mt-5 mr-4'>See Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMain;