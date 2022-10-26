import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload, FaFileDownload, FaSpinner } from 'react-icons/fa'
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from '../Pdf/Pdf';


const CourseDetails = () => {
  const course = useLoaderData();
  const { id, name,  } = course;
  console.log(course);

  return (
    <div>
      <h3 className='flex items-center gap-3'>
        <span>{name}</span>
        <span>
          <PDFDownloadLink document={<Pdf id={id} />} filename="FORM">
            {({ loading }) => (loading ? <FaSpinner /> : <FaDownload />)}
          </PDFDownloadLink>
        </span>

      </h3>
      <Link to={`/course/${id}`}><button className='bg-violet-500 text-white px-4 py-1 rounded-md'>get premium access</button></Link>
    </div>
  );
};

export default CourseDetails;