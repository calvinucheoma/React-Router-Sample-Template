import React from 'react';
import { useSearchParams } from 'react-router-dom';


const Users = () => {


  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';

  return (

    <div style={{ textAlign: 'center'}}>
        <h1>Users Page</h1>
        <button onClick={() => setSearchParams({filter: 'active'})} style={{marginRight: '30px'}}>Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>

        {
          showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing All Users</h2>
        }
    </div>

  )

};


export default Users;