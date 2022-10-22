import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './components/SignIn.jsx';
import UserCreation from './components/UserCreation.jsx';
import Password from './components/Password.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

function App (props) {

  const [pageNumber, setPageNumber] = useState('sign-in');

  const changePage = (number) => {
    setPageNumber(number);
  }

  return (
    <div>
      {pageNumber === 'sign-in' &&
        <SignIn  changePage= {changePage}/>
      }

      {pageNumber === 'create-user' &&
        <UserCreation changePage= {changePage}/>
      }

      {pageNumber === 'password' &&
        <Password changePage= {changePage}/>
      }

    </div>
  )
}

root.render(<BrowserRouter>
    <App />
    </BrowserRouter>)
