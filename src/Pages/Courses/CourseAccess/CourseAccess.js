import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseAccess = () => {
 const course = useLoaderData();
 const {name } = course;

  return (
    <div>
      <p>private route</p>
      <p>{name}</p>
    </div>
  );
};

export default CourseAccess;