import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseMain from '../CourseMain/CourseMain';
import CoursesAside from '../CoursesAside/CoursesAside';

const Courses = () => {
  const allCourse = useLoaderData();

  return (
    <div className='grid md:grid-cols-4'>

      <div className='border md:col-span-3 order-2 lg:order-1'>
        <div className=''>
          {
            allCourse.map(course => <CourseMain key={course.id} course={course}></CourseMain>)
          }
        </div>
      </div>

      <div className='border order-1 lg:order-2'>
        <p>all course {allCourse.length}</p>
        <div>
          {
            allCourse.map(course => <CoursesAside key={course.id} course={course}></CoursesAside>)
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;