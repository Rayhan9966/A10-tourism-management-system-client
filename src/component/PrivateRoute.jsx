import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    console.log(children)
    const location=useLocation()
    console.log(location);
    const {user}= useContext(AuthContext)
    if (user){
        return children
    }
    else
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;