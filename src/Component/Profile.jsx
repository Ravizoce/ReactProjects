import {React, useContext} from 'react';
import UserContextProvider from '../context/UserContextProvider';
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router-dom';

function Profile(){

    const {user} = useContext(UserContext);
    if(!user){
     return <Navigate to="/login" replace />;
    }
    return(
        <>
            <div>Welcome {user.username}</div>
        </>
    )
}

export default Profile;