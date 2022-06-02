import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../authentication/auth';
// import { Link } from 'react-router-dom';


const Navbar = () => {

    const navLinkStyles = ({isActive}) => {
        return{
            textDecoration: isActive ? 'none' : 'underline',
            color: isActive ? 'red' : 'blue',
        }
    };

    const auth = useAuth();

  return (

    <nav>
        <ul style={{display:'flex', listStyleType: 'none', fontSize: '20px', fontWeight: 'bolder', cursor: 'pointer', marginBottom: '80px', backgroundColor: 'skyblue', width: '100%', height: '40px', padding: '5px 32px 2px 0px', justifyContent:'space-around'}}>
            <li><NavLink to='/' style={navLinkStyles}>Home</NavLink></li>
            <li><NavLink to='/about' style={navLinkStyles}>About</NavLink></li>
            <li><NavLink to='/products' style={navLinkStyles}>Products</NavLink></li>
            <li><NavLink to='/users' style={navLinkStyles}>Users</NavLink></li>
            <li><NavLink to='/profile' style={navLinkStyles}>Profile</NavLink></li>

            {
              !auth.user && <li><NavLink to='/login' style={navLinkStyles}>Login</NavLink></li>
            }

        </ul>
    </nav>
  )

};

export default Navbar;