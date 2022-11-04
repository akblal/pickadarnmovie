import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config.js';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';

import MultiSelect from 'multiselect-react-dropdown';


function UserChoice ({ user, retrieveUserName, retrieveUserGenre }) {

  const navigate = useNavigate();
  const [userOneFirstName, setUserOneFirstName] = useState('');
  const [userOneLastName, setUserOneLastName] = useState('');
  const [userOneGenres, setUserOneGenres] = useState([]);
  const [userTwoFirstName, setUserTwoFirstName] = useState('');
  const [userTwoLastName, setUserTwoLastName] = useState('');

  const options = [{name: 'Action', id: 28},{name: 'Adventure', id: 12}, {name: 'Animation', id: 16}, {name: 'Comedy', id: 35}, {name: 'Crime', id: 80}, {name: 'Documentary', id: 99}, , {name: 'Drama', id: 18}, {name: 'Family', id: 10571}, {name: 'Fantasy', id: 14}, {name: 'History', id: 36}, {name: 'Horror', id: 27}, {name: 'Music', id: 10402}, {name: 'Mystery', id: 9648}, {name: 'Romance', id: 10749}, {name: 'Science Fiction', id: 878}, {name: 'TV Movie', id: 10770}, {name: 'Thriller', id: 53}, {name: 'War', id: 10752}, , {name: 'Western', id: 37}];
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
        retrieveUserName(results.data.firstname, results.data.lastname)
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
    let genre = selectedItem;
    console.log(selectedItem, 'selecteditem')
    let temp = userOneGenres.concat([genre]);
    setUserOneGenres(temp);
  }

  const removeUserOneGenreSelection = (selectedList, selectedItem) => {
    let temp = [];
    for (let i = 0; i < selectedList.length; i++) {
      temp.push(selectedList[i]);
    }
    setUserOneGenres(temp);
  }

  const nextPage = (e) => {
    console.log(userOneGenres, 'usergenres');
    retrieveUserGenre(userOneGenres);
    navigate('/partnerchoice');
  }

  const noPreference = () => {
    retrieveUserGenre([]);
    navigate('/partnerchoice')
  }

  return (
    <div>
      <div className= 'user-icon-dropdown'>
        <FontAwesomeIcon icon= {faCircleUser} className= 'user-icon'/>
        <h1>{user.email}</h1>
      </div>
      <div className= 'user-information-containers'>
        <div className= 'user-one-container'>
          <h1>{userOneFirstName} {userOneLastName}</h1>
          <h2>Select Genres (up to 3)</h2>
          <MultiSelect
            options={options} // Options to display in the dropdown
            // selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={addUserOneGenreSelection} // Function will trigger on select event
            onRemove={removeUserOneGenreSelection} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            selectionLimit= {limitGenres}
            placeholder= 'Genre(s)'
            hidePlaceholder= {true}
            className= 'multiselect-dropdown'
            size= 'small'
            rounded= 'large'
            fillMode= 'flat'
          />
          {userOneGenres.map((item) => {
            return (
              <h1>{item.name} {item.id}</h1>
            )
          })
          }
          <div className= 'selection-button-container'>
            <button className= 'selection-button' onClick= {noPreference}>Whatever {user.partner[0]} wants to watch</button>
            <button className= 'selection-button' disabled= {userOneGenres.length === 0} onClick= {nextPage}>Done!</button>
          </div>
        </div>

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

export default UserChoice;
