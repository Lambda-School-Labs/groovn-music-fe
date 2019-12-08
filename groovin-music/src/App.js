import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/Home/Homepage.js';
import LandingPage from './components/landingPage/landingPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/auth/spotify/callback" component={Homepage}></Route>
    </div>
  );
}

export default App;
