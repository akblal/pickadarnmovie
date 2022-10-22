import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

import SignIn from './components/SignIn.jsx';
import UserCreation from './components/UserCreation.jsx';
import Password from './components/Password.jsx';
import Authentication from './components/Authentication.jsx';
import RandomPage from './components/RandomPage.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

function App (props) {

  const [pageNumber, setPageNumber] = useState('sign-in');
  const [user, setUser] = useState({});

  const changePage = (number) => {
    setPageNumber(number);
  }

  const retrieveUser = (user) => {
    setUser(user);
    console.log (user, 'user has been set!')
  }

  return (
    <div>
      <Routes>
        <Route path= '/' element= {<SignIn />} />
        <Route path= 'password' element= {<Password />} />
        <Route path= 'create-user' element= {<UserCreation retrieveUser= {retrieveUser}/>} />
        <Route path= 'authentication' element= {<Authentication />} />
        <Route path= 'random-page' element= {<RandomPage user= {user}/>} />
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
