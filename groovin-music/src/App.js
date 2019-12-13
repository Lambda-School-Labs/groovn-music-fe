import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './components/Home/Homepage.js';
import LandingPage from './components/landingPage/landingPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} />
      <Route path="/landing-page" component={LandingPage} />
    </div>
  );
}

export default App;
