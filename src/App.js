import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
