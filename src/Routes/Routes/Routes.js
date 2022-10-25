import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main'
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
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('http://localhost:5000/courses')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  }, 
  {
    path: '*',
    element: <div>Page not found</div>
  }
]);