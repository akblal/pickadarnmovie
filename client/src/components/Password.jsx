import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../the-firebase-config.js';

function Password ({ user }) {

  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log (user)
  }, [])

  let navigate = useNavigate();

  const handleChangePage = (e) => {
    navigate('/');
  }

  const handleKeyboard = (e) => {
    e.preventDefault();
  }

  const handlePassword = (e) => {
    let text = e.target.value;
    setPassword(text);
  }

  const handleSubmit = async (e) => {
    try {
      console.log(user)
      const authenticate = await signInWithEmailAndPassword(auth, user.email, password);
      navigate('/authentication');
    } catch (error) {
      console.log (error.message);
      console.log ('Incorrect Password')
    }
  }

  const cancelSignIn = () => {
    console.log('cancel sign in')
  }

  return (
    <div className= 'center-screen'>
      <div className= 'password-page-container'>
        <h1 className= 'password-page-logo'>pickadamnmovie</h1>
        <h1 className= 'password-page-title'>Enter Password</h1>
        <div className= 'icon-and-email-container' onClick= {handleChangePage}>
          <span className= 'password-page-icon-container'>
            <FontAwesomeIcon className= 'password-user-icon' icon= {faCircleUser} />
          </span>
          <span className= 'password-page-email-container'>
            <span>{user.email}</span>
          </span>
        </div>
        <div className= 'password-page-password-container'>
          <div>Password:</div>
          <form onSubmit= {handleKeyboard}>
            <input type= 'text' className= 'password-page-password-field' value= {password} onChange= {handlePassword}/>
          </form>
        </div>
        <div className= 'password-forgot-password-container'>
          <h3>Forgot password?</h3>
        </div>
        <div className= 'password-button-container'>
          <button onClick= {handleSubmit} className= 'password-continue-button'>Continue</button>
        </div>
        <div className= 'password-cancel-sign-in-container' onClick= {cancelSignIn}>
          Cancel Sign In
        </div>
      </div>
    </div>
  )
};

export default Password;