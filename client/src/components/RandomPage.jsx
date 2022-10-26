import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config.js';
import axios from 'axios';

function FinalPage ({ user }) {

  const navigate = useNavigate();
  const [userOneFirstName, setUserOneFirstName] = useState('');
  const [userOneLastName, setUserOneLastName] = useState('');
  const [userTwoFirstName, setUserTwoFirstName] = useState('');
  const [userTwoLastName, setUserTwoLastName] = useState('');

  useEffect (() => {
    let email = user.email;
    axios.get ('/getUser', {
      params: {
        email: email
      }
    })
      .then((results) => {
        setUserOneFirstName(results.data.firstname);
        setUserOneLastName(results.data.lastname);
      })
      .catch ((err) => {
        console.log(err);
      })
  }, [])

  const backToHome = (e) => {
    navigate('/')
  }

  return (
    <div>
      <h1>{user.email}</h1>
      <h2>{userOneFirstName} {userOneLastName}</h2>
      <button onClick= {backToHome}>Home</button>
      <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>


    </div>
  )

};

export default FinalPage