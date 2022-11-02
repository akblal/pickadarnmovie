import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config.js';
import axios from 'axios';
import MultiSelect from 'multiselect-react-dropdown';

function Welcome ({ user }) {

  const navigate = useNavigate();
  const [userOneFirstName, setUserOneFirstName] = useState('');
  const [userOneLastName, setUserOneLastName] = useState('');
  const [userOneGenres, setUserOneGenres] = useState([]);
  const [userTwoFirstName, setUserTwoFirstName] = useState('');
  const [userTwoLastName, setUserTwoLastName] = useState('');

  const options = [{name: 'Option 1', id: 1},{name: 'Option 2', id: 2}, {name: 'Option 3', id: 3}, {name: 'Option 4', id: 4}];
  const limitGenres = 3;

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

  const findMatch = (e) => {
    console.log ('find match!')
  }

  const addUserOneGenreSelection = (selectedList, selectedItem) => {
    let genre = selectedItem.name;
    let temp = userOneGenres.concat([genre]);
    setUserOneGenres(temp);
  }

  const removeUserOneGenreSelection = (selectedList, selectedItem) => {
    let temp = [];
    for (let i = 0; i < selectedList.length; i++) {
      temp.push(selectedList[i].name);
    }
    setUserOneGenres(temp);
  }

  return (
    <div>
      <h1>{user.email}</h1>
      {user.partner.map((buddy) => {
        return (
          <h2>{buddy}</h2>
        )
      })}
      <div className= 'user-information-containers'>
        <div className= 'user-one-container'>
          <h1>User One</h1>
          <h2>Select genres you are in the mood for (up to 3)</h2>
          <MultiSelect
            options={options} // Options to display in the dropdown
            //selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={addUserOneGenreSelection} // Function will trigger on select event
            onRemove={removeUserOneGenreSelection} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            selectionLimit= {limitGenres}
            placeholder= 'Genre(s)'
            hidePlaceholder= {true}
          />
          {userOneGenres.map((genre) => {
            return (
              <h1>{genre}</h1>
            )
          })
          }

        </div>
        <div className= 'user-two-container'>
          <h1>User Two</h1>
        </div>
      </div>

      <div className= 'find-match-button-container'>
        <button onClick= {findMatch}>Find Match</button>
      </div>
      <div className= 'matched-movies-container'>
        Common Movies
      </div>
      <div className= 'user-one-movies-container'>
        User One Movies
      </div>
      <div className= 'user-one-movies-container'>
        User Two Movies
      </div>
      <button onClick= {backToHome}>Home</button>
      <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
    </div>
  )

};

export default Welcome;