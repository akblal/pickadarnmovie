import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, fa0, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile, faFaceRollingEyes } from '@fortawesome/free-regular-svg-icons';

function Authentication () {

  const [showCode, setShowCode] = useState(false);
  const [randomNumber, setRandomNumber] = useState('');
  const [userInput, setUserInput] = useState('');
  const [wrongInput, setWrongInput] = useState (false);

  let lengthCode = 5;
  let navigate = useNavigate();

  const shareCode = (e) => {
    console.log ('button pressed')
    if (userInput.length === lengthCode) {
      verifyCode();
    }

    let stringNum = '';
    for (let i = 0; i < lengthCode; i++) {
      let num = Math.floor(Math.random() * 10);
      stringNum += '' + num;
    }
    setRandomNumber(stringNum);

    if (wrongInput) {
      let temp = !wrongInput;
      setWrongInput(temp);
    }

    setUserInput('');
    setShowCode(true);
  }

  const hideCode = (e) => {
    setShowCode(false);
  }

  const selectNumber = (num) => {
    if (userInput.length < lengthCode) {
      let temp = userInput;
      temp += num;
      setUserInput(temp);
    }
  }

  const deleteNumber = (e) => {
    let num = userInput.substring(0, userInput.length - 1);
    setUserInput(num);
  }

  const verifyCode = (e) => {
    if (userInput === randomNumber) {
      navigate('/welcome');
    } else {
      setUserInput('');
      setWrongInput(true)
    }
  }

  return (
    <div className= 'center-screen'>
      <div className= 'password-page-container'>
        {wrongInput ?
          <h1 className= 'password-page-logo'>Incorrect Code. Try Again</h1> :
          <h1 className= 'password-page-logo'>pickadamnmovie</h1>
        }
        {userInput.length === 0 ?
          <h1>Authentication</h1> :
          <h1>{userInput}</h1>
        }
        <div className= 'auth-button-container'>
          <div className= 'auth-first-row-buttons-container'>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('1')}>
              <FontAwesomeIcon icon= {fa1} className= 'auth-number-button'/>
            </div>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('2')}>
              <FontAwesomeIcon icon= {fa2} className= 'auth-number-button'/>
            </div>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('3')}>
              <FontAwesomeIcon icon= {fa3} className= 'auth-number-button'/>
            </div>
          </div>
          <div className= 'auth-second-row-button-container'>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('4')}>
              <FontAwesomeIcon icon= {fa4} className= 'auth-number-button'/>
            </div>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('5')}>
              <FontAwesomeIcon icon= {fa5} className= 'auth-number-button'/>
            </div>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('6')}>
              <FontAwesomeIcon icon= {fa6} className= 'auth-number-button'/>
            </div>
          </div>
          <div className= 'auth-third-row-button-container'>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('7')}>
              <FontAwesomeIcon icon= {fa7} className= 'auth-number-button'/>
            </div>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('8')}>
              <FontAwesomeIcon icon= {fa8} className= 'auth-number-button'/>
            </div>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('9')}>
              <FontAwesomeIcon icon= {fa9} className= 'auth-number-button'/>
            </div>
          </div>
          <div className= 'auth-fourth-row-button-container'>
            <div className= 'auth-individual-button-container'>
              {wrongInput ?
                <FontAwesomeIcon icon= {faFaceRollingEyes} className= 'auth-number-button'/> :
                <FontAwesomeIcon icon= {faFaceSmile} className= 'auth-number-button'/>
              }
            </div>
            <div className= 'auth-individual-button-container' onClick= {() => selectNumber('0')}>
              <FontAwesomeIcon icon= {fa0} className= 'auth-number-button'/>
            </div>
            <div className= 'auth-individual-button-container' onClick= {deleteNumber}>
              <FontAwesomeIcon icon= {faDeleteLeft} className= 'auth-number-button'/>
            </div>
          </div>
        </div>
        <div className= 'password-button-container' onMouseDown= {shareCode} onMouseUp = {hideCode}>
          {userInput.length === lengthCode ?
            <button className= 'password-continue-button' onClick= {verifyCode}>Enter</button> :
            showCode ?
              <div className= 'password-auth-code'>{randomNumber}</div> :
              <button className= 'password-continue-button'>Press and Hold for New Code</button>
          }
        </div>
      </div>
    </div>
  )
};

export default Authentication;