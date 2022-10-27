import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { LanguageIcon } from '@heroicons/react/24/solid'

const CourseAccess = () => {
  const course = useLoaderData();
  const { name, cardImg, student, create, lesson, update, language, body, categoryId, deadLine, enroll, instructor, instructorSay, price, startCourse, time, type } = course;

  return (
    <div className='w-4/5 mx-auto my-10 space-y-2'>
      <img className='w-full h-[350px] rounded-md object-cover' src={cardImg} alt="" />

      <h2 className='text-[#197fc3]  text-2xl font-semibold hover:underline'>{name}</h2>
      <p><span className='font-bold'>{student}</span> students join this course</p>
      <p>Created by: <Link className='text-blue-600 underline '>{create}</Link> </p>
      <p>Total lesson: {lesson}</p>

      <div className='flex gap-10'>
        <p>Last Modify : {update} </p>
        <p><LanguageIcon className='h-6 w-6 inline-block' /> {language}</p>
      </div>
      <button className='bg-violet-500 text-white px-4 py-1 rounded-md'>Enroll Now</button>
    </div>
  );
};

export default CourseAccess;