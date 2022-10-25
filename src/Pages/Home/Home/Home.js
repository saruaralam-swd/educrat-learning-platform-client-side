import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Home = () => {
  const {user} = useContext(AuthContext);

  return (
    <div>
     <p>Home</p>
    </div>
  );
};

export default Home;