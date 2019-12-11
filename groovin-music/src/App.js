import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Homepage from './components/Home/Homepage.js';
import LandingPage from './components/landingPage/landingPage';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const USER_QUERY = gql`
  query currentUser {
    currentUser {
      displayName
    }
  }
`;

const User = () => {
  console.log('here');
  const { loading, error, data } = useQuery(USER_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  console.log(data);
  //const { displayName } = data.currentUser;

  return data;
};

function App() {
  useEffect(() => {});

  return (
    <div className="App">
      <Route path="/" component={Homepage} />
      <Route path="/landing-page" component={LandingPage} />
    </div>
  );
}

export default App;
