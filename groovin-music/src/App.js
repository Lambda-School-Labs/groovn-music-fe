import React from 'react';
import { Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import Homepage from './components/Home/Homepage.js';
import LandingPage from './components/landingPage/landingPage';

const client = new ApolloClient({
  // client ready to fetch data
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/auth/spotify/callback" component={Homepage}></Route>
      </div>
    </ApolloProvider>
  );
}

export default App;
