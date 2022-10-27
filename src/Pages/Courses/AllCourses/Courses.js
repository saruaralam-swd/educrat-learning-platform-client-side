import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseMain from '../CourseMain/CourseMain';
import CoursesAside from '../CoursesAside/CoursesAside';

const Courses = () => {
  const allCourse = useLoaderData();

  return (
    <div className='grid md:grid-cols-4'>

      <div className='md:col-span-3 order-1 lg:order-1 m-10'>
        <div className='text-center'>
          <h3 className="text-[#002333] text-3xl md:text-4xl font-semibold ">Our Latest courses</h3>
        </div>

        <div className="divider"></div>

        <div>
          {
            allCourse.map(course => <CourseMain key={course.id} course={course}></CourseMain>)
          }
        </div>
      </div>

      <div className='order-2 lg:order-2 pt-10 ml-10 md:ml-0'>
        <div className='sticky top-16'>
          <p className='md:text-center text-left'> our all courses</p>
          {
            allCourse.map(course => <CoursesAside key={course.id} course={course}></CoursesAside>)
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;