import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import solo from '../../../pictures/intention-solo.png';
import friend from '../../../pictures/intention-friend.png';
import date from '../../../pictures/intention-date.png';

function Intention () {

  const [hoverSolo, setHoverSolo] = useState(false);
  const [hoverFriend, setHoverFriend] = useState(false);
  const [hoverDate, setHoverDate] = useState(false);


  let navigate = useNavigate();

  const handleSelection = (selected) => {
    if (selected === 'solo') {
      console.log ('solo')
    } else if (selected === 'friend') {
      console.log ('friend')
    } else if (selected === 'date') {
      console.log ('date')
    }
  }

  const handleSoloMouse = () => {
    let temp = !hoverSolo;
    console.log(temp, 'mouse over')
    setHoverSolo(temp);
  }

  const handleFriendMouse = () => {
    let temp = !hoverFriend;
    console.log(temp, 'mouse over')
    setHoverFriend(temp);
  }

  const handleDateMouse = () => {
    let temp = !hoverDate;
    console.log(temp, 'mouse over')
    setHoverDate(temp);
  }

  return (
    <div>
      <div className= 'center-screen'>
        <div className= 'intention-container'>
          <div className= 'intention-title'>
            <h1>
              Who Watching??
            </h1>
          </div>

          <div className= 'images-top-row-container'>
            <div className= 'image-container' onClick= {() => handleSelection('solo')} >
              {hoverSolo ?
                <div className= 'intention-hover-text' onMouseLeave= {handleSoloMouse}>Solo Dolo</div> :
                <img className= 'intention-image' src= {solo} onMouseEnter= {handleSoloMouse} />
              }

            </div>
            <div className= 'image-container' onClick= {() => handleSelection('friend')}>
              {hoverFriend ?
                <div className= 'intention-hover-text' onMouseLeave= {handleFriendMouse}>Hanging with Friends</div> :
                <img className= 'intention-image' src= {friend} onMouseEnter= {handleFriendMouse} />
              }
            </div>
          </div>
          <div className= 'image-bottom-row-container'>
            <div className= 'image-container' onClick= {() => handleSelection('date')}>
              {hoverDate ?
                <div className= 'intention-hover-text' onMouseLeave= {handleDateMouse}>Date Night</div> :
                <img className= 'intention-image' src= {date} onMouseEnter= {handleDateMouse} />
              }
            </div>

          </div>
        </div>
      </div>
     <div>
        <button onClick= {() => {navigate('/')}}>Back</button>
      </div>
    </div>
  )

};

export default Intention;

// <form onSubmit= {handleRadioButtonSubmit}>
//             <div className="intention-radio-buttons-list">
//               <label>
//                 <input
//                   type="radio"
//                   value="solo"
//                   className= "intention-radio-button"
//                   onChange= {handleRadioButton}
//                 />
//                 Solo Dolo
//               </label>
//             </div>

//             <div className="intention-radio-buttons-list">
//               <label>
//                 <input
//                   type="radio"
//                   value="friend"
//                   className= "intention-radio-button"
//                   onChange= {handleRadioButton}
//                 />
//                 Just hanging out with a friend.
//               </label>
//             </div>

//             <div className="form-check">
//               <label>
//                 <input
//                   type="radio"
//                   value="date"
//                   className= "intention-radio-button"
//                   onChange= {handleRadioButton}
//                 />
//                 Date Night!
//               </label>
//             </div>
//           </form>

// <div className= 'intention-button-list'>
//             <button onClick= {handleSelection} value= 'solo' className= 'intention-button'>
//               Solo Dolo
//             </button>
//             <button onClick= {handleSelection} value= 'friend' className= 'intention-button'>
//               Hanging with the Friends
//             </button>
//             <button onClick= {handleSelection} value= 'date' className= 'intention-button'>
//               Date Night!
//             </button>
//           </div>