import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {

  return (

    <div style={{ textAlign: 'center'}}>
        <h1>Products Page</h1>
        <input type="search" placeholder='search for product'/>
        <ul className='list'>
            <li className='list_child'><Link to='featured'>Featured</Link></li>
            <li className='list_child'><Link to='new'>New</Link></li>
        </ul>
        <Outlet/>
     </div>

  )

};

export default Products;