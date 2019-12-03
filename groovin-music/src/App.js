import React from 'react';
import { Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import Homepage from './components/Home/Homepage.js';

import TrackList from './components/MusicPlayer/TrackList';
import {MusicPlayerProvider} from './components/MusicPlayer/MusicPlayerContext';

const client = new ApolloClient({
  // client ready to fetch data
  uri: 'http://localhost:4000/graphql',
});

const App = () => {
  return (

    <ApolloProvider client={client}>
      <div className="App">
        <Route path="/" component={Homepage}></Route>
      </div>
      <MusicPlayerProvider>
    <div className= "container">
      <TrackList/>
    </div>
   </MusicPlayerProvider>

    </ApolloProvider>
  );
}


export default App;
