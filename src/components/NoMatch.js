import React from 'react';
import { useNavigate } from 'react-router';

const NoMatch = () => {

    const navigate = useNavigate();

  return (

    <div style={{ textAlign: 'center'}}>
        <h1>OOPS! Sorry, page not found.</h1>
        <button onClick={() => navigate('/')}>Go To HomePage</button>
    </div>

  );

};

export default NoMatch;