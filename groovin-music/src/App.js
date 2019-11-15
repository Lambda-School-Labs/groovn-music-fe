import React from 'react';
import Navbar from '../components/navbar';
import { Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import LandingPage from './components/landingPage/landingPage.js';

const client = new ApolloClient({
  // client ready to fetch data
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Route path="/" component={LandingPage}></Route>
      </div>
    </ApolloProvider>
  );
}

export default App;
