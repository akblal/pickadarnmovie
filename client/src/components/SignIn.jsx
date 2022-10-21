import React, { useState }from 'react';

function SignIn ({ changePage }) {

  const [email, setEmail] = useState('');

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
  }

  const confirmNewUser = (e) => {
    console.log ('clicked created user button')
    changePage('create-user');
  }

  return (
    <div className= 'center-screen'>
      <div className= 'sign-in-container'>
        <h1 className= 'sign-in-logo'>pickadamnmovie</h1>
        <h1 className= 'sign-in-title'>Sign Into PickaDamnMovie</h1>
        <div className= 'sign-in-email-container'>
          <div>Email:</div>
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