import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className='md:px-10 md:m-20'>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q. Who should take an Online Course?
        </div>
        <div className="collapse-content">
          <li>Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can</li>
          <li>Advance your skill-set or begin a career change.</li>
          <li>Take the next step in your formal education.</li>
          <li>Ease the transition before entering a full-time academic program.</li>
          <li>Enjoy learning a new topic.</li>
        </div>
        <div className="divider"></div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q. How do I select a course?
        </div>
        <div className="collapse-content">
          <li>First of all <Link to='/' className='text-violet-500'>visit home</Link> or <Link to='/courses' className='text-violet-500'>courses page</Link> </li>
          <li>than see details or click course name in right side</li>
          <li>and then get access</li>
          <li>if your have account than <Link to='/login' className='text-violet-600'>login</Link> </li>
          <li>or <Link to='/register' className='text-violet-500'>register</Link> new account</li>
        </div>
        <div className="divider"></div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q. I am a high school student, can I join?
        </div>
        <div className="collapse-content">
          <li>Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (online@sothebysinstitute.com) to discuss further.</li>
        </div>
        <div className="divider"></div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q. Can I take more than one course at a time?
        </div>
        <div className="collapse-content">
          <li>If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.</li>
        </div>
        <div className="divider"></div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Q. What should I do if I need to start the course late?
        </div>
        <div className="collapse-content">
          <li>It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins.</li>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default FAQ;