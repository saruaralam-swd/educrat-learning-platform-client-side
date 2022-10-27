import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload, FaShare, FaSpinner } from 'react-icons/fa'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Pdf from '../Pdf/Pdf';


const CourseDetails = () => {
  const course = useLoaderData();
  const { id, name, cardImg, body, categoryId, deadLine, enroll, instructor, instructorSay, price, startCourse, time, type } = course;

  return (
    <div className='px-20 pt-10'>
      <div className='flex justify-between border-b-2 pb-10 md:pb-0'>
        <div className='flex items-center'>
          <div className='space-y-2'>
            <h3 className='flex items-center gap-3'>
              <span className='text-[#197fc3] bg-transparent text-2xl font-semibold hover:underline'>{name}</span>
              <span>
                <PDFDownloadLink document={<Pdf course={course} />} filename="FORM">
                  {({ loading }) => (loading ? <FaSpinner /> : <FaDownload />)}
                </PDFDownloadLink>
              </span>
            </h3>

            <p className='bg-[#e9c46b] px-2 py-1 rounded-md text-sm inline-block'>{type}</p>
            <p className=' font-semibold'>Tk {price}</p>
            <div className='flex items-center gap-3'>
              <Link to={`/course/${id}`}><button className='bg-violet-500 text-white px-4 py-1 rounded-md'>get access</button></Link>
              <Link className='text-violet-600 text-sm'><FaShare className='inline-block' /> <span className='underline'>Share</span></Link>
            </div>
          </div>
        </div>
        <img className='hidden lg:block w-1/4  -skew-x-12 rounded-md' src={cardImg} alt="" />
      </div>

      <div className='lg:flex mt-10 gap-10'>
        <div className='lg:w-4/5'>
          <p className='text-md'>{body}</p>
        </div>

        <div className=' lg:w-1/5'>
          <div className='space-y-1 mt-5 md:mt-0'>
            <Link className='block text-[#197fc3] hover:underline'>Outline</Link>
            <Link className='block text-[#197fc3] hover:underline'>Schedule</Link>
            <Link className='block text-[#197fc3] hover:underline'>Instructor</Link>
            <Link className='block text-[#197fc3] hover:underline' to='/'>Related</Link>
            <Link className='block text-[#197fc3] hover:underline'>What Student Said</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;