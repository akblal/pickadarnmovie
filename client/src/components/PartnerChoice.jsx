import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config.js';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';

import MultiSelect from 'multiselect-react-dropdown';

function PartnerChoice ({ user, retrievePartnerGenre }) {

  const navigate = useNavigate();
  const [partnerGenres, setPartnerGenres] = useState([]);

  const options = [{name: 'Action', id: 28},{name: 'Adventure', id: 12}, {name: 'Animation', id: 16}, {name: 'Comedy', id: 35}, {name: 'Crime', id: 80}, {name: 'Documentary', id: 99}, , {name: 'Drama', id: 18}, {name: 'Family', id: 10571}, {name: 'Fantasy', id: 14}, {name: 'History', id: 36}, {name: 'Horror', id: 27}, {name: 'Music', id: 10402}, {name: 'Mystery', id: 9648}, {name: 'Romance', id: 10749}, {name: 'Science Fiction', id: 878}, {name: 'TV Movie', id: 10770}, {name: 'Thriller', id: 53}, {name: 'War', id: 10752}, , {name: 'Western', id: 37}];
  const limitGenres = 3;
  const partnerName = user.partner[0];

  const backToHome = (e) => {
    navigate('/')
  }

  const addPartnerGenreSelection = (selectedList, selectedItem) => {
    let genre = selectedItem;
    console.log(selectedItem, 'selecteditem')
    let temp = partnerGenres.concat([genre]);
    setPartnerGenres(temp);
  }

  const removePartnerGenreSelection = (selectedList, selectedItem) => {
    let temp = [];
    for (let i = 0; i < selectedList.length; i++) {
      temp.push(selectedList[i]);
    }
    setPartnerGenres(temp);
  }

  const nextPage = (e) => {
    console.log(partnerGenres, 'partnergenres');
    retrievePartnerGenre(partnerGenres);
    navigate('/')
  }

  const previousPage = () => {
    navigate('/userchoice')
  }

  const noPreference = () => {
    navigate('/');
  }

  return (
    <div>
      <div className= 'user-icon-dropdown'>
        <FontAwesomeIcon icon= {faCircleUser} className= 'user-icon'/>
        <h1>{user.email}</h1>
      </div>
      <div className= 'user-information-containers'>
        <div className= 'user-one-container'>
          <button onClick= {previousPage} className= 'back-button'>Back</button>
          <h1>{partnerName}</h1>
          <h2>Select Genres (up to 3)</h2>
          <MultiSelect
            options={options} // Options to display in the dropdown
            // selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={addPartnerGenreSelection} // Function will trigger on select event
            onRemove={removePartnerGenreSelection} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            selectionLimit= {limitGenres}
            placeholder= 'Genre(s)'
            hidePlaceholder= {true}
            className= 'multiselect-dropdown'
            size= 'small'
            rounded= 'large'
            fillMode= 'flat'
          />
          {partnerGenres.map((item) => {
            return (
              <h1>{item.name} {item.id}</h1>
            )
          })
          }
          <div className= 'selection-button-container'>
            {user.genre.length === 0 ?
              <h3>{user.firstName} has no preference. Please help make a decision.</h3> :
              <button className= 'selection-button' onClick= {noPreference}>Whatever {user.firstName} {user.lastName} wants to watch</button>
            }
            <button className= 'selection-button' onClick= {nextPage} disabled= {partnerGenres.length === 0} >Find Match</button>
          </div>
        </div>
      </div>
     </div>
  )

};

export default PartnerChoice;
