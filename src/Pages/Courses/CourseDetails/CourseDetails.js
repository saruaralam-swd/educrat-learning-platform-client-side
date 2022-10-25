import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  const {name} = course;

  return (
    <div>
      {name}
    </div>
  );
};

export default CourseDetails;