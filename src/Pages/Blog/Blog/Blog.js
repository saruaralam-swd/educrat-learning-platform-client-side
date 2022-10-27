import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className='pl-32 pt-10 pr-32 space-y-10  '>
      <div>
        <Link className=' dark:text-violet-500 text-violet-900 hover:text-violet-600 text-2xl hover:underline'> what is cors?</Link>
        <p className=''>CORS, also known as Cross-Origin Resource Sharing, allows resources such as JavaScript and web fonts to be loaded from domains other than the origin parent domain.These days, a web page commonly loads images, stylesheets, scripts, etc. from other domains. Although, a few years ago due to security reasons, web fonts and AJAX (XML HTTP Requests) were normally restricted to the same-origin policy which restricted their use between domains. Now however, with the use of CORS, the browser and server can communicate to determine whether it is safe to allow a cross-origin request.</p>
      </div>

      <div>
        <Link className=' dark:text-violet-500 text-violet-900 hover:text-violet-600 text-2xl hover:underline'>Why are you using firebase? What other options do you have to implement authentication?</Link>
        <p>Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure. Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.</p>
        <h2 className='font-bold'>Key Features</h2>
        <li>Authentication</li>
        <li>Realtime database</li>
        <li>Hosting</li>
        <p className='mt-2'> Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
      </div>

      <div>
        <Link className=' dark:text-violet-500 text-violet-900 hover:text-violet-600 text-2xl hover:underline'> How does the private route work?</Link>
        <p className=''>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.</p>
      </div>

      <div>
        <Link className=' dark:text-violet-500 text-violet-900 hover:text-violet-600 text-2xl hover:underline'>What is Node? How does Node work?</Link>
        <p className=''>Node.js is a JavaScript runtime environment.Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.</p>
        <p className='mt-2'>First of all just like other languages node comes with packages and modules. These are libraries of functions that we can import from npm (node package manager) into our code and utilize. If you have node installed on your computer, then you already have some basic modules installed. These are how we create a simple server, but I’ll get to that later.</p>
        <p className='mt-2'>Developers that are already well-versed in other programming languages, frameworks, libraries, or environments might wonder why they spend the time to learn Node.js. The short answer is that Node.js speeds development and improves overall application performance. </p>
      </div>

      
    </div>
  );
};

export default Blog;