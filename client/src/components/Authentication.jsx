import React, { useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from '@fortawesome/free-solid-svg-icons';

function Authentication ({ changePage }) {

  const handleHold = (e) => {
    console.log ('button pressed')
  }

  const goBack = (e) => {
    changePage('password')
  }

  return (
    <div className= 'center-screen'>
      <div className= 'password-page-container'>
        <h1 className= 'password-page-logo' onClick= {goBack}>pickadamnmovie</h1>
        <h1>Authentication</h1>
        <h4>Press and hold 2FA to reveal your 4-digit code</h4>
        <div className= 'auth-button-container'>
          <div className= 'auth-first-row-button-container'>
            <FontAwesomeIcon icon= {fa1} className= 'auth-number-button'/>
            <FontAwesomeIcon icon= {fa2} className= 'auth-number-button'/>
            <FontAwesomeIcon icon= {fa3} className= 'auth-number-button'/>
          </div>
          <div className= 'auth-second-row-button-container'>
            <FontAwesomeIcon icon= {fa4} className= 'auth-number-button'/>
            <FontAwesomeIcon icon= {fa5} className= 'auth-number-button'/>
            <FontAwesomeIcon icon= {fa6} className= 'auth-number-button'/>
          </div>
          <div className= 'auth-third-row-button-container'>
            <FontAwesomeIcon icon= {fa7} className= 'auth-number-button'/>
            <FontAwesomeIcon icon= {fa8} className= 'auth-number-button'/>
            <FontAwesomeIcon icon= {fa9} className= 'auth-number-button'/>
          </div>
        </div>
        <div className= 'password-button-container'>
          <button onClick= {handleHold} className= 'password-continue-button'>2FA</button>
        </div>
      </div>
    </div>
  )
};

export default Authentication;