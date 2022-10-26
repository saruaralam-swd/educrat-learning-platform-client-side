import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main'
import CourseDetails from '../../Pages/Courses/CourseDetails/CourseDetails';
import Courses from '../../Pages/Courses/Courses/Courses';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Login/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('https://b610-lerning-platform-server-side-saruaralam-swd.vercel.app/courses')
      },
      {
        path: '/courses/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-saruaralam-swd.vercel.app/courses/${params.id}`)
      },
    ]
  }, 
  {
    path: '*',
    element: <div>Page not found</div>
  }
]);