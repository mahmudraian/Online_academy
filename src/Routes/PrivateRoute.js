import React, { useContext } from 'react';
import { Navigate, useLocation,  } from 'react-router-dom';
import { AuthContext } from '../Contsxt/Authprovider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
       return <div style={{color:'whitesmoke'}}>
        
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </div>
    }
   

    if(user){
        return children;
    }else return <Navigate to={"/login"} state={{from:location}} replace></Navigate>



};

export default PrivateRoute;