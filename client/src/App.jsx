import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './components/SignIn.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

function App () {



  return (
    <SignIn />
  )
}

root.render(<BrowserRouter>
    <App />
    </BrowserRouter>)
