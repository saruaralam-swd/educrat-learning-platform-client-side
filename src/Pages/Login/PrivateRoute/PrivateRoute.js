import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>loading...</div>
  }

  if (!user) {
    return <Navigate to='/login'></Navigate>
  };

  return children;
};

export default PrivateRoute;