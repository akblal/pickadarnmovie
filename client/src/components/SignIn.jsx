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
          navigate('/intention')
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
        <div className= 'sign-in-logo'>pickadamnmovie</div>
        <div className= 'sign-in-title'>Sign Into PickaDamnMovie</div>
        <div className= 'sign-in-email-container'>
          {isEmailFound ?
            <div className= 'text-field'>Email:</div> :
            <div className= 'text-field'>Email does not exist in our database. Try creating a new account or make sure it is spelled correctly.</div>
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
          <div className= 'privacy-policy-text'>Privacy Policy</div>
        </div>
      </div>
    </div>
  )
};

export default SignIn;