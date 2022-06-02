import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../authentication/auth';

const Profile = () => {

    const auth = useAuth();
    
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');  
    }

  return (

    <div style={{ textAlign: 'center'}}>
        <h1 style={{ marginBottom: '70px'}}>Profile Page</h1>
        <h3>Welcome {auth.user}!</h3>
        <button onClick={handleLogout}>Logout</button>
    </div>

  )

};

export default Profile;