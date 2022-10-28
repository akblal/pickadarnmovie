import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn ({ retrieveUserEmail }) {

  const [email, setEmail] = useState('');
  const [isEmailFound, setIsEmailFound] = useState(true);
  let navigate = useNavigate();

  const handleEmail = (e) => {
    let emailAddress = e.target.value;
    setEmail(emailAddress);
  }

  const handleEmailKeyboard = (e) => {
    e.preventDefault();
    console.log (email, 'email')
  }

  const confirmEmail = (e) => {
    console.log (email, 'email')
    axios.get('/getEmail', {params:
      {
        email: email,
      }})
      .then((results) => {
        console.log('still in .then', results)
        if (results.data === 'email found') {
          retrieveUserEmail(email)
          navigate('/welcome')
        } else {
          setIsEmailFound(false);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const confirmNewUser = (e) => {
    console.log ('clicked created user button')
    navigate('/create-user');
  }

  return (
    <div className= 'center-screen'>
      <div className= 'sign-in-container'>
        <h1 className= 'sign-in-logo'>pickadamnmovie</h1>
        <h1 className= 'sign-in-title'>Sign Into PickaDamnMovie</h1>
        <div className= 'sign-in-email-container'>
          {isEmailFound ?
            <span>Email:</span> :
            <span>Email does not exist in our database. Try creating a new account or make sure it is spelled correctly.</span>
          }
          <form onSubmit= {handleEmailKeyboard}>
            <input type= 'text' className= 'sign-in-email-field' value= {email} onChange= {handleEmail}/>
          </form>
        </div>
        <div className= 'sign-in-buttons-container'>
          <button onClick= {confirmEmail} className= 'sign-in-continue-button'>Continue</button>
          <button onClick= {confirmNewUser} className= 'sign-in-create-user-button'>Create Account</button>
        </div>
        <div className= 'sign-in-privacy-policy-container'>
          <h3>Privacy Policy</h3>
        </div>
      </div>
    </div>
  )
};

export default SignIn;