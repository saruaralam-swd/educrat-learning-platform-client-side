import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseMain from '../CourseMain/CourseMain';
import CoursesAside from '../CoursesAside/CoursesAside';

const Courses = () => {
  const allCourse = useLoaderData();

  return (
    <div className='grid md:grid-cols-4'>
      <div className='border'>
        <p>all course {allCourse.length}</p>
        {
          allCourse.map(course => <CoursesAside key={course.id} course={course}></CoursesAside>)
        }
      </div>

      <div className='border md:col-span-3'>
        <div>
          {
            allCourse.map(course => <CourseMain key={course.id} course={course}></CourseMain> )
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;