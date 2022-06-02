import React from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {

    const {userId} = useParams();

  return (

    <div style={{ textAlign: 'center'}}>
        <h1> Details About User {userId} </h1>
    </div>
  )

};

export default UserDetails;