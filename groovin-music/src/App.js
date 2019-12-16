import React from 'react';
import { Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import 'dotenv/config';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import Homepage from './components/Home/Homepage.js';
import LandingPage from './components/landingPage/landingPage';

import TrackList from './components/MusicPlayer/TrackList';
import {MusicPlayerProvider} from './components/MusicPlayer/MusicPlayerContext';
import PlayerControls from './components/MusicPlayer/PlayerControls';

const client = new ApolloClient({
  // client ready to fetch data
  uri: 'http://localhost:4000/graphql',
});

const App = () => {
  return (

    <ApolloProvider client={client}>
      <div className="App">
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/auth/spotify/callback" component={Homepage}></Route>
      </div>
      <MusicPlayerProvider>
    <div className= "container">
      <TrackList/>
      <PlayerControls/>
    </div>
   </MusicPlayerProvider>

    </ApolloProvider>
  );
}


export default App;
