import React from 'react';
import { useNavigate } from 'react-router-dom';

function FinalPage ({ user }) {

  const navigate = useNavigate();

  const backToHome = (e) => {
    navigate('/')
  }

  return (
    <div>
      <h1>{user.email}</h1>
      {console.log (user, 'in final!')}
      <button onClick= {backToHome}>Home</button>


    </div>
  )

};

export default FinalPage