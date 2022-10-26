import './App.css';
import {RouterProvider} from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider/AuthProvider';

function App() {
  const {theme} = useContext(AuthContext);

  return (
    <div data-theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;