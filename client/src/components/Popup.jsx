import React from 'react';

function Popup(props) {

  return (
     (props.trigger) ?
      <div className= 'popup'>
        <div className= 'popup-inner'>
          <button className= 'popup-top-close-button' onClick= {() => props.setTriggerPopUp(false)}>Close</button>
          { props.children }
        </div>
      </div> :
      null

  )

}

export default Popup;