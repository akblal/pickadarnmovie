import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

import SignIn from './components/SignIn.jsx';
import UserCreation from './components/UserCreation.jsx';
import Password from './components/Password.jsx';
import Authentication from './components/Authentication.jsx';
import Intention from './components/Intention.jsx'
import UserChoice from './components/UserChoice.jsx';
import PartnerChoice from './components/PartnerChoice.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

function App (props) {

  const [pageNumber, setPageNumber] = useState('sign-in');
  const [user, setUser] = useState({});

  useEffect(() => {
    user.genre = [];
    user.partnerGenre = [];
    setUser(user)
  }, [])

  const retrieveUserEmail = (email) => {
    user.email = email;
    setUser(user);
    console.log (user,' user has been set')
  }

  const retrieveUserWatchPartner = (list) => {
    user.partner = list;
    setUser(user);
    console.log (user);
  }

  const retrieveUserName = (first, last) => {
    user.firstName = first;
    user.lastName = last;
    setUser(user);
    console.log(user)
  }

  const retrieveUserGenre = (data) => {
    console.log(user.genre, 'initial user.genre')
    let temp = user.genre;
    user.genre = temp.concat(data)
    setUser(user);

    console.log (user, 'genre in app.jsx')
  }

  const retrievePartnerGenre = (data) => {
    console.log(user.partnerGenre, 'initial user.genre')
    let temp = user.partnerGenre;
    user.partnerGenre = temp.concat(data)
    setUser(user);

    console.log (user, 'partnergenre in app.jsx')
  }

  return (
    <div>
      <Routes>
        <Route path= '/' element= {<SignIn retrieveUserEmail= {retrieveUserEmail}/>} />
        <Route path= 'password' element= {<Password user= {user}/>} />
        <Route path= 'create-user' element= {<UserCreation retrieveUserEmail= {retrieveUserEmail}/>} />
        <Route path= 'authentication' element= {<Authentication />} />
        <Route path= 'intention' element= {<Intention retrieveUserWatchPartner= {retrieveUserWatchPartner}/>} />
        <Route path= 'userchoice' element= {<UserChoice user= {user} retrieveUserName={retrieveUserName} retrieveUserGenre= {retrieveUserGenre}/>} />
        <Route path= 'partnerchoice' element= {<PartnerChoice user= {user} retrievePartnerGenre= {retrievePartnerGenre}/>} />
      </Routes>
    </div>
  )
}

root.render(<BrowserRouter>
    <App />
    </BrowserRouter>)

  //   {pageNumber === 'sign-in' &&
  //   <SignIn  changePage= {changePage}/>
  // }

  // {pageNumber === 'create-user' &&
  //   <UserCreation changePage= {changePage} retrieveUser= {retrieveUser}/>
  // }

  // {pageNumber === 'password' &&
  //   <Password changePage= {changePage}/>
  // }

  // {pageNumber === 'authentication' &&
  //   <Authentication changePage= {changePage}/>
  // }

  // {pageNumber === 'finished' &&
  //   <RandomPage changePage= {changePage} user= {user}/>
  // }
