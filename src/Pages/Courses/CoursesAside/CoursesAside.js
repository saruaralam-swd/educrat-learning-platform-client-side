import React from 'react';
import { Link } from 'react-router-dom';

const CoursesAside = ({course}) => {
  const {id, name} = course;

  return (
    <div>
      <Link to={`/courses/${id}`} className='text-blue-500 hover:underline'># {name}</Link>
    </div>
  );
};

export default CoursesAside;