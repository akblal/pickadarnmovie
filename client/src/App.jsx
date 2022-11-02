import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

import SignIn from './components/SignIn.jsx';
import UserCreation from './components/UserCreation.jsx';
import Password from './components/Password.jsx';
import Authentication from './components/Authentication.jsx';
import Intention from './components/Intention.jsx'
import Welcome from './components/Welcome.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

function App (props) {

  const [pageNumber, setPageNumber] = useState('sign-in');
  const [user, setUser] = useState({});

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

  return (
    <div>
      <Routes>
        <Route path= '/' element= {<SignIn retrieveUserEmail= {retrieveUserEmail}/>} />
        <Route path= 'password' element= {<Password user= {user}/>} />
        <Route path= 'create-user' element= {<UserCreation retrieveUserEmail= {retrieveUserEmail}/>} />
        <Route path= 'authentication' element= {<Authentication />} />
        <Route path= 'intention' element= {<Intention retrieveUserWatchPartner= {retrieveUserWatchPartner}/>} />
        <Route path= 'welcome' element= {<Welcome user= {user}/>} />
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
