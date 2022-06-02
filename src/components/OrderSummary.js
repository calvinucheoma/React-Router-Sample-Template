import React from 'react';
import { useNavigate } from 'react-router';

const OrderSummary = () => {

    const navigate = useNavigate();

  return (

    <div style={{textAlign: 'center'}}>
        <h1>Thanks For Placing An Order!</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>

  )

};

export default OrderSummary;