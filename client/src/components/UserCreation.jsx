import React, { useState }from 'react';

function UserCreation () {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstName = (e) => {
    let text = e.target.value;
    setFirstName(text);
  }

  const handleLastName = (e) => {
    let text = e.target.value;
    setLastName(text);
  }

  const handleEmail = (e) => {
    let text = e.target.value;
    setEmail(text);
  }

  const handlePassword = (e) => {
    let text = e.target.value;
    setPassword(text);
  }

  const handleKeyboard = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    console.log ('new user created!')
    console.log (firstName + ' ' + lastName + ' has an email: ' + email +'.')
    console.log (password, 'hidden')
  }

  return (
    <div className= 'center-screen'>
      <div className= 'user-creation-container'>
        <h1 className= 'user-creation-title'>Create An Account</h1>
        <div className= 'user-creation-fields-container'>

          <div className= 'user-creation-name-fields-container'>
            <div className= 'user-creation-first-name-container'>
              <div className= 'user-creation-first-name-title'>
                First Name:
              </div>
              <div className= 'user-creation-first-name-field'>
                <form onSubmit= {handleKeyboard}>
                  <input type= 'text' className= 'first-name-field' value= {firstName} onChange= {handleFirstName} />
                </form>
              </div>
            </div>
            <div className= 'user-creation-last-name-container'>
              <div className= 'user-creation-last-name-title'>
                Last Name:
              </div>
              <div className= 'user-creation-last-name-field'>
                <form onSubmit= {handleKeyboard}>
                  <input type= 'text' className= 'first-name-field' value= {lastName} onChange= {handleLastName} />
                </form>
              </div>
            </div>
          </div>

          <div className= 'user-creation-email-container'>
            <div className= 'user-creation-email-title'>
              Email:
            </div>
            <div className= 'user-creation-email-field'>
              <form onSubmit= {handleKeyboard}>
                <input type= 'text' className= 'email-field' value= {email} onChange= {handleEmail} />
              </form>
            </div>
          </div>

          <div className= 'user-creation-password-container'>
            <div className= 'user-creation-password-title'>
              Password:
            </div>
            <div className= 'user-creation-password-field'>
              <form onSubmit= {handleKeyboard}>
                <input type= 'text' className= 'password-field' value= {password} onChange= {handlePassword} />
              </form>
            </div>
          </div>

          <div className= 'user-creation-certification-container'>
            <div className= 'user-creation-certification-message'>
              I certify that I am 18 years of age or older, I agree to the User Agreement, and I have read the Privacy Policy.
            </div>
          </div>

          <div className= 'user-creation-button-container'>
            <button className= 'user-creation-button' onClick= {handleSubmit}>Create Free Account</button>
          </div>

        </div>
      </div>
    </div>
  )
};

export default UserCreation;