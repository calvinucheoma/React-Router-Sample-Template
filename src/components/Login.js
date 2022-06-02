import React, {useState} from 'react';
import { useAuth } from '../authentication/auth';
import { useNavigate, useLocation } from 'react-router';

const Login = () => {

    const [user, setUser] = useState('');

    const auth = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, {replace: true});
    };

  return (

    <div style={{textAlign: 'center'}}>
        <h1>Login Page</h1>
        <label htmlFor="username">
            Username: <input type="text" id='username' onChange = {(e)=>setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin} style={{marginLeft: '20px'}}>Login</button>
    </div>

  )

};

export default Login;