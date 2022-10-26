import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa'


const CourseDetails = () => {
  const course = useLoaderData();
  const { id, name } = course;

  return (
    <div>
      <h3>
        {name}
        <Link><FaDownload className='inline-block' /></Link>
      </h3>
      <Link to={`/course/${id}`}><button className='bg-violet-500 text-white px-4 py-1 rounded-md'>get premium access</button></Link>
    </div>
  );
};

export default CourseDetails;